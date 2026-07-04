import './App.css'

import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Transactions from './Pages/Transactions'
import Comptes from './Pages/Comptes'
import Budgets from './Pages/Budgets'
import Dashboard from './Pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="bg-emerald-700 min-h-screen w-20 sm:w-1/3 
      rounded-br-lg w-[80px]"> {/* sidebar */}
          <Navbar />
        </aside>
        <div className="w-screen">
          <Routes>
            <Route path='/transactions' element={<Transactions/>} />
            <Route path='/comptes' element={<Comptes/>} />
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/budgets' element={<Budgets/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App