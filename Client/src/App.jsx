import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {

  return (
    <div className="App flex flex-col items-center bg-slate-100">
      <div className="h-8 w-full bg-green-600 text-white flex justify-center items-center transition-all">
        <span>20% for this week</span>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
