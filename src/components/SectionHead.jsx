export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
