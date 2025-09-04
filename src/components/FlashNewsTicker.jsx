import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/FlashNewsTicker.scss"; // SCSS file

function FlashNewsTickerInner({
  title = "LATEST NEWS",
  items,
  intervalMs = 3000,
  mode = "slide", // "slide" or "marquee"
  marqueeSpeedSec = 20,
  pauseOnHover = true,
}) {
  const [index, setIndex] = useState(0);
  const hoveredRef = useRef(false);
  const containerRef = useRef(null);

  const safeItems = useMemo(
    () => (items?.length ? items : [{ text: "No news available" }]),
    [items]
  );

  useEffect(() => {
    if (mode !== "slide") return;

    const id = setInterval(() => {
      if (pauseOnHover && hoveredRef.current) return;
      setIndex((i) => (i + 1) % safeItems.length);
    }, Math.max(1200, intervalMs));

    return () => clearInterval(id);
  }, [intervalMs, mode, pauseOnHover, safeItems.length]);

  const onMouseEnter = () => {
    hoveredRef.current = true;
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.setProperty("--play-state", "paused");
    }
  };

  const onMouseLeave = () => {
    hoveredRef.current = false;
    if (pauseOnHover && containerRef.current) {
      containerRef.current.style.setProperty("--play-state", "running");
    }
  };

  return (
    <div
      className="flash-news-ticker"
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ "--play-state": "running" }}
    >
      <div className="heading">
        <button className="latest-news-btn">{title}</button>
      </div>
      <div className="divider" />
      <div className="content">
        {mode === "slide" ? (
          <div className="slide-container">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="slide-item"
              >
                {safeItems[index]?.url ? (
                  <a
                    href={safeItems[index].url}
                    target="_blank"
                    rel="noreferrer"
                    title={safeItems[index].text}
                  >
                    {safeItems[index].text}
                  </a>
                ) : (
                  <span title={safeItems[index].text}>
                    {safeItems[index].text}
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="marquee">
            <div
              className="marquee-inner"
              style={{
                animation: `ticker-marquee ${marqueeSpeedSec}s linear infinite`,
                animationPlayState: "var(--play-state)",
              }}
            >
              {[0, 1].map((dup) => (
                <div key={dup} className="marquee-group">
                  {safeItems.map((item, i) => (
                    <div key={`${dup}-${i}`}>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          title={item.text}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span title={item.text}>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlashNewsTickerInner;
export { FlashNewsTickerInner as FlashNewsTicker };
