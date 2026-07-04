import Dashboard from './dashboard';
import Navbar from '../components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Transactions from './Transactions';
import Comptes from './Comptes';
import {useState} from 'react';

function HomePage() {
    const [user, setUser] = useState('John Doe')
      const [date, setDate] = useState(new Date().toDateString())

  return (
    <div className="flex min-h-screen bg-stone-200"> {/* wrapper flex */}

      <aside className="bg-emerald-700 min-h-screen w-20 sm:w-1/3
      rounded-br-lg flex flex-col"> {/* sidebar */}
        <Navbar />
      </aside>
      <div className="w-screen">
        <div className="text-black flex justify-between items-center m-3 flex-col sm:flex-row m-5">
                <div className="text-left flex-1">
                    <h2 className="text-2xl font-bold text-black/80">Bonjour, { user }</h2>
                    <span>Voici où en sont vos finances </span>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-3xl p-2 px-5">
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200">&lt;</button>
                    <p>{date}</p>
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200">&gt;</button>
                </div>
            </div>

          <Routes>
            <Route path='transactions' element={<Transactions/>} />
            <Route path='comptes' element={<Comptes/>} />
            <Route path='dashboard' element={<Dashboard/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default HomePage