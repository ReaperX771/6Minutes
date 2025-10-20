import React from 'react';

// Minimal fade-in wrapper used to progressively reveal content.
const FadeInSection = ({ children, className = '' }) => {
	return (
		<div className={`opacity-0 animate-fade-in ${className}`} style={{ animationFillMode: 'forwards' }}>
			{children}
		</div>
	);
};

export default FadeInSection;
