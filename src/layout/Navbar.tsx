// import React from 'react';
// import { Search, Menu } from 'lucide-react';

// interface NavbarProps {
//   onMenuClick: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
//   return (
//     <nav className="bg-gray-800 text-white px-4 py-3 flex items-center sticky top-0 z-50 justify-between">
//       <div className="flex items-center gap-4">
//         <button onClick={onMenuClick} className="lg:hidden">
//           <Menu size={24} />
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         <select className="bg-gray-700 px-3 py-1.5 rounded text-sm hidden md:block">
//           <option>Maschinendaten</option>
//         </select>

//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             placeholder="Suchen..."
//             className="bg-gray-700 px-4 py-1.5 pr-10 rounded text-sm w-64"
//           />
//           <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//         </div>

//         <button className="bg-orange-500 px-4 py-1.5 rounded text-sm hover:bg-orange-600">
//           Jane Cooper<br />
//           <span className="text-xs">Laser</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Search, Menu, ChevronDown } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      {/* --- LEFT: Menu button (only on mobile) --- */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded hover:bg-gray-700 transition"
        >
          <Menu size={24} />
        </button>

        {/* Dropdown (hidden on small screens) */}
        <select className="hidden sm:block bg-gray-700 px-3 py-1.5 rounded text-sm">
          <option>Maschinendaten</option>
        </select>
      </div>

      {/* --- CENTER: Search --- */}
      <div className="flex-1 max-w-[400px] mx-4 hidden md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen..."
            className="bg-gray-700 w-full px-4 py-2 pr-10 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>

      {/* --- RIGHT: User --- */}
      <button className="flex items-center gap-3 bg-gray-700 px-3 py-1.5 rounded-md hover:bg-orange-600 transition text-sm">
        <img
          src="/Frame 3.svg"
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="hidden sm:block text-left leading-tight">
          <p className="font-medium">Jane Cooper</p>
          <span className="text-xs text-gray-300">Laser</span>
        </div>
        <ChevronDown size={16} />
      </button>
    </nav>
  );
};

export default Navbar;
