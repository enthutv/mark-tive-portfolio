'use client';

import DocumentViewer from './DocumentViewer';

export default function TwoRegisCase(){
  const cipPages=Array.from({length:7},(_,i)=>`/images/documents/two-regis-cip/page-${i+1}.jpg`);
  const additionalPages=['/images/documents/two-regis-exterior/page-1.jpg'];
  return <div className="regis-case">
    <div className="regis-hero">
      <div className="regis-image"><img src="/images/projects/megaworld-two-regis.webp" alt="Megaworld Two Regis residential tower at The Upper East"/><div><span>MEGAWORLD · THE UPPER EAST</span><b>Two Regis</b></div></div>
      <div className="regis-copy"><span className="portfolio-kicker">BILL OF QUANTITIES · COST ESTIMATING</span><h3>Two Regis</h3><p>Detailed bills of quantities for the cast-in-place wall takeover package and the related exterior and additional works package.</p><div className="ubiquity-facts"><div><b>Project</b><span>Two Regis · Upper East Residence 2</span></div><div><b>Location</b><span>The Upper East, Bacolod City</span></div><div><b>Role</b><span>QS / PM · BOQ preparation · Cost estimating</span></div></div></div>
    </div>
    <div className="regis-packages">
      <article><span>CIP CAST-IN-PLACE WALL BOQ</span><strong>₱27.00M</strong><p>General requirements, existing conditions and concrete works measured across the takeover package.</p><dl><div><dt>Document</dt><dd>Bill of Quantities</dd></div><div><dt>Coverage</dt><dd>7 pages</dd></div></dl></article>
      <article><span>EXTERIOR & ADDITIONAL WORKS BOQ</span><strong>₱8.00M</strong><p>Scaffolding, wall preparation, plastering, dropwall visor, aircon ledges, balcony slab and zocallo works.</p><dl><div><dt>Document</dt><dd>Bill of Quantities</dd></div><div><dt>Coverage</dt><dd>1 page</dd></div></dl></article>
    </div>
    <div className="regis-evidence">
      <div className="ubiquity-schedule-heading"><span>BOQ EVIDENCE</span><h4>Measured work packages with quantities and cost.</h4><p>The complete CIP and Additional Works BOQs are presented below for direct portfolio review.</p></div>
      <DocumentViewer title="Two Regis — CIP BOQ" subtitle="Complete seven-page bill of quantities for the cast-in-place wall package." pages={cipPages}/>
      <DocumentViewer title="Two Regis — Additional Works BOQ" subtitle="Complete bill of quantities for exterior and additional works." pages={additionalPages}/>
      <p className="ubiquity-note">BOQ documents are presented directly on the website without download links.</p>
    </div>
  </div>;
}
