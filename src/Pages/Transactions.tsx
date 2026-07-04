import TransactionsBoard from "../components/TransactionsBoard"

const DropdownBar = ()=> {

  return (
    <div className="dropdown flex gap-4 pt-6 pl-5 ">
      
     
    <button className="btn flex-none rounded-xl w-40 bg-white bg-gradient-to-r from-white-100 to-gray-100 
      border-slate-300 text-black/65">Tous les comptes</button>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a> </li>
      </ul>
      <button className="btn flex-none rounded-xl w-45 bg-white bg-gradient-to-r from-white-100 to-gray-100 
      border-slate-300 text-black/65">Toutes les catégories</button>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
      <button className="btn flex-none pl-1 rounded-xl w-55 bg-emerald-900 
      border-slate-300">Ajouter une transaction</button>


    </div>
  )
}

const Transactions = () => {

  return (
    <div>
      
    <DropdownBar />

    <TransactionsBoard />

    </div>
  )
}

export default Transactions