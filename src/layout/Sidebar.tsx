// import React from "react";
// import { X } from "lucide-react";
// import NAVIGATION_CONFIG, { type ViewType } from "../components/config/navigationConfig";


// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
//   currentModule: ViewType;
//   currentView: string;
//   onNavigate: (view: string) => void;
//   navigate: (path: string) => void;
//   className?: string;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   isOpen,
//   onClose,
//   currentModule,
//   currentView,
//   onNavigate,
//   navigate,
//   className = "",
// }) => {
//   // Replace with your NAVIGATION_CONFIG[currentModule].sidebar
//     const config = NAVIGATION_CONFIG[currentModule].sidebar;


//   const handleNavigation = (view: string) => {
//     onNavigate(view);
//     navigate(`/${currentModule}/${view}`);
//     onClose();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className={`fixed inset-0 backdrop-blur-sm bg-gray-900 z-40 lg:hidden ${className}`}
//           onClick={onClose}
//         />
//       )}

//       <aside
//         className={`fixed lg:static top-0 left-0 h-screen border-r border-gray-700 bg-[#1e2530] text-white w-64 transform transition-transform duration-300 z-50 overflow-y-auto ${
//           isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//         style={{
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none'
//         }}
//       >
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-4">
//             <div className="px-3 py-2 rounded flex flex-col items-center w-full">
//               <img src="/image 6.png" alt="Logo" className="h-20" />
//               <p className="text-sm text-orange-500 mt-2">
//                 Created By Malinovic
//               </p>
//             </div>
//             <button onClick={onClose} className="lg:hidden absolute top-4 right-4">
//               <X size={24} />
//             </button>
//           </div>
//         </div>

//         <nav className="px-6 pb-2">
//           {config.sections.map((section, idx) => (
//             <div key={idx} className="mb-2">
//               <h3 className="text-white text-md font-normal mb-2 pb-2 border-b border-gray-700">
//                 {section.title}
//               </h3>
              
//               <div className="relative pl-6 pt-2">
//                 {/* Main vertical dotted line */}
//                 <div 
//                   className="absolute left-0 top-0 text-gray-700"
//                   style={{
//                     width: '2px',
//                     height: `${(section.items.length - 1) * 56 + 22}px`,
//                     backgroundImage: 'linear-gradient(to bottom, #6b7280 50%, transparent 50%)',
//                     backgroundSize: '2px 8px',
//                     backgroundRepeat: 'repeat-y',
//                   }}
//                 />
                
//                 {section.items.map((item) => {
//                   const isActive = currentView === item.view;
                  
//                   return (
//                     <div key={item.view} className="relative flex items-center mb-2">
//                       {/* Horizontal dotted line */}
//                       <div 
//                         className="absolute left-[-24px] top-1/2"
//                         style={{
//                           width: '24px',
//                           height: '2px',
//                           backgroundImage: 'linear-gradient(to right, #6b7280 50%, transparent 50%)',
//                           backgroundSize: '8px 2px',
//                           backgroundRepeat: 'repeat-x',
//                           transform: 'translateY(-50%)'
//                         }}
//                       />
                      
//                       {/* Button */}
//                       <button
//                         onClick={() => handleNavigation(item.view)}
//                         className={`w-full text-sm text-left px-4 py-2.5 rounded transition-colors ${
//                           isActive
//                             ? "bg-orange-500 text-white"
//                             : "text-gray-400 hover:bg-gray-800"
//                         }`}
//                       >
//                         {item.label}
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


import React from "react";
import { X } from "lucide-react";
import NAVIGATION_CONFIG, {type ViewType} from "@/components/config/navigationConfig";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentModule: ViewType;
  currentView: string;
  onNavigate: (view: string) => void;
  navigate: (path: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  currentModule,
  currentView,
  onNavigate,
  navigate,
  className = "",
}) => {
  // Replace with your NAVIGATION_CONFIG[currentModule].sidebar
  const config = NAVIGATION_CONFIG[currentModule].sidebar;

  const handleNavigation = (view: string) => {
    onNavigate(view);
    navigate(`/${currentModule}/${view}`);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 backdrop-blur-sm bg-gray-900 z-40 lg:hidden ${className}`}
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-screen border-r border-gray-700 bg-[#1e2530] text-white w-64 transform transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="px-3 py-2 rounded flex flex-col items-center w-full">
              <img src="/image 6.png" alt="Logo" className="h-20" />
              <p className="text-sm text-orange-500 mt-2">
                Created By Malinovic
              </p>
            </div>
            <button onClick={onClose} className="lg:hidden absolute top-4 right-4">
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="px-6 pb-2">
          {config.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-2">
              <h3 className="text-white text-md font-normal mb-2 pb-2 border-b border-gray-700">
                {section.title}
              </h3>
              
              <div className="relative pt-2" style={{ paddingLeft: '16px' }}>
                {section.items.map((item, itemIdx) => {
                  const isActive = currentView === item.view;
                  const isLast = itemIdx === section.items.length - 1;
                  
                  return (
                    <div key={item.view} className="relative mb-2 flex items-center">
                      {/* Vertical line segment - only until middle of current item */}
                      <div 
                        className="absolute left-[-16px] top-0"
                        style={{
                          width: '1px',
                          height: isLast ? '50%' : 'calc(100% + 8px)',
                          borderLeft: '1px dotted #6b7280',
                        }}
                      />
                      
                      {/* Horizontal dotted line */}
                      <div 
                        className="absolute left-[-16px] top-1/2"
                        style={{
                          width: '16px',
                          height: '1px',
                          borderTop: '1px dotted #6b7280',
                          transform: 'translateY(-50%)'
                        }}
                      />
                      
                      {/* Button */}
                      <button
                        onClick={() => handleNavigation(item.view)}
                        className={`w-full text-sm text-left px-4 py-2.5 rounded transition-colors ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : "text-gray-400 hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;