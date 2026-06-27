import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Transactions from './Pages/Transactions'
import Comptes from './Pages/Comptes'
import Budgets from './Pages/Budgets'
import Dashboard from './Pages/dashboard'


function App() {

  return (
    
    <div className="flex min-h-screen bg-stone-200"> {/* wrapper flex */}
      <aside className="bg-emerald-700 min-h-screen w-20 sm:w-1/3
      rounded-br-lg flex flex-col"> {/* sidebar */}
        <Navbar />
      </aside>
      <div className="w-screen">
          <Routes>
            <Route path='/transactions' element={<Transactions/>} />
            <Route path='/comptes' element={<Comptes/>} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/budgets' element={<Budgets/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App
