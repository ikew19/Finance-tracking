import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Transactions from './Pages/Transactions'
import Comptes from './Pages/Comptes'


function App() {
  

  return (
    
    <div className="flex h-screen "> {/* wrapper flex */}
      <aside className="bg-emerald-700 h-full min-w-1/5
      rounded-br-lg flex flex-col"> {/* sidebar */}
      <Navbar />

    </aside>

    <div className="p-4">
        <Routes>
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/comptes' element={<Comptes/>} />
        </Routes>
      </div>

    </div>

  )
}

export default App
