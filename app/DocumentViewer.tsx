'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import './document-viewer.css';

type Props = {
  title: string;
  subtitle: string;
  pages: string[];
  labels?: string[];
};

export default function DocumentViewer({ title, subtitle, pages, labels }: Props) {
  const [activePage, setActivePage] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (activePage === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePage(null);
      if (event.key === 'ArrowLeft') setActivePage(page => page === null ? null : (page - 1 + pages.length) % pages.length);
      if (event.key === 'ArrowRight') setActivePage(page => page === null ? null : (page + 1) % pages.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activePage, pages.length]);

  const viewer = activePage !== null && (
    <div className="document-modal" role="dialog" aria-modal="true" aria-label={`${title}, page ${activePage + 1} of ${pages.length}`}>
      <button className="document-modal-backdrop" aria-label="Close document viewer" onClick={() => setActivePage(null)} />
      <div className="document-modal-panel">
        <header>
          <div><strong>{title}</strong><span>Page {activePage + 1} of {pages.length}</span></div>
          <button onClick={() => setActivePage(null)} aria-label="Close preview"><X /></button>
        </header>
        <div className="document-modal-stage">
          {pages.length > 1 && <button className="document-nav previous" onClick={() => setActivePage((activePage - 1 + pages.length) % pages.length)} aria-label="Previous page"><ChevronLeft /></button>}
          <img src={pages[activePage]} alt={`${title}, page ${activePage + 1}`} />
          {pages.length > 1 && <button className="document-nav next" onClick={() => setActivePage((activePage + 1) % pages.length)} aria-label="Next page"><ChevronRight /></button>}
        </div>
        {pages.length > 1 && <div className="document-page-strip" aria-label="Document pages">{pages.map((page, index) => <button key={page} className={index === activePage ? 'active' : ''} onClick={() => setActivePage(index)} aria-label={`Open page ${index + 1}`}><img src={page} alt="" /><span>{index + 1}</span></button>)}</div>}
      </div>
    </div>
  );

  return <section className="document-viewer">
    <div className="document-viewer-heading">
      <div><span>ON-SITE DOCUMENT VIEWER</span><h4>{title}</h4><p>{subtitle}</p></div>
      <button className="document-open-button" onClick={() => setActivePage(0)}><Eye /> View all {pages.length} {pages.length === 1 ? 'page' : 'pages'}</button>
    </div>
    <div className="document-thumbnails">
      {pages.map((page, index) => <button key={page} onClick={() => setActivePage(index)} aria-label={`Open ${title}, page ${index + 1}`}>
        <div><img src={page} alt={`${title}, page ${index + 1}`} loading="lazy" /><span><Eye /> Preview</span></div>
        <b>{labels?.[index] || `Page ${index + 1}`}</b>
      </button>)}
    </div>
    {mounted && viewer ? createPortal(viewer, document.body) : null}
  </section>;
}
