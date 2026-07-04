import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home/*" element={<HomePage />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
