//@ts-check

function Navbar() {


    return (
        <>
        <h1 className="text-neutral-100 mb-8 text-3xl indent-8">F-track</h1>
        <ol className="grid grid-cols-2 md:grid-cols-1 gap-y-6.25">
            <li className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
            antialiased rounded-s-lg text-center hover:bg-emerald-950" >Dashboard</li>
            <li className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
            antialiased rounded-s-lg text-center hover:bg-emerald-950">Comptes</li>
            <li className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
            antialiased rounded-s-lg text-center hover:bg-emerald-950">Transactions</li>
            <li className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
            antialiased rounded-s-lg text-center hover:bg-emerald-950">Budgets</li>
        </ol>
        </>
    )
}

export default Navbar;