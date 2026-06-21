//@ts-check
import { NavLink } from "react-router-dom";
import Logo from '../assets/profile.svg?react';

function Navbar() {
  return (
    <>
      <div className="flex items-center py-8">
        <img
          src="/src/assets/personal-finance.png"
          alt="Logo"
          className="w-16 h-16 ml-4 mr-4"
        />
        <h1 className="text-neutral-100 text-3xl font-mono">F-track</h1>
      </div>

      <ol className="grid grid-cols-2 md:grid-cols-1 gap-y-2">
        <NavLink to="/dashboard">
          <li
            className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
                antialiased rounded-s-lg text-center hover:bg-emerald-800"
          >
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/comptes">
          <li
            className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
                antialiased rounded-s-lg text-center hover:bg-emerald-800"
          >
            Comptes
          </li>
        </NavLink>
        <NavLink to="/transactions">
          <li
            className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
                antialiased rounded-s-lg text-center hover:bg-emerald-800"
          >
            Transactions
          </li>
        </NavLink>
        <NavLink to="/budgets">
          <li
            className=" hover:600 dark:hover:shadow-xl/30 text-neutral-100 
                antialiased rounded-s-lg text-center hover:bg-emerald-800"
          >
            Budgets
          </li>
        </NavLink>
      </ol>

      <main className="flex-1" />

      <footer className=" min-h-24 text-neutral-100 
                antialiased flex justify-center gap-5"> 
        <div className='place-self-center'>
              <Logo  className='max-h-24 w-16 text-gray-400 bg-amber-50 rounded-full
            '/>
        </div>
        <p className='text-lg font-semibold place-self-center'>Profil</p>
      </footer>
    </>
  );
}

export default Navbar;
