import type { Machine } from "@/components/views components/machine/types";

const StammdatenTab = ({ machine }: { machine: Machine }) => {
  return (
    <div className="mt-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">

        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/4 bg-white border border-gray-200 rounded overflow-hidden flex">
          <div className="p-4 flex items-center justify-center flex-1">
            <img
              src={
                machine.image ||
                "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
              }
              alt={machine.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Left Column - Machine Details */}
        <div className="flex-1 bg-white border border-gray-200 rounded p-4 flex flex-col justify-between">
          <div className="space-y-2 text-sm flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3">
              {machine.title}
            </h3>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Maschine Nummer:</span>
              <span className="font-semibold text-red-500 truncate">{machine.boelsNr}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Seriennummer:</span>
              <span className="font-semibold truncate">{machine.serienNr}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Subgruppe:</span>
              <span className="font-semibold text-green-600 truncate">{machine.subgroup}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Baujahr:</span>
              <span className="font-semibold">31.03.2020</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Stundenzählerstand:</span>
              <span className="font-semibold text-blue-600">6.594 Bh</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-gray-600">Elektro ÖVE E8701/E8001 gültig bis:</span>
              <span className="font-semibold text-green-600">28.02.2026</span>
            </div>
          </div>
        </div>

        {/* Right Column - General Information */}
        <div className="flex-1 bg-white border border-gray-200 rounded p-4 flex flex-col justify-between">
          <div className="space-y-2 text-sm flex-1">
            <span className="inline-block bg-green-400 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded mb-3">
              Available
            </span>
            <h4 className="font-semibold text-sm mb-3">General Information</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Letztes Service am:</span>
                <span className="font-semibold text-blue-600">20.06.2025</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-600">bei Zählerstand:</span>
                <span className="font-semibold truncate">6594 / Robert Bocsa</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Frostschutz geprüft am:</span>
                <span className="font-semibold truncate">13.12.2021 −38 °C</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Saison:</span>
                <span className="font-semibold text-green-600">2023/2024</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-600">QR-Code Service:</span>
                <span className="font-semibold">JA</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-orange-500 mt-4">
            Powered by Boels-Technikweb ®
          </p>
        </div>

      </div>
    </div>
  );
};

export default StammdatenTab;
