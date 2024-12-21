'use client';
import { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
// import CategoryTabs from '@/components/categories/CategoryTabs';
import FilterChips from '@/components/filters/FilterChips';
import ComponentGrid from '@/components/grid/ComponentGrid';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <CategoryTabs /> */}
        <FilterChips activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <ComponentGrid activeFilter={activeFilter} />
      </div>
    </main>
  );
}