const evidence = [
  { category: 'PROJECT OVERVIEW', title: 'SM Iloilo Terminal Market', description: 'Project role, client, location, completion year and portfolio coverage.', image: '/images/documents/sm-iloilo-portfolio/page-01.jpg' },
  { category: 'BOQ / ESTIMATE', title: 'Cost Estimate Summary', description: 'Commercial scope, general requirements and architectural-finish totals.', image: '/images/documents/sm-iloilo-portfolio/page-02.jpg' },
  { category: 'BOQ / ESTIMATE', title: 'Detailed BOQ and Unit Rates', description: 'Measured quantities, units, rates and extended amounts.', image: '/images/documents/sm-iloilo-portfolio/page-03.jpg' },
  { category: 'BOQ / COST PROPOSAL', title: 'Complete SM Iloilo Cost Proposal', description: 'Full one-page proposal covering general requirements, masonry, plastering, rubbed concrete, zocalo and wet-stall countertop works.', image: '/images/documents/sm-iloilo-cost-proposal/page-01.jpg' },
  { category: '2D DRAWING', title: 'Ground-Floor Wall-Type Plan', description: 'Wall classifications, measurement boundaries and floor-plan coordination.', image: '/images/documents/sm-iloilo-portfolio/page-04.jpg' },
  { category: '2D DRAWING', title: 'Second-Floor Wall-Type Plan', description: 'Second-level market layout and coordinated wall-type measurements.', image: '/images/documents/sm-iloilo-portfolio/page-05.jpg' },
  { category: 'SHOP / DETAIL DRAWING', title: 'Market-Stall Details', description: 'Plans, reflected ceiling plan, elevations and construction sections.', image: '/images/documents/sm-iloilo-portfolio/page-06.jpg' },
  { category: 'RFI', title: 'Drop Signage Panels', description: 'Clarification of panel height, framing, paint extent and sheet joints.', image: '/images/documents/sm-iloilo-portfolio/page-07.jpg' },
  { category: 'RFA', title: 'CHB Wall Material Substitution', description: 'Approval request with technical basis, proposal and cost/time impacts.', image: '/images/documents/sm-iloilo-portfolio/page-08.jpg' },
  { category: 'SITE INSTRUCTION', title: 'Revised Footing F2', description: 'Revised dimensions, construction requirements and footing detail.', image: '/images/documents/sm-iloilo-portfolio/page-09.jpg' },
  { category: 'INSTRUCTION RECORD', title: 'Air-Conditioning Revision', description: 'Confirmation of verbal instruction with scope, cost and time impacts.', image: '/images/documents/sm-iloilo-portfolio/page-10.jpg' },
  { category: 'SCHEDULE / S-CURVE', title: 'Project Work Schedule', description: 'Programme activities, Gantt chart, planned-versus-actual curve and variance.', image: '/images/documents/sm-iloilo-portfolio/schedule-clean.png', featured: true },
  { category: 'PROGRESS REPORT', title: 'Project Status Summary', description: 'Duration, elapsed time, accomplishment and schedule variance.', image: '/images/documents/sm-iloilo-portfolio/page-12.jpg' },
  { category: 'PROGRESS REPORT', title: 'Ground-Floor Concreting', description: 'Accomplishment, balance to complete and photo-supported site progress.', image: '/images/documents/sm-iloilo-portfolio/page-13.jpg' },
];

export default function SmPortfolioEvidence() {
  return <section className="sm-evidence" aria-label="SM Iloilo portfolio evidence">
    <div className="sm-evidence-list">
      {evidence.map((item, index) => <article className={`sm-evidence-item${item.featured ? ' sm-evidence-item-featured' : ''}`} key={item.title}>
        <header>
          <div>
            <span>{item.category}</span>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
          <b>{String(index + 1).padStart(2, '0')} / {evidence.length}</b>
        </header>
        <div className="sm-evidence-sheet">
          <img src={item.image} alt={`${item.category}: ${item.title}`} loading={index < 2 ? 'eager' : 'lazy'} />
        </div>
      </article>)}
    </div>
  </section>;
}
