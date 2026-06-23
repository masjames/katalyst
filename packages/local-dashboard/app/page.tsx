const principles = [
  {
    eyebrow: '01 — Identify the mess',
    title: 'Start with what developers are actually trying to untangle.',
    body: 'Katalyst treats prompts, files, decisions, and generated artifacts as one working context instead of scattered outputs.'
  },
  {
    eyebrow: '02 — State intent',
    title: 'Make the desired outcome obvious before adding complexity.',
    body: 'The first workflow is intentionally narrow: turn a product idea into a useful PRD that can be reviewed locally.'
  },
  {
    eyebrow: '03 — Prepare to adjust',
    title: 'Design the structure so it can change as the work becomes clearer.',
    body: 'The CLI engine and dashboard are separate packages, leaving room for richer model orchestration and artifact types later.'
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black md:px-10">
      <section className="mx-auto flex max-w-2xl flex-col gap-16">
        <header className="flex flex-col gap-8 border-b border-black pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em]">Katalyst</p>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Make sense of developer work before the work begins.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              A local-first command layer and viewer for turning messy product intent into structured planning artifacts.
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-10" aria-labelledby="ia-heading">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.32em]">Information architecture</p>
            <h2 id="ia-heading" className="text-3xl font-semibold tracking-[-0.04em]">
              A simple path through the mess.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-black border-y border-black">
            {principles.map((principle) => (
              <article className="flex flex-col gap-4 py-8" key={principle.eyebrow}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">{principle.eyebrow}</p>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em]">{principle.title}</h3>
                <p className="text-base leading-7 text-neutral-700">{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-5 pb-8">
          <a
            className="inline-flex w-fit border border-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            href="/viewer"
          >
            Open PRD viewer
          </a>
          <p className="text-sm leading-6 text-neutral-600">
            Built for a zero-infrastructure workflow: run the CLI, generate the artifact, review it in the browser.
          </p>
        </footer>
      </section>
    </main>
  );
}
