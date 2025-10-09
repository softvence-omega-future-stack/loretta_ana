import React from 'react';
import { Search, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-sm md:text-base font-normal">Machine Data (Overview)</h1>
      </div>

      <div className="flex items-center gap-4">
        <select className="bg-gray-700 px-3 py-1.5 rounded text-sm hidden md:block">
          <option>Maschinendaten</option>
        </select>

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Suchen..."
            className="bg-gray-700 px-4 py-1.5 pr-10 rounded text-sm w-64"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>

        <button className="bg-orange-500 px-4 py-1.5 rounded text-sm hover:bg-orange-600">
          Jane Cooper<br />
          <span className="text-xs">Laser</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
