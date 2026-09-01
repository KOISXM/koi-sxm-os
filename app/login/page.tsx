export default function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#090909] text-white">
      <div className="w-[420px] rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
        <h1 className="text-3xl font-bold">KOI SXM OS™</h1>

        <p className="text-zinc-400 mt-2">
          Connexion Premium
        </p>

        <input
          placeholder="Email"
          className="mt-8 w-full rounded-xl border border-zinc-700 bg-black p-3"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="mt-4 w-full rounded-xl border border-zinc-700 bg-black p-3"
        />

        <button className="mt-8 w-full rounded-xl bg-red-700 p-3 font-semibold hover:bg-red-600 transition">
          Entrer
        </button>
      </div>
    </main>
  );
}