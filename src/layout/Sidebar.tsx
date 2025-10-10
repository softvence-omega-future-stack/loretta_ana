import React from "react";
import { X } from "lucide-react";
import NAVIGATION_CONFIG, { type ViewType } from "../components/config/navigationConfig";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: ViewType;
  currentView: string;
  onNavigate: (view: string) => void;
  navigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  currentModule,
  currentView,
  onNavigate,
  navigate,
}) => {
  const config = NAVIGATION_CONFIG[currentModule].sidebar;

  const handleNavigation = (view: string) => {
    onNavigate(view);
    navigate(`/${currentModule}/${view}`); // navigate to selected view
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

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
          {config.sections.map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">
                {section.title}
              </h3>
              {section.items.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavigation(item.view)}
                  className={`w-full text-left px-6 py-2 rounded mb-1 text-sm transition ${
                    currentView === item.view
                      ? "bg-orange-500"
                      : "hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
