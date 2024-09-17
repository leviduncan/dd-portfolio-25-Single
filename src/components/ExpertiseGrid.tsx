import React from 'react';

const ExpertiseItem = ({ title, icon }) => (
  <div className="expertise-item">
    <img src={icon} alt={title} />
    <h3>{title}</h3>
  </div>
);

const ExpertiseGrid = () => {
  const expertiseAreas = [
    { title: 'Responsive Web Design', icon: 'responsive-icon.svg' },
    { title: 'Performance Optimization', icon: 'performance-icon.svg' },
    { title: 'Cross-Browser Compatibility', icon: 'browser-icon.svg' },
    { title: 'Accessibility (WCAG)', icon: 'accessibility-icon.svg' },
    { title: 'Testing and Debugging', icon: 'testing-icon.svg' },
    { title: 'UI/UX Implementation', icon: 'ui-ux-icon.svg' },
  ];

  return (
    <section className="expertise-grid">
      <h2>My Areas of Expertise</h2>
      <div className="grid">
        {expertiseAreas.map((area, index) => (
          <ExpertiseItem key={index} title={area.title} icon={area.icon} />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseGrid;