// src/pages/AboutUs.jsx
import React from "react"
import { Link } from "react-router-dom"   // ✅ Import Link
import "../styles/aboutUs.scss"
import { Home } from "lucide-react" // Breadcrumb Icon
import aboutImg from "../assests/aboutUs.jpg"
const AboutUs = () => {
  return (
    <section className="about">
      {/* Page Header / Breadcrumb */}
      <div className="about__header">
        <div className="container">
          <div className="about__title">
            <Home size={20} />
            <span>
              <Link to="/">Home</Link> &gt; About Us
            </span>
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="about__image">
        <img src={aboutImg} alt="About Electro Vibe" />
      </div>

      {/* About Us Content */}
      <div className="about__content container">
        <h2>Who We Are</h2>
        <p>
          We are a passionate music band dedicated to bringing energy, rhythm,
          and joy to our audience. Our journey started with a simple love for
          melodies and has now grown into a mission to inspire people through
          music.
        </p>

        <h2>Our Mission</h2>
        <p>
          To create unforgettable musical experiences that connect hearts,
          cultures, and generations. From live shows to creative productions, we
          aim to spread positivity through every note.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
