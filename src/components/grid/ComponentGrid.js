'use client';
import ComponentCard from '../card/ComponentCard';

export default function ComponentGrid({ activeFilter }) {
  const components = [
    {
      id: 1,
      type: 'button',
      title: 'Button',
      content: (
        <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
          Continue
        </button>
      )
    },
    {
      id: 2,
      type: 'checkbox',
      title: 'Checkbox',
      content: (
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span className="text-sm text-gray-700">Accept terms and condition</span>
        </label>
      )
    },
    {
      id: 3,
      type: 'input',
      title: 'Input Field',
      content: (
        <div className="w-full">
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-2 border rounded focus:ring-2 focus:ring-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      )
    }
  ];

  const filteredComponents = activeFilter === 'all'
    ? components
    : components.filter(comp => comp.type === activeFilter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredComponents.map((component) => (
        <ComponentCard key={component.id} title={component.title}>
          {component.content}
        </ComponentCard>
      ))}
    </div>
  );
}