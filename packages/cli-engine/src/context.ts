import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const IGNORED_DIRECTORIES = new Set(['.git', 'node_modules', '.next', 'dist', '.katalyst']);
const CONTEXT_FILE_LIMIT = 12;
const CONTEXT_CHAR_LIMIT = 800;

export type ContextFile = {
  path: string;
  excerpt: string;
};

export type WorkspaceContext = {
  root: string;
  files: ContextFile[];
};

export async function readWorkspaceContext(root: string): Promise<WorkspaceContext> {
  const files = await collectFiles(root, root);
  const selected = files.slice(0, CONTEXT_FILE_LIMIT);
  const contextFiles = await Promise.all(
    selected.map(async (filePath) => ({
      path: path.relative(root, filePath),
      excerpt: await readExcerpt(filePath)
    }))
  );

  return { root, files: contextFiles };
}

async function collectFiles(root: string, current: string): Promise<string[]> {
  const entries = await readdir(current, { withFileTypes: true });
  const nested = await Promise.all(
    entries
      .filter((entry) => !entry.name.startsWith('.') || entry.name === '.env.example')
      .filter((entry) => !IGNORED_DIRECTORIES.has(entry.name))
      .map(async (entry) => {
        const fullPath = path.join(current, entry.name);
        if (entry.isDirectory()) return collectFiles(root, fullPath);
        if (entry.isFile() && isContextFile(fullPath)) return [fullPath];
        return [];
      })
  );

  return nested.flat().sort((a, b) => a.localeCompare(b));
}

function isContextFile(filePath: string): boolean {
  return /\.(md|mdx|txt|json|ts|tsx|js|jsx|css|scss|html|yml|yaml)$/i.test(filePath);
}

async function readExcerpt(filePath: string): Promise<string> {
  const metadata = await stat(filePath);
  if (metadata.size > 200_000) return '[Large file skipped]';

  const content = await readFile(filePath, 'utf8');
  return content.replace(/\s+/g, ' ').trim().slice(0, CONTEXT_CHAR_LIMIT);
}
