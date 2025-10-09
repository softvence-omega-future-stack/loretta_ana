import React, { useState } from 'react';
import MachineCard from '@/components/machine/MachineCard';
import Pagination from '@/components/machine/Pagination';
import MachineDetail from '@/components/machine/MachineDetail';
import type { Machine } from '@/components/machine/types';

const MachineOverview: React.FC = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'detail'>('overview');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = 120;

  // Generate all machines for demonstration
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

  // Get machines for the current page
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
      <div className="flex">
        {/* Main Content */}
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
              <MachineDetail
                machine={selectedMachine}
                onBack={handleBack}
              />
            )
          )}
        </main>
      </div>
    </div>
  );
};

export default MachineOverview;
