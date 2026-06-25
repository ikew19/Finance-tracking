//@ts-check
import { NavLink } from "react-router-dom";
import Logo from '../assets/profile.svg?react';
import { ArrowLeftRight, BadgeDollarSign, HandCoins, LayoutDashboard, User, UserPen, Wallet } from "lucide-react";

function Navbar() {
  return (
    <div className="z-50 grid grid-rows-[auto_1fr_80px] h-screen fixed">
      <div className="flex items-center py-8 ml-3">
        <BadgeDollarSign size={50} className="text-white"/>
        <h1 className="text-neutral-100 text-3xl font-mono hidden sm:block">F-track</h1>
      </div>
      <ol className="list text-left text-white">
        <NavLink to="/dashboard">
          <li className="list-row group hover:translate-x-5 hover:bg-emerald-500 rounded-full transition w-fit">
            <LayoutDashboard/>
            <span className="hidden group-hover:block sm:block">Dashboard</span>
          </li>
        </NavLink>
        <NavLink to="/comptes">
          <li className="list-row group hover:translate-x-5 hover:bg-emerald-500 rounded-full transition w-fit">
            <Wallet/>
            <span className="hidden group-hover:block sm:block">Comptes</span>
          </li>
        </NavLink>
        <NavLink to="/transactions">
          <li className="list-row group hover:translate-x-5 hover:bg-emerald-500 rounded-full transition w-fit">
            <ArrowLeftRight/>
            <span className="hidden group-hover:block sm:block">Transactions</span>
          </li>
        </NavLink>
        <NavLink to="/budgets">
          <li className="list-row group hover:translate-x-5 hover:bg-emerald-500 rounded-full transition w-fit">
            <HandCoins/>
            <span className="hidden group-hover:block sm:block">Budgets</span>
          </li>
        </NavLink>
      </ol>
      <footer className="min-h-24 text-neutral-100 antialiased ml-3"> 
        <div className="flex items-center group gap-3 text-left">
          <div className="bg-emerald-600 p-3 rounded-full">
            <User/>
          </div>
          <div className="hidden group-hover:block sm:block bg-emerald-600 sm:bg-transparent p-1 rounded-xl">
            <p className='text-lg font-semibold'>John Doe</p>
            <p className="text-xs">email@email.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
