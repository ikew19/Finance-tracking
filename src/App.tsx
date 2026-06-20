import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="flex h-screen "> {/* wrapper flex */}
      <aside className="bg-emerald-700 h-full min-w-1/4 rounded-br-lg">
      <Navbar />
    </aside>

    </div>

  )
}

export default App
