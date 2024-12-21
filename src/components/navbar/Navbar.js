"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">MOSAIC</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">MOSAIC</div>
          <div className="flex-1 flex justify-end">
            <input 
              type="search" 
              placeholder="Search for a component..."
              className="w-80 h-10 px-4 py-2 border rounded-full focus:ring-2 focus:ring-gray-200 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
