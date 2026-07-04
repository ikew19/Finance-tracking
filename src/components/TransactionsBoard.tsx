

function TransactionsBoard() {
    const data = {
        row1:["02/07/2026", "Épicerie IGA", "Épicerie", "Visa", "-45,20 $"],
        row2:["22/09/2026", "Loyer", "Logement", "Compte courant", "-976$"],
        row3:["10/02/2026", "Ventes", "Revenu", "Compte courant", "+2000 $"],
    }

  return (
    <div className="mx-4 mt-6 rounded-2xl border border-slate-200 bg-white bg-gradient-to-r from-white-100 to-gray-100 p-4 shadow-xl">
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-black/60">
          <th className="px-4 py-3">Date</th>
          <th className="px-4 py-3">Description</th>
          <th className="px-4 py-3">Catégorie</th>
          <th className="px-4 py-3">Compte</th>
          <th className="px-4 py-3 text-right">Montant</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
            {Object.entries(data).map( ([id, row]) => (
            <tr key={id} className="hover:bg-emerald-50">
                <td className="px-4 py-3 text-black/60">{row[0]}</td>
                <td className="px-4 py-3 text-black/60 font-semibold">{row[1]}</td>
          <div className="px-4 py-3">
            <td className="px-4 py-3 rounded-2xl bg-slate-200 text-black/60">{row[2]}</td>
          </div>
                <td className="px-4 py-3 text-black/60">{row[3]}</td>
                <td className="px-4 py-3 text-black/60 text-right font-semibold">{row[4]}</td>
            </tr>
            ))}
      </tbody>
    </table>
    </div>
  )
}

export default TransactionsBoard