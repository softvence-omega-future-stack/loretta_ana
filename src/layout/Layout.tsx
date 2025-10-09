// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar always visible

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//         onNavigate={() => {}}
//         currentView=""
//       />

//       {/* Main area */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

//         {/* Content */}
//         <main className="flex-1 p-4 lg:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex max-h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNavigate={() => {}}
        currentView=""
      />

      {/* Main Section */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

