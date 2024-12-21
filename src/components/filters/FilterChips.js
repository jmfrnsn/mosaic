'use client';

export default function FilterChips({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'button', label: 'Button' },
    { id: 'card', label: 'Card' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'input', label: 'Input Field' },
    { id: 'toggle', label: 'Toggle Switch' }
  ];

  return (
    <div className="flex gap-2 my-6">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-full text-sm ${
            activeFilter === filter.id
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 border hover:bg-gray-50'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}