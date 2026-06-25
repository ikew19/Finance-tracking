const checkingAccount = (amount: number) => {
  return (
    <>
      <div className="h-56 w-full max-w-xl rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black">
              Actif
            </span>
            <h3 className="text-lg font-semibold text-black">Compte courant</h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black">Solde actuel</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black">$</span>
            <span className="text-3xl font-bold tracking-tight text-black">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const visaAccount = (amount: number) => {
  return (
    <>
      <div className="h-56 w-full max-w-sm rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black">
              Visa
            </span>
            <h3 className="text-lg font-semibold text-black">
              Carte de crédit
            </h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black">Solde à rembourser</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black">$</span>
            <span className="text-3xl font-bold tracking-tight text-black">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const savings = (amount: number) => {
  return (
    <>
      <div className="h-56 w-full max-w-sm rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black">
              Compte d'épargne
            </span>
            <h3 className="text-lg font-semibold text-black">Épargne</h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black">Solde actuel</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black">$</span>
            <span className="text-3xl font-bold tracking-tight text-black">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
function Comptes() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <header className="rounded-md bg-stone-100 p-4 inset-shadow-xl">
        <h1 className="text-3xl tracking-tight font-sans font-medium subpixel-antialiased">
          Bonjour
        </h1>
        <span className="block h-4" />
        <p className="text-xl tracking-tight font-sans font-light ">
          {" "}
          Gérer votre argent avec diligence
        </p>
      </header>

      <main className="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-8 pt-10 md:grid-cols-2">
        {checkingAccount(300000)}
        {savings(5000)}
        {visaAccount(2000)}
      </main>
    </div>
  );
}

export default Comptes;
