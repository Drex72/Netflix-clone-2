import './App.scss'
import Home from './Pages/home/Home'
import Watch from './Pages/watch/Watch'
import SignUp from '../src/components/Sign-Up/SignUp.jsx'
import Sign from './components/Sign-Up/Sign'
import LandingPage from './Pages/Landing-Page/Landing-page'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') || true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setUser={setUser} />} />
        {user && (
          <>
            <Route path="home" element={<Home setUser={setUser} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
