import React, { useState } from 'react';
import DocumentCategories from './DocumentCategories';
import DocumentsTable from './DocumentsTable';
import { RefreshCw } from 'lucide-react';
import type { Document } from './types';

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

export default ZugeordneteDokumenteSection;
