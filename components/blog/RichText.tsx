import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Renders the tiny inline markup used across content/*.ts:
 *   **bold**            → <strong>
 *   [label](/path)      → internal <Link>
 *   [label](https://…)  → external <a target="_blank">
 *
 * Anything else passes through as plain text. Deliberately not a full markdown
 * parser: the content files only ever use these three forms.
 */

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function renderInline(text: string, keyPrefix = ''): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;

  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));

    const [, label, href, bold] = m;

    if (bold) {
      out.push(
        <strong key={`${keyPrefix}b${i}`} style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 700 }}>
          {bold}
        </strong>,
      );
    } else if (href.startsWith('/')) {
      out.push(
        <Link key={`${keyPrefix}l${i}`} href={href} className="content-link">
          {label}
        </Link>,
      );
    } else {
      out.push(
        <a
          key={`${keyPrefix}a${i}`}
          href={href}
          target="_blank"
          rel="noopener"
          className="content-link content-link-ext"
        >
          {label}
        </a>,
      );
    }

    last = at + m[0].length;
    i++;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function RichText({ text, prefix }: { text: string; prefix?: string }) {
  return <>{renderInline(text, prefix)}</>;
}
