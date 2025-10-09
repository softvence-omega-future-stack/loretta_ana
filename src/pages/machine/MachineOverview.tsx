import React, { useState } from 'react';
import MachineCard from '@/components/machine/MachineCard';
import Pagination from '@/components/machine/Pagination';
import MachineDetail from '@/components/machine/MachineDetail';
import type { Machine } from '@/components/machine/types';

const MachineOverview: React.FC = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'detail'>('overview');
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const allMachines: Machine[] = Array(25).fill(null).map((_, i) => ({
    id: `${i + 1}`,
    image: '/image 7.png',
    title: 'Atlas Copco QAS60 Stromerzeuger 60 kVA',
    subgroup: '11607',
    boelsNr: '116070485',
    serienNr: 'ESF403192',
    ext: '67B-OvE E8701: 09.01.2026',
    intern: '',
    letzRuckname: '116070485',
    wichtigInform: 'Beschädigt !',
    status: ['available', 'maintenance', 'rented'][i % 3] as 'available' | 'maintenance' | 'rented'
  }));

    const totalPages = Math.ceil(allMachines.length / itemsPerPage);

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
    <div className="max-h-screen flex flex-col relative">
  {currentView === 'overview' ? (
    <>
      {/* Cards Section */}
      <div className="flex-1 mb-6">
        <h2 className="text-[1.75rem] font-bold mb-4">Overview</h2>

        <div className="grid grid-cols-1 gap-2">
          {getCurrentPageMachines().map((machine) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onClick={() => handleCardClick(machine)}
            />
          ))}
        </div>
      </div>

      {/* Pagination at bottom */}
      <div className="mt-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  ) : (
    selectedMachine && <MachineDetail machine={selectedMachine} onBack={handleBack} />
  )}
</div>

  );
};

export default MachineOverview;
