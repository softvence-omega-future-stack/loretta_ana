import React, { useState } from 'react';
import StammdatenTab from './machineDetails/mainTabs/StammdatenTab';
import MotordatenTabContent from './machineDetails/mainTabs/MotordatenTabContent';
import TechnischeDatenTabContent from './machineDetails/mainTabs/TechnischeDatenTabContent';
import SchmierstoffeTabContent from './machineDetails/mainTabs/SchmierstoffeTabContent';
import AnbaugerateTabContent from './machineDetails/mainTabs/AnbaugerateTabContent';
import WartungstabelleTabContent from './machineDetails/mainTabs/WartungstabelleTabContent';
import DokumentationTabContent from './machineDetails/mainTabs/DokumentationTabContent';
import ZubehorTabContent from './machineDetails/mainTabs/ZubehorTabContent';
import NotizenTabContent from './machineDetails/mainTabs/NotizenTabContent';
import ZugeordneteDokumenteSection from './ZugeordneteDokumenteSection';
import FilesTab from './machineDetails/mainTabs/FilesTab';

import type { Machine } from './types';

interface MachineDetailProps {
  machine: Machine;
  onBack: () => void;
}

const MachineDetail: React.FC<MachineDetailProps> = ({ machine, onBack }) => {
  const [activeTab, setActiveTab] = useState('Stammdaten');

  const mainTabs = [
    'Stammdaten', 'Motordaten', 'Technische Daten', 'Schmierstoffe',
    'Anbaugeräte', 'Wartungstabelle', 'Dokumentation', 'Zubehör', 'Notizen', '😊'
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-4"
        >
          <img src="/back.svg" alt="Back" className='w-6 h-6'/> Back
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <h2 className="text-xl font-bold">Boels Technikweb - Maschinen Stammdaten</h2>
          <select className="border rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto">
            <option>Dokument</option>
          </select>
        </div>

        {/* Main Tabs */}
        <div className="flex flex-wrap gap-2">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm whitespace-nowrap border -mb-px transition-colors rounded ${
                activeTab === tab
                  ? 'bg-orange-100 text-orange-600 border-orange-200 font-medium'
                  : 'text-gray-700 bg-gray-200 border border-gray-300 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'Stammdaten' && <StammdatenTab machine={machine} />}
        {activeTab === 'Motordaten' && <MotordatenTabContent />}
        {activeTab === 'Technische Daten' && <TechnischeDatenTabContent />}
        {activeTab === 'Schmierstoffe' && <SchmierstoffeTabContent />}
        {activeTab === 'Anbaugeräte' && <AnbaugerateTabContent />}
        {activeTab === 'Wartungstabelle' && <WartungstabelleTabContent />}
        {activeTab === 'Dokumentation' && <DokumentationTabContent />}
        {activeTab === 'Zubehör' && <ZubehorTabContent />}
        {activeTab === 'Notizen' && <NotizenTabContent />}
        {activeTab === '😊' && <FilesTab />}
      </div>

      {/* Always show Zugeordnete Dokumente section */}
      <ZugeordneteDokumenteSection />
    </div>
  );
};

export default MachineDetail;
