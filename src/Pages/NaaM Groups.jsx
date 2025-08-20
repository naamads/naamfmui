import React, { useEffect, useState, useRef } from 'react';
import '../styles/_NaamGroup.scss'; // Your SCSS file with the styles below

const groups = [
  {
    title: 'Putham Puthu Kaalai',
    time: '06 AM - 07 AM, WEEKDAYS',
    description:
      'As a calm start to your busy day, Vishwa brings in a refreshing dose of positivity through his warm wishes and inspirational anecdotes. A strong cup of coffee paired with the soothing melodies of Putham Puthu Kaalai sets the perfect tone for a fresh start to the day ahead!.',
    image: '/Nammgroups-images/putham-pudhu-kaalan.jpg',
  },
  {
    title: 'Mersal Mornings',
    time: '07 AM - 11 AM., WEEKDAYS',
    description:
      'Worried about staying updated with the days events as you hurry to work? Fret not, as Kirthana joins you on your morning commute, providing updates on everything you need to kick-start your day. From quick updates and rapid fires to expert discussions, the morning show offers a comprehensive blend of information and entertainment.',
    image: '/Nammgroups-images/mersal.jpg',
  },
  {
    title: 'Masala Cafe',
    time: '11 AM - 02 PM., WEEKDAYS',
    description:
      'Organizing medical camps, food drives, and social outreach initiatives to uplift underprivileged communitiesRight after the morning madness mellows down, Madhu jumps in to set the right tune to your day! Hes your go-to companion for a mid-morning break, sparking engaging conversations, sharing smart travel advice, and playing games over a cup of tea.',
    image: '/Nammgroups-images/masalacafe.png',
  },
  {
    title: 'Zhagaram',
    time: '02 PM - 03 PM., WEEKDAYS',
    description:
      'Krishnie’s flawless command of Tamil has earned her a massive following in the region. In this one-hour show, she takes you on an enriching journey through awe-inspiring facts and the rich history of the world’s oldest language - Tamil.',
    image: '/Nammgroups-images/zhagaram.jpg',
  },
  {
    title: 'Rock with Raaja',
    time: '03 PM - 04 PM., WEEKDAYS',
    description:
      'An hour-full of soulful songs of the Maestro Ilaiyaraja, dedicated to his hardcore fans. There’s just you and his music, nothing in between.',
    image: '/Nammgroups-images/raaja.jpg',
  },
  {
    title: 'The Evening Karak',
    time: '04 PM - 08 PM., WEEKDAYS',
    description:
      'Your mundane home run now has twice the fun, courtesy of our lively duo! With our very own Big Boss-return Bravo and the absolute livewire Nivedha, youll find yourself unwinding and grinning from ear to ear as they entertain you with their playful banter and games.',
    image: '/Nammgroups-images/evening.jpg',
  },
  {
    title: 'Anbudan Naan',
    time: '08 PM - 11 PM., WEEKDAYS',
    description:
      'As you prepare to wind your day down, Priya steps in as your trusted confidante, ready to help lift the weight of any worries from your mind. With her, heartfelt and sincere conversations are assured, as she laughs and cries with you. In essence, she s the kind of friend you can always rely on..',
    image: '/Nammgroups-images/anbudan.jpg',
  },
];

const NaamGroup = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            groups.forEach((_, i) => {
              setTimeout(() => {
                setVisibleIndexes((prev) =>
                  prev.includes(i) ? prev : [...prev, i]
                );
              }, i * 1000);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="naam-group" ref={sectionRef}>
      <h2 className="section-title">NAAM GROUPS</h2>

      {groups.map((group, index) => (
        <div
          key={index}
          className={`group-card ${
            visibleIndexes.includes(index) ? 'visible' : ''
          } ${index % 2 === 1 ? 'reverse' : ''}`}
        >
          <div className="group-image">
            {group.image ? (
              <img
                src={group.image}
                alt={group.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-placeholder.jpg';
                }}
              />
            ) : (
              <div className="image-placeholder">Image not available</div>
            )}
          </div>

          <div className="group-info">
            <h3>{group.title}</h3>
            <p className="group-tagline">
              <i className="fas fa-clock"></i> {group.time}
            </p>
            <div className="divider" />
            <p className="group-description">{group.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default NaamGroup;
