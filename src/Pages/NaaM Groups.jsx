// File: pages/NaamGroup.jsx
import React from 'react';
import '../styles/_NaamGroup.scss';

const groups = [
  {
    title: 'Youth Empowerment',
    time: 'Empowering Future Generations',
    description:
      'Providing mentorship, skill development, and leadership opportunities to inspire and empower youth across our communities.',
    image: '/Nammgroups-images/putham-pudhu-kaalan.jpg', // no spaces in folder or filenames
  },
  {
    title: 'Women Leadership',
    time: 'Building Bold Women Leaders',
    description:
      'Encouraging women to lead with confidence through awareness programs, networking, and entrepreneurship training.',
    image: '/Nammgroups-images/mersal.jpg',
  },
  {
    title: 'Community Service',
    time: 'Giving Back to Society',
    description:
      'Organizing medical camps, food drives, and social outreach initiatives to uplift underprivileged communities.',
    image: '/Nammgroups-images/zhagaram.jpg',
  },
  {
    title: 'Community Service',
    time: 'Giving Back to Society',
    description:
      'Organizing medical camps, food drives, and social outreach initiatives to uplift underprivileged communities.',
    image: '/Nammgroups-images/raaja.jpg',
  },
  {
    title: 'Community Service',
    time: 'Giving Back to Society',
    description:
      'Organizing medical camps, food drives, and social outreach initiatives to uplift underprivileged communities.',
    image: '/Nammgroups-images/zhagaram.jpg',
  },
  {
    title: 'Community Service',
    time: 'Giving Back to Society',
    description:
      'Organizing medical camps, food drives, and social outreach initiatives to uplift underprivileged communities.',
    image: '/Nammgroups-images/zhagaram.jpg',
  },
  // Add more groups as needed
];
const NaamGroup = () => {
  return (
    <section className="naam-group">
      <h2 className="section-title">NAAM GROUPS</h2>

      {groups.map((group, index) => (
        <div key={index} className="group-card">
          <div className="group-image">
            {group.image ? (
              <img
                src={group.image}
                alt={group.title}
                onError={(e) => {
                  e.target.onerror = null; // prevents infinite loop if fallback fails
                  e.target.src = '/default-placeholder.jpg'; // fallback image in public folder
                }}
              />
            ) : (
              <div className="image-placeholder">Image not available</div>
            )}
          </div>
          <div className="group-info">
            <h3>{group.title}</h3>
            <p className="group-tagline">
              <i className="fas fa-users"></i> {group.time}
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
