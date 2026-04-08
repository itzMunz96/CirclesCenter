export default function ServicesList({ items }) {
  return (
    <div className="services-grid">
      {items.map((item) => (
        <div className="svc-item" key={item.title}>
          <div className="svc-dot" />
          <div>
            <div className="svc-title">{item.title}</div>
            <div className="svc-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
