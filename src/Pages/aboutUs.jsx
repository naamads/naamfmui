import React from 'react';
import '../styles/_aboutUs.scss';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-image">
          <img src="/assets/guinness.jpg" alt="Guinness World Record" />
        </div>
        <div className="about-text">
          <h2>Our Success History</h2>
          <p>
            <strong>Mr. Local FM</strong> is a vibrant and innovative <strong>entertainment platform</strong>,
            connecting Tamil communities worldwide through high-quality content and soulful <strong>Tamil music</strong>.
            Available on <strong>Android, iOS</strong>, and the web, it offers a rich blend of music, shows, and culture.
          </p>
          <p>
            From <strong>classic hits</strong> to contemporary beats, Mr. Local FM features hand-picked playlists, 
            live radio shows, <strong>interactive programs</strong>, interviews, and podcasts that celebrate everything
            <strong> Tamil and local</strong>. It’s more than just a radio—it’s your digital companion for nostalgia and discovery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
