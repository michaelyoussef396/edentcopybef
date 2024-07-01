import { institutions } from '@/data';

const Affiliated = () => {
  return (
    <div className="relative h-auto pb-12"> {/* Adjust the height as needed */}
      <div className="container mx-auto px-4 md:px-20 pt-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Affiliated Institutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
          {institutions.map((institution, index) => (
            <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
              <span className="text-red-500 mr-2">●</span>
              <p className="text-left">{institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Affiliated;
