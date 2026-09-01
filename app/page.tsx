import Sidebar from "../../components/dashboard/Sidebar";
import KPI from "../../components/dashboard/KPI";

export default function WarRoom() {
  return (
    <main style={{ display: "flex", minHeight: "100vh", background: "#111", color: "white" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 24 }}>
        <h1>KOI SXM OS — War Room</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
          <KPI title="CA" value="0 €" />
          <KPI title="Ventes" value="0" />
          <KPI title="Visiteurs" value="0" />
        </div>
      </div>
    </main>
  );
}