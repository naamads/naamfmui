import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// Components (always visible)
import Header from "./components/Header"
import Footer from "./components/Footer"

// Pages
import AboutUs from "../src/pages/AboutUs.jsx"

// Home Page Components
import HeroSlider from "./components/HeroSlider"
import About from "./components/About"
import RadioPlayer from "./components/RadioPlayer"
import OnAirCrew from "./components/OnAirCrew"

// Styles
import "./styles/main.scss"
import "./styles/hero-slider.scss"

function App() {
  return (
    <Router>
      <div className="app">
        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1e3a8a",
              color: "#fff",
              border: "1px solid #3b82f6",
            },
            success: { style: { background: "#059669" } },
            error: { style: { background: "#dc2626" } },
          }}
        />

        {/* Header visible everywhere */}
        <Header />

        {/* Page Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <About />
                <RadioPlayer />
                <OnAirCrew />
              </>
            }
          />

          {/* About Us Page */}
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* Future Pages */}
          {/* <Route path="/crew" element={<CrewPage />} /> */}
          {/* <Route path="/albums" element={<AlbumsPage />} /> */}
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
        </Routes>

        {/* Footer visible everywhere */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
