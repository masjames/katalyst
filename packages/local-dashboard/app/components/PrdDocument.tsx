import type { MarkdownBlock } from '../../lib/markdown';

export function PrdDocument({ blocks }: { blocks: MarkdownBlock[] }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const className = block.level === 1
            ? 'mb-8 text-4xl font-semibold tracking-tight text-white md:text-6xl'
            : 'mb-4 mt-10 text-xl font-semibold text-white';
          const Tag = block.level === 1 ? 'h1' : 'h2';
          return <Tag className={className} key={`${block.text}-${index}`}>{block.text}</Tag>;
        }

        if (block.type === 'list') {
          return (
            <ul className="mb-6 grid gap-3 text-slate-200" key={index}>
              {block.items.map((item) => (
                <li className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3" key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p className="mb-6 max-w-3xl text-base leading-8 text-slate-300" key={index}>{block.text}</p>;
      })}
    </article>
  );
}
