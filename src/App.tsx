import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";
import Wrapper from "@/common/space/CommonWrapper";
import ViewRouter from "@/components/views/ViewRouter";
import NAVIGATION_CONFIG, { type ViewType } from "@/components/config/navigationConfig";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<ViewType>("machines");
  const [currentView, setCurrentView] = useState("overview");

  // Sync module & view with URL
  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length >= 2) {
    const module = parts[0] as ViewType;
    const view = parts[1];
    if (NAVIGATION_CONFIG[module]) {
      if (module !== currentModule) setCurrentModule(module);
      if (view !== currentView) setCurrentView(view);
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed height, scrollable content */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentModule={currentModule}
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          navigate(`/${currentModule}/${view}`);
        }}
        navigate={navigate}
        className="w-screen"
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navbar - Fixed at top */}
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          currentModule={currentModule}
          onModuleChange={(module) => {
            setCurrentModule(module);
            const firstView = NAVIGATION_CONFIG[module].sidebar.sections[0].items[0].view;
            setCurrentView(firstView);
            navigate(`/${module}/${firstView}`);
          }}
          navigate={navigate}
        />
        
        {/* Scrollable main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <Wrapper>
            <ViewRouter path={location.pathname} />
          </Wrapper>
        </main>
      </div>
    </div>
  );
};

export default App;
