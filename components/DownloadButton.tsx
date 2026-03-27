import { Download } from 'lucide-react';

const DL_URL = "https://acc.in7game.org/api/web/share/index.html?ic=AA6YDBPC&ts=1774462560&m=2&lang=hi&id=1";

interface Props {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function DownloadButton({ text = "Download IN7 Free", className = "", size = "md" }: Props) {
  const cls = size === 'lg' ? 'btn-gold-lg pulse-gold' : 'btn-gold';
  const iconSize = size === 'lg' ? 20 : 16;
  return (
    <a
      href={DL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} ${className}`}
    >
      <Download size={iconSize} strokeWidth={2.5} />
      {text}
    </a>
  );
}
