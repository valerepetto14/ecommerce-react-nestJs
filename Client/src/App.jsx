import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {

  return (
    <div className="App flex flex-col items-center bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
