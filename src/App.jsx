
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import OnAirCrew from '../src/components/On-Air-crew'
import RadioPlayer from './components/RadioPlayer'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Body />
                <OnAirCrew />
                <RadioPlayer />
              </>
            } />
            <Route path="/about-us" element={<div className="p-8 text-white">About Us Page</div>} />
            <Route path="/naam-group" element={<div className="p-8 text-white">Naam Groups Page</div>} />
            <Route path="/fm-rk" element={<div className="p-8 text-white">FM RK Page</div>} />
            <Route path="/contact" element={<div className="p-8 text-white">Contact Us Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
