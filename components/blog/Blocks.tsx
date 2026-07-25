import { Info, AlertTriangle, CheckCircle, Quote, Download } from 'lucide-react';
import type { Block } from '@/content/types';
import { getBrands, getBrand } from '@/content/brands';
import RichText from './RichText';
import BrandCard from './BrandCard';

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

const NOTE_STYLE = {
  info: { bg: 'rgba(0,212,255,0.06)', border: 'rgba(0,212,255,0.25)', color: '#00d4ff', Icon: Info },
  warn: { bg: 'rgba(230,57,70,0.07)', border: 'rgba(230,57,70,0.3)', color: '#f87171', Icon: AlertTriangle },
  ok: { bg: 'rgba(34,197,94,0.07)', border: 'rgba(34,197,94,0.25)', color: '#22c55e', Icon: CheckCircle },
} as const;

function One({ block, i }: { block: Block; i: number }) {
  switch (block.t) {
    case 'h2':
      return (
        <h2 id={block.id ?? slugifyHeading(block.text)} className="prose-h2">
          <RichText text={block.text} prefix={`h2${i}`} />
        </h2>
      );

    case 'h3':
      return (
        <h3 className="prose-h3">
          <RichText text={block.text} prefix={`h3${i}`} />
        </h3>
      );

    case 'p':
      return (
        <p className="prose-p">
          <RichText text={block.text} prefix={`p${i}`} />
        </p>
      );

    case 'ul':
      return (
        <ul className="prose-list">
          {block.items.map((it, j) => (
            <li key={j}>
              <span className="prose-bullet" aria-hidden />
              <span>
                <RichText text={it} prefix={`u${i}-${j}`} />
              </span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="prose-list prose-list-ordered">
          {block.items.map((it, j) => (
            <li key={j}>
              <span className="prose-num">{j + 1}</span>
              <span>
                <RichText text={it} prefix={`o${i}-${j}`} />
              </span>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="prose-table-wrap">
          <table className="prose-table">
            <thead>
              <tr>
                {block.head.map((h, j) => (
                  <th key={j}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k}>
                      <RichText text={cell} prefix={`t${i}-${j}-${k}`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'note': {
      const s = NOTE_STYLE[block.kind];
      return (
        <div
          className="prose-note"
          style={{ background: s.bg, border: `1px solid ${s.border}` }}
        >
          <s.Icon size={16} style={{ color: s.color, flexShrink: 0, marginTop: '3px' }} />
          <p>
            <RichText text={block.text} prefix={`n${i}`} />
          </p>
        </div>
      );
    }

    case 'quote':
      return (
        <blockquote className="prose-quote">
          <Quote size={16} style={{ color: '#e63946', flexShrink: 0 }} />
          <div>
            <p>
              <RichText text={block.text} prefix={`q${i}`} />
            </p>
            {block.by && <cite>{block.by}</cite>}
          </div>
        </blockquote>
      );

    case 'apps': {
      const list = getBrands(block.keys);
      return (
        <section className="prose-apps">
          {block.title && <h3 className="prose-h3">{block.title}</h3>}
          <div className="prose-apps-grid">
            {list.map((b) => (
              <BrandCard key={b.key} brand={b} compact />
            ))}
          </div>
        </section>
      );
    }

    case 'cta': {
      const b = getBrand(block.key);
      return (
        <div className="prose-cta">
          <p>
            <RichText text={block.text} prefix={`c${i}`} />
          </p>
          <a href={b.url} target="_blank" rel="noopener" className="btn-gold">
            <Download size={14} strokeWidth={2.5} />
            Visit {b.domain}
          </a>
        </div>
      );
    }
  }
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <One key={i} block={b} i={i} />
      ))}
    </>
  );
}

/** Table-of-contents entries built from the h2 blocks of an article. */
export function tocFrom(blocks: Block[]): { id: string; text: string }[] {
  return blocks
    .filter((b): b is Extract<Block, { t: 'h2' }> => b.t === 'h2')
    .map((b) => ({
      id: b.id ?? slugifyHeading(b.text),
      text: b.text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
    }));
}
