import Link from 'next/link';
import { ExternalLink, ArrowRight, Wrench, Lightbulb } from 'lucide-react';
import type { Tool } from '@/content/tool-types';
import { getTools } from '@/content/tools';
import { getTarget, link } from '@/content/codaiman';
import FAQSection from '@/components/FAQSection';
import RichText from '@/components/blog/RichText';

export default function ToolView({ tool }: { tool: Tool }) {
  const related = getTools(tool.related);
  const toolhub = getTarget('toolhub');
  const secondary = getTarget(tool.target);

  return (
    <article style={{ maxWidth: '820px', margin: '0 auto', padding: '0 16px 40px' }}>
      <header style={{ paddingTop: '26px', marginBottom: '26px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <span className="post-tag">{tool.cat} tool</span>
          <span className="post-tag" style={{ color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Browser based
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.55rem, 5.6vw, 2.4rem)', fontWeight: 900, lineHeight: 1.16, marginBottom: '14px' }}>
          {tool.h1}
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '18px' }}>
          {tool.excerpt}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <a href={toolhub.url} target="_blank" rel="noopener" className="btn-gold">
            <Wrench size={14} strokeWidth={2.5} />
            Open {tool.name} on ToolHub
          </a>
          <Link href="/tools" className="btn-outline" style={{ fontSize: '0.85rem', padding: '10px 18px' }}>
            All tools
          </Link>
        </div>
      </header>

      {/* What it does */}
      {tool.what.map((para, i) => (
        <p key={i} className="prose-p">
          <RichText text={para} prefix={`w${i}`} />
        </p>
      ))}

      {/* Specs */}
      <h2 className="prose-h2" id="specs">
        {tool.name}: the facts that matter
      </h2>
      <div className="prose-table-wrap">
        <table className="prose-table" style={{ minWidth: '340px' }}>
          <tbody>
            {tool.specs.map(([k, v]) => (
              <tr key={k}>
                <td style={{ whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{k}</td>
                <td style={{ color: 'rgba(255,255,255,0.82)' }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Steps */}
      <h2 className="prose-h2" id="how-to">
        How to do it, step by step
      </h2>
      <ol className="prose-list prose-list-ordered">
        {tool.steps.map((s, i) => (
          <li key={i}>
            <span className="prose-num">{i + 1}</span>
            <span>
              <RichText text={s} prefix={`s${i}`} />
            </span>
          </li>
        ))}
      </ol>

      {/* Tips */}
      <h2 className="prose-h2" id="tips">
        Three things worth knowing
      </h2>
      <ul className="prose-list">
        {tool.tips.map((t, i) => (
          <li key={i}>
            <Lightbulb size={14} style={{ color: '#e63946', flexShrink: 0, marginTop: '4px' }} />
            <span>
              <RichText text={t} prefix={`t${i}`} />
            </span>
          </li>
        ))}
      </ul>

      {/* Problems */}
      <h2 className="prose-h2" id="problems">
        Common problems, solved
      </h2>
      <FAQSection faqs={tool.problems} />

      {/* Where the tool lives */}
      <h2 className="prose-h2" id="where">
        Where to run it
      </h2>
      <p className="prose-p">
        This tool is part of <RichText text={link('toolhub', 3)} />, a library of over 1,000 browser-based tools
        covering PDF, image, video, audio, text and developer work. Everything runs in the browser and none of it needs
        an account.
      </p>
      <p className="prose-p">
        ToolHub is built by <RichText text={link('home', 1)} />, an AI-first software company in Ahmedabad. Related to
        this page: <RichText text={`[${secondary.label}](${secondary.url})`} /> {secondary.blurb.toLowerCase()}
      </p>

      <div className="prose-cta">
        <p>
          <strong style={{ color: 'rgba(255,255,255,0.95)' }}>{tool.name}, in the browser: </strong>
          no install, no sign-up, no upload queue. Part of the ToolHub library from CodeAiMan.
        </p>
        <a href={toolhub.url} target="_blank" rel="noopener" className="btn-gold">
          <ExternalLink size={14} strokeWidth={2.5} />
          Open ToolHub
        </a>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <>
          <h2 className="prose-h2" id="related">
            Related tools
          </h2>
          <div className="dir-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/tools/${r.slug}`} className="post-card">
                <div className="post-meta">
                  <span className="post-tag">{r.cat}</span>
                </div>
                <h3>{r.name}</h3>
                <p>{r.excerpt}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#ff6b74' }}>
                  Read guide <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </article>
  );
}
