const framework = [
  {
    step: '01',
    title: 'Identify the mess',
    interpretation: 'The mess is not “we need another AI wrapper.” The mess is that product thinking, code context, generated artifacts, and implementation decisions are scattered across prompts, editors, chats, docs, and browser tabs.',
    whatWeAreBuilding: 'Katalyst starts as a local-first sensemaking layer for development work. The CLI reads the workspace, turns intent into a PRD, stores the artifact locally, and opens a dedicated viewer so the work has a stable place to land.',
    productImplication: 'The first product boundary is intentionally small: one command, one artifact type, one local viewer.'
  },
  {
    step: '02',
    title: 'State your intent',
    interpretation: 'The intent is to help developers and product-minded builders understand what they are making before they accelerate into implementation.',
    whatWeAreBuilding: 'We are building a superior AI-powered development platform that begins with structure, not generation volume. The platform should make the user feel oriented, confident, and in control.',
    productImplication: 'Every feature should answer: does this make the work easier to understand as a whole?'
  },
  {
    step: '03',
    title: 'Face reality',
    interpretation: 'Reality is local, messy, and security-sensitive. Developers already have repos, conventions, half-written docs, private files, and strong opinions about tooling latency and trust.',
    whatWeAreBuilding: 'The V1 architecture avoids cloud infrastructure. The CLI engine handles local context and orchestration. The dashboard is a separate Next.js visual layer. Generated output stays in the project unless the user chooses otherwise.',
    productImplication: 'The system must be modular, inspectable, and useful even while model orchestration is still mocked.'
  },
  {
    step: '04',
    title: 'Choose a direction',
    interpretation: 'The direction is not a generic chat app. It is a local command surface that turns developer workflows into structured, reviewable artifacts.',
    whatWeAreBuilding: 'The first command is /prd because PRDs expose the whole information architecture problem: goals, audiences, constraints, acceptance criteria, context, and decisions all need names and relationships.',
    productImplication: 'Future commands should follow the same pattern: collect context, clarify intent, generate an artifact, and present it in a purposeful UI.'
  },
  {
    step: '05',
    title: 'Measure the distance',
    interpretation: 'The distance between today and the platform vision is the gap between a mocked local PRD flow and a trusted development operating system.',
    whatWeAreBuilding: 'Today: deterministic Markdown generation, local file context, and a viewer. Next: richer context indexing, real model calls, artifact history, review states, and command extensibility.',
    productImplication: 'Progress should be measured by orientation quality: fewer ambiguous prompts, clearer artifacts, faster review, and more confident next actions.'
  },
  {
    step: '06',
    title: 'Play with structure',
    interpretation: 'Structure is the product. The package boundaries, command names, artifact locations, page hierarchy, and visual system all teach users what this tool is for.',
    whatWeAreBuilding: 'The monorepo separates execution from presentation: cli-engine owns workflow mechanics; local-dashboard owns interpretation and review. The UI uses a restrained system so the information stays primary.',
    productImplication: 'Avoid decorative complexity. Use naming, sequence, hierarchy, and layout to make the workflow self-explanatory.'
  },
  {
    step: '07',
    title: 'Prepare to adjust',
    interpretation: 'The right platform will emerge through repeated sensemaking. The first scaffold should make change cheap rather than pretending the final architecture is already known.',
    whatWeAreBuilding: 'Katalyst is set up to evolve: commands can expand, artifacts can diversify, the viewer can become a dashboard, and AI orchestration can move from mocked output to provider-backed workflows.',
    productImplication: 'V1 should preserve optionality while proving the core loop: prompt → context → artifact → review.'
  }
];

