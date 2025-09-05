import React from "react";
import "/src/styles/flashNewsTicker.scss";

const FlashNewsTicker = () => {
  const newsItems = [
    { text: "🎶 NaaM FM launches new radio show!", link: "#" },
    { text: "🔥 Special interview with top RJ tonight!", link: "#" },
    { text: "📻 Stream live from Chennai studio!", link: "#" },
    { text: "🌐 Visit our website for more updates", link: "#" }
  ];

  return (
    <div className="flash-news-ticker">
      {/* Left Heading */}
      <div className="heading">
        <button className="latest-news-btn">Latest News</button>
      </div>

      <div className="divider" />

      {/* Scrolling News */}
      <div className="content">
        <div className="marquee">
          <div className="marquee-inner">
            {/* duplicate group for seamless infinite scroll */}
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="marquee-group">
                {newsItems.map((item, i) => (
                  <span key={i}>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNewsTicker;
