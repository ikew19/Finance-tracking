
/*{amount}: {amount:number} => destructuring syntax pour extraire la prop amount*/

const CheckingAccount = ({amount}: {amount:number}) => {
  return (
    <>
      <div className="h-56 w-full max-w-xl rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black/80">
              Actif
            </span>
            <h3 className="text-lg font-semibold text-black/60">Compte courant</h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black/80">Solde actuel</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black/80">$</span>
            <span className="text-3xl font-bold tracking-tight text-black/80">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const VisaAccount = ({amount}: {amount:number}) => {
  return (
    <>
      <div className="h-56 w-full max-w-sm rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black/80">
              Visa
            </span>
            <h3 className="text-lg font-semibold text-black/60">
              Carte de crédit
            </h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black/80">Solde à rembourser</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black/80">$</span>
            <span className="text-3xl font-bold tracking-tight text-black/80">
              {amount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const SavingsAccount = ({amount}: {amount:number}) => {
  return (
    <>
      <div className="h-56 w-full max-w-sm rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-6 shadow-xl sm:w-96">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-black/80">
              Compte d'épargne
            </span>
            <h3 className="text-lg font-semibold text-black/60">Épargne</h3>
          </div>
        </div>

        <div className="pt-5">
          <p className="text-xs text-black/80">Solde actuel</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-black/80">$</span>
            <span className="text-3xl font-bold tracking-tight text-black/80">
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


      <main className="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-8 pt-10 md:grid-cols-2">
        <CheckingAccount amount={15000} />
        <SavingsAccount amount={5000} />
        <VisaAccount amount={2000} />
      </main>
    </div>
  );
}

export default Comptes;
