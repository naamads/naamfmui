import React from "react";
import albums from "../data/albums.json";   // 👈 import JSON
import "../styles/albums-section.scss";

const AlbumsSection = () => {
  return (
    <section className="albums">
      <h3 className="subtitle">Our Discography</h3>
      <h2 className="title">Newest Albums & Singles</h2>

      <div className="albums-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <div className="album-image">
              <img src={album.image} alt={album.title} />
            </div>
            <h4 className="album-title">{album.title}</h4>
            <p className="album-artist">{album.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumsSection;
