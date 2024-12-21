'use client';
import { useState, useRef, useEffect } from 'react';

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('all');
  const [lineWidth, setLineWidth] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);
  const buttonRefs = useRef({});

  useEffect(() => {
    // Update line position when active tab changes
    const activeButton = buttonRefs.current[activeTab];
    if (activeButton) {
      setLineWidth(activeButton.offsetWidth);
      setLineLeft(activeButton.offsetLeft);
    }
  }, [activeTab]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ui-elements', label: 'UI Elements' },
    { id: 'icons', label: 'Icons' },
    { id: '3d', label: '3D' }
  ];

  return (
    <div className="relative"> {/* Removed border-b class */}
      <nav className="flex space-x-8 mt-6">
        {categories.map((category) => (
          <button
            key={category.id}
            ref={el => buttonRefs.current[category.id] = el}
            onClick={() => setActiveTab(category.id)}
            className={`pb-2 relative select-none ${
              activeTab === category.id
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </nav>
      {/* Animated underline */}
      <div 
        className="absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out"
        style={{
          width: `${lineWidth}px`,
          left: `${lineLeft}px`
        }}
      />
    </div>
  );
}