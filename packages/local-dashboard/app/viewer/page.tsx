import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { PrdDocument } from '../components/PrdDocument';
import { parseMarkdown } from '../../lib/markdown';

async function loadMarkdown(): Promise<string> {
  const artifactPath = process.env.KATALYST_PRD_PATH
    ?? path.join(process.env.KATALYST_WORKSPACE_ROOT ?? process.cwd(), '.katalyst', 'generated', 'prd.md');

  try {
    return await readFile(artifactPath, 'utf8');
  } catch {
    return '# No PRD loaded\n\nRun `katalyst prd "your product idea"` to generate a local artifact.';
  }
}

export default async function ViewerPage() {
  const markdown = await loadMarkdown();
  const blocks = parseMarkdown(markdown);

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
      <section className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-indigo-950/30 backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-indigo-200">Katalyst</p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Local PRD Command Center</h1>
            <p className="mt-4 max-w-2xl text-slate-300">A premium, zero-infrastructure surface for reviewing AI-generated planning artifacts.</p>
          </div>
          <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">Local-first · Port 3000</div>
        </div>
        <PrdDocument blocks={blocks} />
      </section>
    </main>
  );
}
