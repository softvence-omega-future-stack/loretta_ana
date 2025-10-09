import React from 'react';
import type { Machine } from './types';

interface MachineInfoSectionProps {
  machine: Machine;
}

const MachineInfoSection: React.FC<MachineInfoSectionProps> = ({ machine }) => {
  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-80 h-80 bg-orange-500 rounded flex-shrink-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center">
              <span className="text-orange-500 font-bold text-2xl">Boels</span>
            </div>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">{machine.title}</h3>
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

export default MachineInfoSection;
