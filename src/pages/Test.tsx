import React, { useState } from 'react';
import { Search, Menu, X, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

// Types
interface Machine {
  id: string;
  image: string;
  title: string;
  subgroup: string;
  boelsNr: string;
  serienNr: string;
  ext: string;
  intern: string;
  letzRuckname: string;
  wichtigInform: string;
  status: 'available' | 'maintenance' | 'rented';
}

interface Document {
  date: string;
  machineNumber: string;
  description: string;
  size: string;
  depot: string;
  user: string;
  remark: string;
}

// Navbar Component
const Navbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
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

// Sidebar Component
const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void; onNavigate: (view: string) => void; currentView: string }> = ({ isOpen, onClose, onNavigate, currentView }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}
      
      <aside className={`fixed lg:static top-0 left-0 h-full bg-gray-900 text-white w-64 transform transition-transform duration-300 z-50 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-500 px-3 py-2 rounded">
              <h2 className="text-lg font-bold">Boels</h2>
              <p className="text-xs">Technikweb</p>
            </div>
            <button onClick={onClose} className="lg:hidden">
              <X size={24} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-6">Created By Malinovic</p>
        </div>

        <nav className="px-3 pb-6">
          <div className="mb-4">
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">Machines</h3>
            <button 
              onClick={() => onNavigate('overview')}
              className={`w-full text-left px-3 py-2 rounded mb-1 text-sm ${currentView === 'overview' ? 'bg-orange-500' : 'hover:bg-gray-800'}`}
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
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              TW Manual
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              TechnikerTeam-A1
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              TW Access Data
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              Issue Return
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              Trucklimit Boels
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              Workshop Supplies
            </button>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs uppercase mb-2 px-2">Personal</h3>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-800 mb-1 text-sm text-gray-300">
              My Folder
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

// Machine Card Component
const MachineCard: React.FC<{ machine: Machine; onClick: () => void }> = ({ machine, onClick }) => {
  const statusColors = {
    available: 'bg-green-400',
    maintenance: 'bg-red-400',
    rented: 'bg-orange-400'
  };

  const statusLabels = {
    available: 'Available',
    maintenance: 'Maintenance',
    rented: 'Rented Out'
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded shadow hover:shadow-md transition-shadow cursor-pointer p-4"
    >
      <div className="flex gap-4">
        <div className="w-32 h-32 bg-orange-500 rounded flex-shrink-0"></div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-700 mb-1">
                Bezeichnung: <span className="text-blue-600 font-medium">{machine.title}</span>
              </p>
              <p className="text-xs text-gray-700">
                Subgruppe: <span className="text-red-500 font-medium">{machine.subgroup}</span>
              </p>
            </div>
            <span className={`${statusColors[machine.status]} text-white text-xs px-2.5 py-1 rounded whitespace-nowrap`}>
              {statusLabels[machine.status]}
            </span>
          </div>
          
          <div className="space-y-1 text-xs mb-2">
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-gray-700">
                Boels Nr: <span className="text-red-500 font-medium">{machine.boelsNr}</span>
              </p>
              <p className="text-gray-700">Ext: {machine.ext}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-gray-700">
                Serien Nr: <span className="text-blue-600 font-medium">{machine.serienNr}</span>
              </p>
              <p className="text-gray-700">Intern §11 gültig bis:</p>
            </div>
          </div>
          
          <div className="text-xs space-y-1">
            <p className="text-gray-700">
              Letz Rücknahme: <span className="text-green-600 font-medium">{machine.letzRuckname}</span>
            </p>
            <p className="text-gray-700">
              Wichtig Inform: <span className="text-red-500 font-medium">{machine.wichtigInform}</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-3 flex justify-end">
        <button className="bg-gray-800 text-white px-4 py-1.5 rounded text-xs hover:bg-gray-700">
          Hover
        </button>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1"
      >
        <ChevronLeft size={16} /> Vorige
      </button>
      
      <div className="flex gap-1">
        {getPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === 'number' ? onPageChange(page) : null}
            className={`min-w-[32px] h-8 px-2 rounded text-sm ${
              page === currentPage 
                ? 'bg-gray-800 text-white' 
                : typeof page === 'number' 
                ? 'hover:bg-gray-200' 
                : 'cursor-default'
            }`}
            disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1"
      >
        Nächste <ChevronRight size={16} />
      </button>
    </div>
  );
};

// Machine Info Section Component (First Image)
const MachineInfoSection: React.FC<{ machine: Machine }> = ({ machine }) => {
  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="w-full lg:w-80 h-80 bg-orange-500 rounded flex-shrink-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center">
              <span className="text-orange-500 font-bold text-2xl">Boels</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              {machine.title}
            </h3>
            <span className="bg-green-400 text-white text-sm px-4 py-1.5 rounded inline-block">
              Available
            </span>
          </div>
          
          <div className="bg-white border border-gray-200 rounded p-5 mt-6">
            <h4 className="font-semibold text-base mb-4">General Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <p className="text-gray-600 text-sm mb-1">Machine Number:</p>
                <p className="font-semibold text-red-500">{machine.boelsNr}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Letztes Service am:</p>
                <p className="font-semibold">20.06.2025</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Seriennummer:</p>
                <p className="font-semibold text-blue-600">{machine.serienNr}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">bei Zahlenzuord:</p>
                <p className="font-semibold">6694 / Ruben Boels</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Subgruppe:</p>
                <p className="font-semibold text-red-500">{machine.subgroup}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Fristschutz gültig:</p>
                <p className="font-semibold">31.12.2021 - 38°C</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Baujahr:</p>
                <p className="font-semibold">31.03.2020</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Saison:</p>
                <p className="font-semibold">2023/2024</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">Stundenkilometerstand:</p>
                <p className="font-semibold text-blue-600">6.584 Bh</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">QR-Code-Service:</p>
                <p className="font-semibold text-blue-600">JA</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 text-sm mb-1">Elektro ÖVE E8701/VdE001 gültig bis:</p>
                <p className="font-semibold">28.02.2026</p>
              </div>
            </div>
            <p className="text-sm text-orange-500 mt-4">Powered by Boels Technikweb ®</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Document Categories Component
const DocumentCategories: React.FC<{ categories: Array<{name: string, count?: number}>, activeCategory: string, onCategoryChange: (cat: string) => void }> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onCategoryChange(cat.name)}
          className={`px-4 py-2 rounded text-sm border ${
            activeCategory === cat.name
              ? 'bg-orange-100 text-orange-600 border-orange-200'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {cat.name} {cat.count && `(${cat.count})`}
        </button>
      ))}
    </div>
  );
};

