type Props = {
  title: string;
  value: string;
};

export default function KPI({ title, value }: Props) {
  return (
    <div style={{ padding: 20, border: "1px solid #333", borderRadius: 12 }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}