const definitions = [
  ['Primary user', 'A developer or builder working inside a local repository who needs clearer product direction before coding.'],
  ['Core object', 'A generated artifact, beginning with a Markdown PRD saved in the project.'],
  ['Primary place', 'The local dashboard, where artifacts become readable and reviewable.'],
  ['System promise', 'Make AI-assisted development understandable as a whole, not just faster in fragments.']
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black md:px-10 md:py-16">
      <article className="mx-auto flex max-w-3xl flex-col gap-16">
        <header className="flex flex-col gap-8 border-b-2 border-black pb-12">
          <p className="text-sm font-bold uppercase tracking-[0.32em]">Katalyst explained through Abby Covert’s IA framework</p>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              We are building a sensemaking layer for AI-powered development.
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-neutral-700">
              Not a generic chatbot. Not a cloud dashboard. Katalyst is a local-first system that helps developers turn messy intent, repo context, and AI output into structured artifacts they can understand, review, and act on.
            </p>
          </div>
        </header>

        <section className="flex flex-col gap-6 border-b border-black pb-12" aria-labelledby="current-build-heading">
          <p className="text-sm font-bold uppercase tracking-[0.32em]">What we are currently building</p>
          <h2 id="current-build-heading" className="text-3xl font-semibold tracking-[-0.04em]">The V1 foundation</h2>
          <p className="text-lg leading-8 text-neutral-700">
            The current build is a monorepo with two intentionally separate parts: a TypeScript CLI engine that owns the local workflow, and a Next.js dashboard that owns the visual interpretation of generated artifacts.
          </p>
          <dl className="grid gap-0 border-y border-black">
            {definitions.map(([term, description]) => (
              <div className="grid gap-2 border-b border-black py-5 last:border-b-0 md:grid-cols-[180px_1fr]" key={term}>
                <dt className="font-semibold uppercase tracking-[0.18em]">{term}</dt>
                <dd className="leading-7 text-neutral-700">{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-8" aria-labelledby="framework-heading">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.32em]">How to make sense of this build</p>
            <h2 id="framework-heading" className="text-3xl font-semibold tracking-[-0.04em]">
              Seven IA moves applied to Katalyst.
            </h2>
            <p className="text-lg leading-8 text-neutral-700">
              Abby Covert describes information architecture as arranging parts so a whole becomes understandable. Applied here, the framework clarifies what Katalyst is, why the architecture is local-first, and how the product should evolve.
            </p>
          </div>

          <div className="flex flex-col divide-y-2 divide-black border-y-2 border-black">
            {framework.map((item) => (
              <section className="flex flex-col gap-5 py-10" key={item.step}>
                <p className="text-sm font-bold uppercase tracking-[0.32em]">{item.step} — {item.title}</p>
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold tracking-[-0.03em]">Interpretation</h3>
                    <p className="text-base leading-8 text-neutral-700">{item.interpretation}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold tracking-[-0.03em]">What this means for Katalyst</h3>
                    <p className="text-base leading-8 text-neutral-700">{item.whatWeAreBuilding}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold tracking-[-0.03em]">Product implication</h3>
                    <p className="text-base leading-8 text-neutral-700">{item.productImplication}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 border-y border-black py-12" aria-labelledby="loop-heading">
          <p className="text-sm font-bold uppercase tracking-[0.32em]">The product loop</p>
          <h2 id="loop-heading" className="text-3xl font-semibold tracking-[-0.04em]">Prompt → context → artifact → review.</h2>
          <p className="text-lg leading-8 text-neutral-700">
            This is the smallest complete loop for the platform. The developer states intent. The CLI reads local context. The system creates a structured artifact. The dashboard gives that artifact a clear place to be evaluated. Every future capability should strengthen one part of this loop without obscuring the whole.
          </p>
        </section>

        <footer className="flex flex-col gap-5 pb-8">
          <a
            className="inline-flex w-fit border-2 border-black px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            href="/viewer"
          >
            Open PRD viewer
          </a>
          <p className="text-sm leading-6 text-neutral-600">
            The viewer remains available for the generated PRD artifact; this landing page now explains the larger system we are building.
          </p>
        </footer>
      </article>
    </main>
  );
}
