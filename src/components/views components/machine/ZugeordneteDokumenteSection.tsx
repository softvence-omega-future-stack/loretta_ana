import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import ArbeitsauftragTable from './machineDetails/subTabs/ArbeitsauftragTable';
import SchadensmeldungTable from './machineDetails/subTabs/SchadensmeldungTable';
import StorungseinsatzTable from './machineDetails/subTabs/StorungseinsatzTable';
import  PrufungenInfoTable  from './machineDetails/subTabs/PrufungenInfoTable';
import AusgabeprotokollTable from './machineDetails/subTabs/AusgabeprotokollTable';
import RucknahmeprotokollTable from './machineDetails/subTabs/RucknahmeprotokollTable';
import WissensdatenbankTable from './machineDetails/subTabs/WissensdatenbankTable';

const ZugeordneteDokumenteSection = () => {
  const [activeSubTab, setActiveSubTab] = useState('Arbeitsauftrag');

  const subTabs = [
    { name: 'Arbeitsauftrag', count: 31 },
    { name: 'Schadensmeldung', count: 1 },
    { name: 'Störungseinsatz', count: 4 },
    { name: 'Prüfungen Info', count: 1 },
    { name: 'Ausgabeprotokoll', count: 6 },
    { name: 'Rücknahmeprotokoll', count: 3 },
    { name: 'Wissensdatenbank', count: 1 }
  ];

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
      
      <div className="flex gap-2">
        {subTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveSubTab(tab.name)}
            className={`px-4 py-2 text-sm whitespace-nowrap border -mb-px transition-colors rounded ${
              activeSubTab === tab.name
                ? 'bg-orange-100 text-orange-600 border-orange-200 font-medium'
                : 'text-gray-700 bg-gray-200 border border-gray-300 hover:bg-orange-100 hover:text-orange-600 hover:border-orange-200'
            }`}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>

      <div className="flex justify-end mb-4">
        <button className="p-2 hover:bg-gray-100 rounded">
          <RefreshCw size={18} className="text-gray-600" />
        </button>
      </div>

      {activeSubTab === 'Arbeitsauftrag' && <ArbeitsauftragTable />}
      {activeSubTab === 'Schadensmeldung' && <SchadensmeldungTable />}
      {activeSubTab === 'Störungseinsatz' && <StorungseinsatzTable />}
      {activeSubTab === 'Prüfungen Info' && <PrufungenInfoTable />}
      {activeSubTab === 'Ausgabeprotokoll' && <AusgabeprotokollTable />}
      {activeSubTab === 'Rücknahmeprotokoll' && <RucknahmeprotokollTable />}
      {activeSubTab === 'Wissensdatenbank' && <WissensdatenbankTable />}
    </div>
  );
};

export default ZugeordneteDokumenteSection;