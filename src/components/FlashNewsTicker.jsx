import React from "react";
import newsData from "/src/data/flashNews.json";
import "../styles/flashNewsTicker.scss";

const FlashNewsTicker = ({ language = "EN" }) => {
  const newsItems = newsData[language] || newsData["EN"];

  return (
    <div className="flash-news-ticker">
      <div className="heading">
        <button className="latest-news-btn">
          {language === "EN" ? "Latest News" : "சமீபத்திய செய்திகள்"}
        </button>
      </div>

      <div className="divider" />

      <div className="content">
        <div className="marquee">
          <div className="marquee-inner">
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
