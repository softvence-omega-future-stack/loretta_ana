import ArbeitsauftragTable from './subTabs/ArbeitsauftragTable';
import AusgabeprotokollTab from './subTabs/AusgabeprotokollTable';
import PrufprotokollTab from './subTabs/PrufungenInfoTable';
import StorungseinsatzTable from './subTabs/StorungseinsatzTable';
import StorungsmeldeDepotTab from './subTabs/StorungseinsatzTable';
import { useState } from 'react';
import SchadensmeldungTable from './subTabs/SchadensmeldungTable';
import RucknahmeprotokollTable from './subTabs/RucknahmeprotokollTable';

const ZugeordneteDokumenteSection = () => {
  const [activeSubTab, setActiveSubTab] = useState('Arbeitsauftrag');

  const subTabs = [
    { name: 'Arbeitsauftrag', count: 18 },
    { name: 'Schadensmeldung', count: 4 },
    { name: 'Störungseinsatz', count: 3 },
    { name: 'Ausgabeprotokoll', count: 9 },
    { name: 'Rücknahmeprotokoll', count: 4 },
    { name: 'Störungsmeld_Depot', count: 2 },
    { name: 'Prüfprotokoll', count: 2 },
  ];

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Zugeordnete Dokumente
        </h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <hr className="border-gray-300 mb-4" />

      <div className="mb-4 overflow-x-auto">
        <div className="flex gap-2 pb-2 min-w-max">
          {subTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveSubTab(tab.name)}
              className={`px-3 py-2 text-xs whitespace-nowrap border rounded transition-colors flex-shrink-0 ${
                activeSubTab === tab.name
                  ? 'bg-orange-100 text-orange-600 border-orange-200 font-medium'
                  : 'text-gray-700 bg-gray-100 border border-gray-200 hover:bg-orange-50'
              }`}
            >
              {tab.name} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        {activeSubTab === 'Arbeitsauftrag' && <ArbeitsauftragTable />}
        {activeSubTab === 'Schadensmeldung' && <SchadensmeldungTable />}
        {activeSubTab === 'Störungseinsatz' && <StorungseinsatzTable />}
        {activeSubTab === 'Ausgabeprotokoll' && <AusgabeprotokollTab />}
        {activeSubTab === 'Rücknahmeprotokoll' && <RucknahmeprotokollTable />}
        {activeSubTab === 'Störungsmeld_Depot' && <StorungsmeldeDepotTab />}
        {activeSubTab === 'Prüfprotokoll' && <PrufprotokollTab />}
      </div>
    </div>
  );
};

export default ZugeordneteDokumenteSection;