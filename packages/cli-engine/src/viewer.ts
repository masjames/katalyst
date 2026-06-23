import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const VIEWER_URL = 'http://localhost:3000/viewer';

export type LaunchViewerOptions = {
  artifactPath: string;
  workspaceRoot: string;
};

export function launchViewer({ artifactPath, workspaceRoot }: LaunchViewerOptions): void {
  const repoRoot = findRepoRoot(workspaceRoot);
  const child = spawn('npm', ['run', 'dev:dashboard'], {
    cwd: repoRoot,
    detached: true,
    stdio: 'ignore',
    env: {
      ...process.env,
      KATALYST_PRD_PATH: artifactPath,
      KATALYST_WORKSPACE_ROOT: workspaceRoot
    }
  });

  child.unref();
  setTimeout(() => openBrowser(VIEWER_URL), 1_200).unref();
}

function findRepoRoot(start: string): string {
  let current = start;
  while (current !== path.dirname(current)) {
    if (existsSync(path.join(current, 'package.json')) && existsSync(path.join(current, 'packages', 'local-dashboard'))) {
      return current;
    }
    current = path.dirname(current);
  }

  return path.resolve(import.meta.dirname, '../../..');
}

function openBrowser(url: string): void {
  const command = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'cmd' : 'xdg-open';
  const args = process.platform === 'win32' ? ['/c', 'start', '', url] : [url];
  const opener = spawn(command, args, { detached: true, stdio: 'ignore' });
  opener.unref();
}
