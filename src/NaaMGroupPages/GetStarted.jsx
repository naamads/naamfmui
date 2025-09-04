import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contentBlocks from '/src/data/getStartedContent.json';
import './GetStarted.scss';

gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    if (!container || !title) return;

    gsap.fromTo(title,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    contentBlocks.forEach((_, index) => {
      const block = container.querySelector(`[data-block="${index}"]`);
      const textContent = block?.querySelector('.text-content');
      const imageContent = block?.querySelector('.image-content');
      const isEven = index % 2 === 0;

      if (textContent && imageContent) {
        gsap.fromTo(textContent,
          { opacity: 0, x: isEven ? -100 : 100, y: 30 },
          {
            opacity: 1, x: 0, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(imageContent,
          {
            opacity: 0,
            x: isEven ? 100 : -100,
            rotationY: isEven ? 15 : -15,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.to(imageContent, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="get-started">
      <div className="container" ref={containerRef}>
        <div className="title-section">
          <h1 ref={titleRef}>NaaM IT Care</h1>
          <p>Transforming businesses through innovative technology solutions</p>
        </div>

        <div className="blocks">
          {contentBlocks.map((block, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={block.id}
                data-block={index}
                className={`block ${isEven ? 'left' : 'right'}`}
              >
                <div className="text-content">
                  <div className="subtitle">{block.subtitle}</div>
                  <h2 className="title">{block.title}</h2>
                  <p className="description">{block.description}</p>
                  <button className="btn">Learn More</button>
                </div>
                <div className="image-content">
                  <div className="image-wrapper">
                    <img src={block.image} alt={block.imageAlt} />
                    <div className="image-overlay" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
