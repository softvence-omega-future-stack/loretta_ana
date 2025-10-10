import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, ChevronDown, X, User, Settings, LogOut, Bell, ChevronLeft } from "lucide-react";

// ============= TYPES & CONFIG =============
type ViewType = "machines" | "production" | "maintenance" | "inventory" | "reports";

interface SidebarConfig {
  sections: {
    title: string;
    items: { label: string; view: string }[];
  }[];
}

const NAVIGATION_CONFIG: Record<ViewType, { label: string; sidebar: SidebarConfig }> = {
  machines: {
    label: "Maschinendaten",
    sidebar: {
      sections: [
        {
          title: "Machines",
          items: [
            { label: "Overview", view: "overview" },
            { label: "QR Code...", view: "qrcode" }
          ]
        },
        {
          title: "Seek",
          items: [
            { label: "Overdue", view: "overdue" },
            { label: "Search General", view: "search" }
          ]
        },
        {
          title: "Left",
          items: [
            { label: "TW Manual", view: "manual" },
            { label: "TechnikerTeam-A1", view: "team" },
            { label: "TW Access Data", view: "access" },
            { label: "Issue Return", view: "issue" },
            { label: "Trucklimit Boels", view: "trucklimit" },
            { label: "Workshop Supplies", view: "workshop" }
          ]
        },
        {
          title: "Personal",
          items: [{ label: "My Folder", view: "folder" }]
        }
      ]
    }
  },
  production: {
    label: "Production Data",
    sidebar: {
      sections: [
        {
          title: "Production",
          items: [
            { label: "Dashboard", view: "prod-dashboard" },
            { label: "Schedule", view: "prod-schedule" },
            { label: "Quality Control", view: "prod-quality" }
          ]
        },
        {
          title: "Analytics",
          items: [
            { label: "Performance", view: "prod-performance" },
            { label: "Efficiency", view: "prod-efficiency" }
          ]
        }
      ]
    }
  },
  maintenance: {
    label: "Maintenance",
    sidebar: {
      sections: [
        {
          title: "Maintenance",
          items: [
            { label: "Scheduled", view: "maint-scheduled" },
            { label: "Emergency", view: "maint-emergency" },
            { label: "History", view: "maint-history" }
          ]
        },
        {
          title: "Resources",
          items: [
            { label: "Parts Inventory", view: "maint-parts" },
            { label: "Technicians", view: "maint-tech" }
          ]
        }
      ]
    }
  },
  inventory: {
    label: "Inventory",
    sidebar: {
      sections: [
        {
          title: "Stock",
          items: [
            { label: "Current Stock", view: "inv-current" },
            { label: "Low Stock Alert", view: "inv-low" },
            { label: "Orders", view: "inv-orders" }
          ]
        },
        {
          title: "Management",
          items: [
            { label: "Suppliers", view: "inv-suppliers" },
            { label: "Reports", view: "inv-reports" }
          ]
        }
      ]
    }
  },
  reports: {
    label: "Reports & Analytics",
    sidebar: {
      sections: [
        {
          title: "Reports",
          items: [
            { label: "Daily Reports", view: "rep-daily" },
            { label: "Weekly Reports", view: "rep-weekly" },
            { label: "Monthly Reports", view: "rep-monthly" }
          ]
        },
        {
          title: "Custom",
          items: [
            { label: "Create Report", view: "rep-create" },
            { label: "Export Data", view: "rep-export" }
          ]
        }
      ]
    }
  }
};

// ============= SIMPLE ROUTER =============
const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname + window.location.search;
    return path === "/" ? "/machines/overview" : path;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname + window.location.search;
      setCurrentPath(path === "/" ? "/machines/overview" : path);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return { currentPath, navigate };
};

