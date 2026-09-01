import Sidebar from "../../components/dashboard/Sidebar";
import KPI from "../../components/dashboard/KPI";

export default function WarRoom() {
  return (
    <div className="flex min-h-screen bg-[#090909] text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold">Founder Mode</h1>

        <p className="mt-2 text-zinc-400">
          Bienvenue dans KOI SXM OS™
        </p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <KPI title="CA du mois" value="0 €" />
          <KPI title="Stock vivant" value="0" />
          <KPI title="Clients VIP" value="0" />
          <KPI title="Imports" value="0" />
        </div>

        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h2 className="text-2xl font-semibold">KOI Jarvis</h2>

          <p className="text-zinc-400 mt-3">
            Bonjour.
            Votre briefing quotidien apparaîtra ici.
          </p>
        </section>
      </main>
    </div>
  );
}