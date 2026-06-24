export default function ChartCard({ title, children }) {
  return (
    <div className="chart-card">
      <h2 className="chart-title">{title}</h2>

      <div className="chart-content">
        {children}
      </div>
    </div>
  );
}