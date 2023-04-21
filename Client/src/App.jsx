import React, { useContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AuthContext from "./context/auth/authContext"
import api from "./api/config"
//pages
import Home from "./pages/Home"
import Profile from "./pages/Profile"

import Navbar from "./components/navbar/navbar.jsx"
import Footer from "./components/footer"

function App() {

  const { isAuthenticated, verify, logout } = useContext(AuthContext)

  useEffect(() => {
    api.get('/auth/verify')
    .then((res) => {
        console.log('verify', res.data)
        verify(res.data)
    })
    .catch((err) => {
        console.log(err)
        logout()
    })
  }, [isAuthenticated])

  console.log('refresh')

  return (
    <div className="App flex flex-col items-center bg-slate-100">
      <div className="h-8 w-full bg-green-600 text-white flex justify-center items-center transition-all">
        <span>20% for this week</span>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
