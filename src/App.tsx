import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Transactions from './Pages/Transactions'
import Comptes from './Pages/Comptes'
import Logo from './assets/profile.svg?react'


function App() {
  

  return (
    
    <div className="flex h-screen "> {/* wrapper flex */}
      <aside className="bg-emerald-700 h-full min-w-1/4 
      rounded-br-lg flex flex-col"> {/* sidebar */}
      <Navbar />

      <main className="flex-1" />

      <footer className=" min-h-24 text-neutral-100 
                antialiased flex justify-center gap-5"> 
        <div>
              <Logo  className='max-h-24 w-15 fill-white'/>
        </div>
        <p className='text-lg font-semibold place-self-center'>Profil</p>
      </footer>
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
