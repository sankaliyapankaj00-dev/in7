'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ { q: string; a: string; }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="glass rounded-xl overflow-hidden" style={{border:'1px solid rgba(255,255,255,0.1)'}}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold hover:text-red-500 transition-colors"
          >
            <span>{faq.q}</span>
            {open === i
              ? <ChevronUp size={20} style={{color:'#e63946', flexShrink:0}} />
              : <ChevronDown size={20} style={{color:'#e63946', flexShrink:0}} />
            }
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-white/70 text-sm border-t border-white/10 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
