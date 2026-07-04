

function TransactionsBoard() {
    const data = {
        row1:["02/07/2026", "Épicerie IGA", "Épicerie", "Visa", "-45,20 $"],
        row2:["22/09/2026", "Loyer", "Logement", "Compte courant", "-976$"],
        row3:["10/02/2026", "Ventes", "Revenu", "Compte courant", "+2000 $"],
    }

  return (
    <div className="my-10">
    <table className="border border-slate-200 text-center text-sm bg-white rounded-2xl bg-gradient-to-r from-white-100 to-gray-100 shadow-xl w-[90%] mx-auto">
      <thead>
        <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-black/60 text-center">
          <th>Date</th>
          <th>Description</th>
          <th>Catégorie</th>
          <th>Compte</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
            {Object.entries(data).map( ([id, row]) => (
            <tr key={id} className="hover:bg-emerald-50">
                <td className="py-3 text-black/60">{row[0]}</td>
                <td className="py-3 text-black/60 font-semibold">{row[1]}</td>
          <div className="py-3">
            <td className="py-3 rounded-2xl bg-slate-200 text-black/60">{row[2]}</td>
          </div>
                <td className="py-3 text-black/60">{row[3]}</td>
                <td className="py-3 text-black/60 text-right font-semibold">{row[4]}</td>
            </tr>
            ))}
      </tbody>
    </table>
    </div>
  )
}

export default TransactionsBoard