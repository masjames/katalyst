#!/usr/bin/env node
import { readWorkspaceContext } from './context.js';
import { generateMockPrd } from './prd.js';
import { launchViewer } from './viewer.js';

const [, , command, ...args] = process.argv;

async function main(): Promise<void> {
  if (command !== 'prd' && command !== '/prd') {
    console.log('Usage: katalyst prd "Describe the product"');
    process.exitCode = 1;
    return;
  }

  const prompt = args.join(' ').trim();
  if (!prompt) {
    console.error('A PRD prompt is required.');
    process.exitCode = 1;
    return;
  }

  const workspaceRoot = process.cwd();
  const context = await readWorkspaceContext(workspaceRoot);
  const result = await generateMockPrd({ prompt, context });

  launchViewer({ artifactPath: result.outputPath, workspaceRoot });
  console.log(`PRD generated: ${result.outputPath}`);
  console.log('Viewer launching: http://localhost:3000/viewer');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
