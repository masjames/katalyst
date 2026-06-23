import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { WorkspaceContext } from './context.js';

export type PrdInput = {
  prompt: string;
  context: WorkspaceContext;
};

export type PrdResult = {
  markdown: string;
  outputPath: string;
};

export async function generateMockPrd(input: PrdInput): Promise<PrdResult> {
  const outputPath = path.join(input.context.root, '.katalyst', 'generated', 'prd.md');
  const markdown = buildMarkdown(input);

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, markdown, 'utf8');

  return { markdown, outputPath };
}

function buildMarkdown({ prompt, context }: PrdInput): string {
  const observedFiles = context.files.length
    ? context.files.map((file) => `- \`${file.path}\`: ${file.excerpt || 'No readable excerpt.'}`).join('\n')
    : '- No local context files were detected.';

  return `# Product Requirements Document\n\n## 1. Product Brief\n\n${prompt}\n\n## 2. Goals\n\n- Convert rough product intent into a structured delivery artifact.\n- Keep all workflow data local-first until a model call is explicitly configured.\n- Provide a premium viewer that makes generated planning work easy to review.\n\n## 3. User Experience\n\n- The developer runs \`/prd\` or \`katalyst prd\` with a natural-language prompt.\n- The CLI reads lightweight workspace context and writes a Markdown artifact.\n- The local dashboard opens automatically at \`http://localhost:3000/viewer\`.\n\n## 4. Local Context Snapshot\n\n${observedFiles}\n\n## 5. V1 Acceptance Criteria\n\n- A deterministic Markdown PRD is created at \`.katalyst/generated/prd.md\`.\n- The dashboard can render the artifact without cloud infrastructure.\n- CLI and dashboard code stay modular and independently buildable.\n`; 
}
