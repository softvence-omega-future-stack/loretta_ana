import React from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentView,
}) => {
  return (
    <>
      {/* Blur overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen border-r border-[#454F5B] bg-gray-900 text-white w-64 transform transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="px-3 py-2 rounded flex flex-col items-center">
              <img src="/image 6.png" alt="Logo" className="h-20" />
              <p className="text-sm text-[#FF7F27] mt-2">
                Created By Malinovic
              </p>
            </div>
            <button onClick={onClose} className="lg:hidden">
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="px-3 pb-6">
          <div className="mb-4">
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">
              Machines
            </h3>
            <button
              onClick={() => onNavigate("overview")}
              className={`w-full text-left px-3 py-2 rounded mb-1 text-sm ${
                  currentView === "overview"
                  ? "bg-orange-500"
                  : "hover:bg-gray-800"
                }`}
            >
              Overview
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              QR Code...
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">Seek</h3>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              Overdue
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              Search General
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">Left</h3>
            {[
              "TW Manual",
              "TechnikerTeam-A1",
              "TW Access Data",
              "Issue Return",
              "Trucklimit Boels",
              "Workshop Supplies",
            ].map((item) => (
              <button
                key={item}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div>
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">
              Personal
            </h3>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              My Folder
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