// ============= CUSTOM DROPDOWN COMPONENT =============
interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, align = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={`absolute top-full mt-2 bg-gray-700 rounded-lg shadow-lg border border-gray-600 py-2 min-w-[200px] z-50 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// ============= NAVBAR =============
interface NavbarProps {
  onMenuClick: () => void;
  currentModule: ViewType;
  onModuleChange: (module: ViewType) => void;
  navigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, currentModule, onModuleChange, navigate }) => {
  const handleModuleSelect = (module: ViewType) => {
    onModuleChange(module);
    const firstView = NAVIGATION_CONFIG[module].sidebar.sections[0].items[0].view;
    navigate(`/${module}/${firstView}`);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
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

      {/* User Dropdown */}
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
        <button
          onClick={() => navigate("/profile")}
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition flex items-center gap-3"
        >
          <User size={16} />
          <span>Profile</span>
        </button>
        <button
          onClick={() => navigate("/settings")}
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition flex items-center gap-3"
        >
          <Settings size={16} />
          <span>Settings</span>
        </button>
        <button
          onClick={() => navigate("/notifications")}
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-600 transition flex items-center gap-3"
        >
          <Bell size={16} />
          <span>Notifications</span>
        </button>
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

// ============= SIDEBAR =============
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
    navigate(`/${currentModule}/${view}`);
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
              <div className="h-20 w-20 bg-orange-500 rounded-lg flex items-center justify-center text-2xl font-bold">
                LOGO
              </div>
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
                  className={`w-full text-left px-3 py-2 rounded mb-1 text-sm transition ${
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

// ============= VIEW COMPONENTS =============
const MachineOverview = ({ navigate }: { navigate: (path: string) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allMachines = Array(25)
    .fill(null)
    .map((_, i) => ({
      id: `${i + 1}`,
      image: "/image 7.png",
      title: "Atlas Copco QAS60 Stromerzeuger 60 kVA",
      subgroup: "11607",
      boelsNr: "116070485",
      serienNr: "ESF403192",
      ext: "67B-OvE E8701: 09.01.2026",
      intern: "",
      letzRuckname: "116070485",
      wichtigInform: "Beschädigt !",
      status: ["available", "maintenance", "rented"][i % 3] as "available" | "maintenance" | "rented",
    }));

  const totalPages = Math.ceil(allMachines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMachines = allMachines.slice(startIndex, startIndex + itemsPerPage);

  const statusColors = {
    available: "bg-green-500",
    maintenance: "bg-yellow-500",
    rented: "bg-orange-500",
  };

  const statusLabels = {
    available: "Available",
    maintenance: "Maintenance",
    rented: "Rented Out",
  };

  const handleCardClick = (machineId: string) => {
    navigate(`/machines/overview/${machineId}`);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-[1.75rem] font-bold mb-4">Overview</h2>

      <div className="flex-1 overflow-auto mb-4">
        <div className="grid grid-cols-1 gap-2">
          {currentMachines.map((machine) => (
            <div
              key={machine.id}
              onClick={() => handleCardClick(machine.id)}
              className="bg-gray-200 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer p-3 hover:border-[#FFA96E]"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-1/6 flex-shrink-0 flex items-center justify-center bg-white p-4 rounded">
                  <img 
                    src={machine.image} 
                    alt={machine.title}
                    className="max-w-full max-h-full object-contain h-24"
                  />
                </div>

                <div className="flex-1 sm:w-4/5 min-w-0 space-y-6 bg-white p-4 rounded">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-700 mb-1">
                        <span>Bezeichnung: </span>
                        <span className="text-blue-600 font-medium">{machine.title}</span>
                      </div>
                      <div className="text-xs text-gray-700">
                        <span>Subgruppe: </span>
                        <span className="text-red-600 font-semibold">{machine.subgroup}</span>
                      </div>
                    </div>
                    <span
                      className={`${statusColors[machine.status]} text-white text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0`}
                    >
                      {statusLabels[machine.status]}
                    </span>
                  </div>
                  <hr className="border-t border-gray-300" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="text-gray-700">
                        <span>Boels Nr: </span>
                        <span className="text-red-600 font-semibold">{machine.boelsNr}</span>
                      </div>
                      <div className="text-gray-700">
                        <span>Serien Nr: </span>
                        <span className="text-blue-600 font-semibold">{machine.serienNr}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-700">
                        <span>Ext. 67B-OVE E8701: </span>
                        <span className="text-blue-600 font-medium">{machine.ext}</span>
                      </div>
                      <div className="text-gray-700">
                        <span>Intern §11 gültig bis:</span>
                        {machine.intern && <span className="ml-1">{machine.intern}</span>}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-700">
                        <span>Letz Rücknahme: </span>
                        <span className="text-green-600 font-semibold">{machine.letzRuckname}</span>
                      </div>
                      <div className="text-gray-700">
                        <span>Wichtig Inform: </span>
                        <span className="text-red-600 font-semibold">{machine.wichtigInform}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-3 bg-white rounded shadow">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const MachineDetail = ({ machineId, navigate }: { machineId: string; navigate: (path: string) => void }) => {
  const [activeTab, setActiveTab] = useState('Stammdaten');
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // In real app, fetch this data based on machineId
  const machine = {
    id: machineId,
    image: "/image 7.png",
    title: "Atlas Copco QAS60 Stromerzeuger 60 kVA",
    subgroup: "11607",
    boelsNr: "116070462",
    serienNr: "ESF403194",
    ext: "28.02.2026",
    intern: "",
    letzRuckname: "116070485",
    wichtigInform: "Beschädigt !",
    status: "available" as const,
  };

  const mainTabs = [
    'Stammdaten',
    'Motordaten', 
    'Technische Daten',
    'Schemamaße',
    'Ankaupdaten',
    'Wartungsablauf',
    'Dokumentation',
    'Zubehör',
    'Notizen',
    '😊'
  ];

  const docCategories = [
    { name: 'Anweisung', count: 31 },
    { name: 'Schadenmeldung', count: 1 },
    { name: 'Störungshinweis', count: 4 },
    { name: 'Prüfungen Info', count: 1 },
    { name: 'Ausgabeprotokoll', count: 6 },
    { name: 'Rücknahmeprotokoll', count: 3 },
    { name: 'Wissensdatenbank', count: 1 }
  ];

  const sampleDocuments = Array(6).fill(null).map((_, i) => ({
    date: '20.06.2025',
    machineNumber: '116070462',
    description: 'Motorölfilter, Kraftstofffilter, Service & Wartung durchgeführt s...',
    size: '6.594 Bh',
    depot: 'Depot 578',
    user: 'Boscar',
    remark: i % 3 === 0 ? 'Service Telematics I' : i % 2 === 0 ? 'Check-I' : 'Reparatur !'
  }));

  return (
    <div className="flex flex-col h-full">
      {/* Image Modal */}
      {imageModalOpen && (
        <div 
          className="fixed inset-0 bg-blue-900 bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            <img 
              src={machine.image} 
              alt={machine.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Header & Tabs - Fixed */}
      <div className="bg-gray-50 p-4 rounded shadow flex-shrink-0">
        <button
          onClick={() => navigate('/machines/overview')}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-3"
        >
          <ChevronLeft size={18} /> Back
        </button>
        
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-bold">Boels Technikweb - Maschinen Stammdaten</h2>
          <select className="border rounded px-3 py-1.5 text-sm bg-white">
            <option>Document...</option>
          </select>
        </div>
        
        <div className="flex gap-2 border-b border-gray-300 overflow-x-auto">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-xs whitespace-nowrap border-b-2 -mb-px ${
                activeTab === tab 
                  ? 'bg-orange-100 text-orange-600 border-orange-500' 
                  : 'text-gray-700 border-transparent hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Scrollable */}
      <div className="flex-1 overflow-auto mt-4">
        {activeTab === 'Stammdaten' ? (
          <div className="space-y-4">
            {/* Machine Info Section */}
            <div className="bg-white rounded shadow p-4">
              <div className="flex gap-4 flex-col lg:flex-row">
                {/* Left Image Section */}
                <div 
                  className="w-full lg:w-64 h-64 bg-white rounded flex-shrink-0 flex items-center justify-center border border-gray-200 shadow-sm cursor-pointer hover:border-orange-400 transition"
                  onClick={() => setImageModalOpen(true)}
                >
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="max-w-full max-h-full object-contain rounded p-2"
                  />
                </div>

                {/* Right Info Section */}
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{machine.title}</h3>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded inline-block">
                      Available
                    </span>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-sm mb-3">General Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs">
                      <div>
                        <p className="text-gray-600 mb-0.5">Machine Nummer:</p>
                        <p className="font-semibold text-red-600">{machine.boelsNr}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Letztes Service am:</p>
                        <p className="font-semibold text-blue-600">20.06.2025</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Seriennummer:</p>
                        <p className="font-semibold text-blue-600">{machine.serienNr}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">bei Zahlenstand:</p>
                        <p className="font-semibold text-blue-600">6594 / Robert Boels</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Subgruppe:</p>
                        <p className="font-semibold text-red-600">{machine.subgroup}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Frostschutz geprüft am:</p>
                        <p className="font-semibold">13.12.2021 -38 °C</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Baujahr:</p>
                        <p className="font-semibold">31.03.2020</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Saison:</p>
                        <p className="font-semibold text-blue-600">2023/2024</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">Stundenkilometerstand:</p>
                        <p className="font-semibold text-blue-600">6.594 Bh</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-0.5">QR-Code Service:</p>
                        <p className="font-semibold text-blue-600">JA</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600 mb-0.5">Elektro-ÖVE E8701/VDE0701 gültig bis:</p>
                        <p className="font-semibold">{machine.ext}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-base font-semibold mb-3">Zugeordnete Dokumente</h3>
              
              {/* Document Categories */}
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                {docCategories.map((cat) => (
                  <button
                    key={cat.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-xs whitespace-nowrap border border-gray-300"
                  >
                    <span>{cat.name}</span>
                    <span className="bg-white px-2 py-0.5 rounded text-xs font-semibold">
                      ({cat.count})
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-end mb-2">
                <button className="text-gray-600 hover:text-gray-900 p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>

              {/* Documents Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                      <th className="text-left p-2 font-semibold">Date</th>
                      <th className="text-left p-2 font-semibold">Maschine Nummer</th>
                      <th className="text-left p-2 font-semibold">Description</th>
                      <th className="text-left p-2 font-semibold">Stundenkilometerstand</th>
                      <th className="text-left p-2 font-semibold">Letz-Rücknahme</th>
                      <th className="text-left p-2 font-semibold">User</th>
                      <th className="text-left p-2 font-semibold">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleDocuments.map((doc, i) => (
                      <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-2">{doc.date}</td>
                        <td className="p-2 text-red-600 font-semibold">{doc.machineNumber}</td>
                        <td className="p-2 text-blue-600">{doc.description}</td>
                        <td className="p-2 text-blue-600">{doc.size}</td>
                        <td className="p-2 text-orange-600">{doc.depot}</td>
                        <td className="p-2">{doc.user}</td>
                        <td className="p-2 text-green-600">{doc.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700">{activeTab} Content</h3>
            <p className="text-gray-600 mt-2">
              This is where the content for "{activeTab}" will be displayed.
              You can add your custom components here later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductionDashboard = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Production Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-purple-100 p-4 rounded">
        <h3 className="font-semibold">Daily Output</h3>
        <p className="text-3xl font-bold">1,240 units</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded">
        <h3 className="font-semibold">Efficiency</h3>
        <p className="text-3xl font-bold">87%</p>
      </div>
    </div>
  </div>
);

const MaintenanceScheduled = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Scheduled Maintenance</h2>
    <div className="space-y-3">
      {["Machine A - Next week", "Machine B - Tomorrow", "Machine C - In 3 days"].map((item, i) => (
        <div key={i} className="border-l-4 border-orange-500 pl-4 py-2">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const InventoryStock = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Current Stock</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-teal-100 p-4 rounded">
        <h3 className="font-semibold">Parts</h3>
        <p className="text-3xl font-bold">1,523</p>
      </div>
      <div className="bg-pink-100 p-4 rounded">
        <h3 className="font-semibold">Low Stock</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
      <div className="bg-indigo-100 p-4 rounded">
        <h3 className="font-semibold">Value</h3>
        <p className="text-3xl font-bold">€45K</p>
      </div>
    </div>
  </div>
);

const ReportsDaily = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Daily Reports</h2>
    <div className="space-y-4">
      <div className="border rounded p-4">
        <h3 className="font-semibold">Today's Summary</h3>
        <p className="text-gray-600 mt-2">Production: 450 units | Downtime: 2.5 hrs</p>
      </div>
    </div>
  </div>
);

const ProfileView = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
    <div className="flex items-center gap-4 mb-6">
      <div className="h-20 w-20 rounded-full bg-orange-500 flex items-center justify-center text-3xl font-bold text-white">
        JC
      </div>
      <div>
        <h3 className="text-xl font-semibold">Jane Cooper</h3>
        <p className="text-gray-600">jane.cooper@example.com</p>
        <p className="text-sm text-gray-500">Department: Laser</p>
      </div>
    </div>
  </div>
);

const SettingsView = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <div className="space-y-4">
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-2">Account Settings</h3>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-2">Notifications</h3>
        <p className="text-gray-600">Configure notification preferences</p>
      </div>
    </div>
  </div>
);

const NotificationsView = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Notifications</h2>
    <div className="space-y-3">
      {["New machine alert", "Maintenance reminder", "System update"].map((item, i) => (
        <div key={i} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const LoginView = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-lg shadow-lg p-8 w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
          Login
        </button>
      </div>
    </div>
  </div>
);

const DefaultView = ({ view }: { view: string }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4 capitalize">{view.replace(/-/g, ' ')}</h2>
    <p className="text-gray-600">Content for {view} will be displayed here.</p>
  </div>
);

// ============= VIEW ROUTER =============
const ViewRouter: React.FC<{ path: string; navigate: (path: string) => void }> = ({ path, navigate }) => {
  // Handle login route
  if (path === "/login") {
    return <LoginView />;
  }

  // Handle user routes
  if (path === "/profile") return <ProfileView />;
  if (path === "/settings") return <SettingsView />;
  if (path === "/notifications") return <NotificationsView />;

  // Handle module routes (e.g., /machines/overview or /machines/overview/123)
  const parts = path.split("/").filter(Boolean);
  
  if (parts.length >= 2) {
    const view = parts[1];
    
    // Check if there's a third part (machine ID)
    if (parts.length === 3 && view === "overview") {
      const machineId = parts[2];
      return <MachineDetail machineId={machineId} navigate={navigate} />;
    }
    
    // Regular views
    switch (view) {
      case "overview": return <MachineOverview navigate={navigate} />;
      case "qrcode": return <div className="bg-white rounded-lg shadow p-6"><h2 className="text-2xl font-bold mb-4">QR Code View</h2><p className="text-gray-600">QR Code functionality will be implemented here.</p></div>;
      case "prod-dashboard": return <ProductionDashboard />;
      case "maint-scheduled": return <MaintenanceScheduled />;
      case "inv-current": return <InventoryStock />;
      case "rep-daily": return <ReportsDaily />;
      default: return <DefaultView view={view} />;
    }
  }

  // Default fallback
  return <MachineOverview navigate={navigate} />;
};

// ============= MAIN APP =============
const App = () => {
  const { currentPath, navigate } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<ViewType>("machines");
  const [currentView, setCurrentView] = useState("overview");

  // Update module and view based on current path
  useEffect(() => {
    const parts = currentPath.split("/").filter(Boolean);
    if (parts.length >= 2) {
      const module = parts[0] as ViewType;
      const view = parts[1];
      
      if (NAVIGATION_CONFIG[module]) {
        setCurrentModule(module);
        setCurrentView(view);
      }
    }
  }, [currentPath]);

  const handleModuleChange = (module: ViewType) => {
    setCurrentModule(module);
    const firstView = NAVIGATION_CONFIG[module].sidebar.sections[0].items[0].view;
    setCurrentView(firstView);
  };

  // Don't show layout for login page
  if (currentPath === "/login") {
    return <ViewRouter path={currentPath} navigate={navigate} />;
  }

  return (
    <div className="flex max-h-screen bg-gray-100">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentModule={currentModule}
        currentView={currentView}
        onNavigate={setCurrentView}
        navigate={navigate}
      />

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          currentModule={currentModule}
          onModuleChange={handleModuleChange}
          navigate={navigate}
        />
        <main className="flex-1 p-4 lg:p-6 overflow-hidden flex flex-col">
          <div className="mb-4 text-sm text-gray-600 bg-white px-4 py-2 rounded shadow flex items-center justify-between flex-shrink-0">
            <span>
              Current Route: <span className="font-mono font-semibold text-orange-600">{currentPath}</span>
            </span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">
              {currentModule} / {currentView}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <ViewRouter path={currentPath} navigate={navigate} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;