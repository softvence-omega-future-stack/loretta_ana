import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import MachineInfoSection from './MachineInfoSection';
import ZugeordneteDokumenteSection from './ZugeordneteDokumenteSection';
import type { Machine } from './types'; // Make sure to import your Machine type

interface MachineDetailProps {
  machine: Machine;
  onBack: () => void;
}

const MachineDetail: React.FC<MachineDetailProps> = ({ machine, onBack }) => {
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
      {/* Header & Tabs */}
      <div className="bg-gray-50 p-4 mb-6 rounded shadow">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-3"
        >
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

      {/* Tab Content */}
      {activeTab === 'Stammdaten' ? (
        <>
          <MachineInfoSection machine={machine} />
          <ZugeordneteDokumenteSection />
        </>
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
  );
};

export default MachineDetail;
