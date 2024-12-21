export default function ComponentCard({ title, children }) {
  return (
    <div className="bg-gray-100 p-2.5 rounded-[6px]">
      <div className="bg-white w-full rounded-[4px]">
        <div className="p-4 flex items-center justify-center min-h-[200px]">
          {children}
        </div>
      </div>
      <div className="flex justify-between items-center pt-2.5"> {/* Changed to match outer frame padding */}
        <div className="text-gray-700 font-normal leading-none">{title}</div>
        <div className="text-gray-400 flex items-center gap-2">
          {/* <span>50</span>
          <span>&#10094;</span>
          <span>&#10095;</span> */}
        </div>
      </div>
    </div>
  );
}