// Documents Table Component (Second Image)
const DocumentsTable: React.FC<{ documents: Document[] }> = ({ documents }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Datum</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Maschine Nummer</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Description</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Stundenkilometerstand</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Letz Rücknahme</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">User</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Remark</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-4">{doc.date}</td>
              <td className="p-4 text-red-500 font-medium">{doc.machineNumber}</td>
              <td className="p-4">
                <a href="#" className="text-blue-600 hover:underline">
                  {doc.description}
                </a>
              </td>
              <td className="p-4 text-blue-600">{doc.size}</td>
              <td className="p-4 text-orange-500">{doc.depot}</td>
              <td className="p-4">{doc.user}</td>
              <td className="p-4 text-green-600">{doc.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Zugeordnete Dokumente Section Component (Second Image)
const ZugeordneteDokumenteSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Anweisung');

  const docCategories = [
    { name: 'Anweisung', count: 27 },
    { name: 'Schadesmeldung', count: 1 },
    { name: 'Stauungshinweis', count: 4 },
    { name: 'Prüfungen Info', count: 1 },
    { name: 'Ausgabetprotokoll', count: 6 },
    { name: 'Rücknahmprotokoll', count: 3 },
    { name: 'Wissensdatenbank', count: 1 }
  ];

  const sampleDocuments: Document[] = Array(6).fill(null).map((_, i) => ({
    date: '20.06.2025',
    machineNumber: '116070462',
    description: 'Maschoffler, Kraftstofffilter, Service & Wartung durchgeführt...',
    size: '6.584 Bh',
    depot: 'Depot 578',
    user: 'Boscar',
    remark: i % 3 === 0 ? 'Service Telematics...' : i % 2 === 0 ? 'Check-i' : 'Reparatur !'
  }));

  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
      
      <DocumentCategories 
        categories={docCategories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className="flex justify-end mb-4">
        <button className="text-gray-600 hover:text-gray-900 p-2">
          <RefreshCw size={20} />
        </button>
      </div>

      {activeCategory === 'Anweisung' ? (
        <DocumentsTable documents={sampleDocuments} />
      ) : (
        <div className="p-8 text-center bg-gray-50 rounded">
          <p className="text-gray-600">
            Content for "{activeCategory}" category will be displayed here.
            You can add your custom component later.
          </p>
        </div>
      )}
    </div>
  );
};

// Machine Detail Component - Combines both sections with tabs
const MachineDetail: React.FC<{ machine: Machine; onBack: () => void }> = ({ machine, onBack }) => {
  const [activeTab, setActiveTab] = useState('Stammdaten');

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

  return (
    <div>
      <div className="bg-gray-50 p-4 mb-6 rounded shadow">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-3">
          <ChevronLeft size={18} /> Back
        </button>
        
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-xl font-bold">Boels Technikweb - Maschinen Stammdaten</h2>
          <select className="border rounded px-3 py-1.5 text-sm bg-white">
            <option>Document...</option>
          </select>
        </div>
        
        <div className="flex gap-2 border-b border-gray-300 overflow-x-auto">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm whitespace-nowrap border-b-2 -mb-px ${
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

      {activeTab === 'Stammdaten' ? (
        <>
          <MachineInfoSection machine={machine} />
          <ZugeordneteDokumenteSection />
        </>
      ) : (
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700">
            {activeTab} Content
          </h3>
          <p className="text-gray-600 mt-2">
            This is where the content for "{activeTab}" will be displayed.
            You can add your custom components here later.
          </p>
        </div>
      )}
    </div>
  );
};

// Main Test Component
const Test: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'overview' | 'detail'>('overview');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = 120;

  const allMachines: Machine[] = Array(totalPages * itemsPerPage).fill(null).map((_, i) => ({
    id: `${i + 1}`,
    image: '',
    title: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schalledämpft',
    subgroup: '11607',
    boelsNr: '116070485',
    serienNr: 'ESF403192',
    ext: '67B-OvE E8701: 09.01.2026',
    intern: '',
    letzRuckname: '116070485',
    wichtigInform: 'Beschädigt !',
    status: ['available', 'maintenance', 'rented'][i % 3] as 'available' | 'maintenance' | 'rented'
  }));

  const getCurrentPageMachines = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allMachines.slice(startIndex, endIndex);
  };

  const handleCardClick = (machine: Machine) => {
    setSelectedMachine(machine);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setCurrentView('overview');
    setSelectedMachine(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onNavigate={(view) => {
            if (view === 'overview') {
              handleBack();
            }
            setSidebarOpen(false);
          }}
          currentView={currentView}
        />
        
        <main className="flex-1 p-4 lg:p-6 min-h-screen">
          {currentView === 'overview' ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4">Overview</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {getCurrentPageMachines().map((machine) => (
                    <MachineCard 
                      key={machine.id} 
                      machine={machine} 
                      onClick={() => handleCardClick(machine)}
                    />
                  ))}
                </div>
              </div>
              
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            selectedMachine && (
              <MachineDetail machine={selectedMachine} onBack={handleBack} />
            )
          )}
        </main>
      </div>
    </div>
  );
};

export default Test;