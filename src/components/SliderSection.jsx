import React, { useState } from "react"
import { X, Clock } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import photos from "../data/photos.json"

const RJGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openModal = (photo) => setSelectedPhoto(photo)
  const closeModal = () => setSelectedPhoto(null)

  // ✅ renamed function
  const renderSliderSection = (title, items = [], settings) => {
    if (!items.length) {
      return <p style={{ color: "gray" }}>{title} - No shows available</p>
    }

    return (
      <>
        <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>{title}</h2>
        <Swiper {...settings} className="rj-swiper">
          {items.map((rj) => (
            <SwiperSlide key={rj.id}>
              <div className="rj-card" onClick={() => openModal(rj)}>
                <img src={rj.image} alt={rj.name} className="rj-image" />
                <div className="rj-info">
                  <h3>{rj.name}</h3>
                  <p className="show-name">{rj.showName}</p>
                  <div className="show-time">
                    <Clock size={14} />
                    <span style={{ marginLeft: "5px" }}>{rj.showTime}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  }

  return (
    <section className="rj-gallery">
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Our Radio Jockeys
        </h1>

        {/* Morning RJs */}
        {renderSliderSection("Slider Section 1", photos.rjPhotos || [], {
          modules: [Navigation, Pagination, Autoplay],
          navigation: true,
          pagination: { clickable: true },
          autoplay: { delay: 3000 },
          spaceBetween: 20,
          slidesPerView: 3,
          breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        })}

        {/* Evening RJs */}
        {renderSliderSection("Slider Section 2", photos.eveningRJs || [], {
          modules: [Pagination],
          pagination: { clickable: true },
          spaceBetween: 15,
          slidesPerView: 2,
          breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          },
        })}

        {/* Weekend RJs */}
        {renderSliderSection("Slider Section 3", photos.weekendRJs || [], {
          modules: [Pagination],
          pagination: { clickable: true },
          spaceBetween: 20,
          slidesPerView: 1,
        })}

        {/* Modal */}
        {selectedPhoto && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedPhoto.name}</h3>
                <p className="show-name">{selectedPhoto.showName}</p>
                <div className="show-time">
                  <Clock size={16} />
                  <span style={{ marginLeft: "5px" }}>
                    {selectedPhoto.showTime}
                  </span>
                </div>
                <p className="description">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RJGallery
