import React from 'react';

const SectionHeader = ({ badge, icon = 'bi-stars', title, highlight, subtitle }) => {
  return (
    <div className="section-header">
      {badge && (
        <div className="section-badge">
          <i className={`bi ${icon}`} aria-hidden="true"></i>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;

