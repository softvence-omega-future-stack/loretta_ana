import React from "react";
import { Search, Menu, ChevronDown, LogOut } from "lucide-react";
import Dropdown from "../common/dropdown/Dropdown";
import NAVIGATION_CONFIG, { type ViewType } from "../components/config/navigationConfig";

interface NavbarProps {
  onMenuClick: () => void;
  currentModule: ViewType;
  onModuleChange: (module: ViewType) => void;
  navigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onMenuClick,
  currentModule,
  onModuleChange,
  navigate,
}) => {
  const handleModuleSelect = (module: ViewType) => {
    onModuleChange(module);
    const firstView = NAVIGATION_CONFIG[module].sidebar.sections[0].items[0].view;
    navigate(`/${module}/${firstView}`); // navigate to first view of selected module
  };

  const handleLogout = () => {
    navigate("/login"); // navigate to login page
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      {/* Left section: menu + module dropdown */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded hover:bg-gray-700 transition"
        >
          <Menu size={24} />
        </button>

        {/* Module Dropdown */}
        <div className="hidden sm:block">
          <Dropdown
            trigger={
              <button className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-600 transition">
                <span>{NAVIGATION_CONFIG[currentModule].label}</span>
                <ChevronDown size={16} />
              </button>
            }
          >
            {Object.entries(NAVIGATION_CONFIG).map(([key, config]) => (
              <button
                key={key}
                onClick={() => handleModuleSelect(key as ViewType)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition ${
                  currentModule === key ? "bg-orange-500" : ""
                }`}
              >
                {config.label}
              </button>
            ))}
          </Dropdown>
        </div>
      </div>

      {/* Center: search input */}
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

      {/* Right section: user dropdown */}
      <Dropdown
        align="right"
        trigger={
          <button className="flex items-center gap-3 bg-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-600 transition text-sm">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              JC
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <p className="font-medium">Jane Cooper</p>
              <span className="text-xs text-gray-300">Laser</span>
            </div>
            <ChevronDown size={16} />
          </button>
        }
      >
        <div className="px-4 py-3 border-b border-gray-600">
          <p className="font-medium text-white">Jane Cooper</p>
          <p className="text-xs text-gray-400">jane.cooper@example.com</p>
        </div>
        <div className="border-t border-gray-600 mt-2">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition flex items-center gap-3 text-red-400"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </Dropdown>
    </nav>
  );
};

export default Navbar;

