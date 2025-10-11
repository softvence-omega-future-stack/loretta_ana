import type { Machine } from "@/components/views components/machine/types";

const StammdatenTabContent = ({ machine }: { machine: Machine }) => {
  return (
    <div className="bg-white rounded shadow p-6 mb-4">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="w-full lg:w-80 h-80 bg-gray-50 rounded flex items-center justify-center border">
          <img src={machine.image} alt={machine.title} className="max-w-full max-h-full object-contain rounded" />
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">{machine.title}</h3>
            <span className="bg-green-400 text-white text-sm px-4 py-1.5 rounded">Available</span>
          </div>

          <div className="bg-gray-50 border rounded p-5 mt-6">
            <h4 className="font-semibold text-base mb-4">General Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <p className="text-gray-600 text-sm">Machine Nummer:</p>
                <p className="font-semibold text-red-500">{machine.boelsNr}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Letztes Service am:</p>
                <p className="font-semibold text-blue-600">20.06.2025</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Seriennummer:</p>
                <p className="font-semibold">{machine.serienNr}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">bei Zählerzustand:</p>
                <p className="font-semibold">6594 / Robert Bocsa</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Subgruppe:</p>
                <p className="font-semibold text-green-600">{machine.subgroup}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Frostschutz geprüft am:</p>
                <p className="font-semibold">13.12.2021 −38 °C</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Baujahr:</p>
                <p className="font-semibold">31.03.2020</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Saison:</p>
                <p className="font-semibold text-green-600">2023/2024</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Stundenzählerstand:</p>
                <p className="font-semibold text-blue-600">6.594 Bh</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">QR-Code Service:</p>
                <p className="font-semibold">JA</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 text-sm">Elektro ÖVE E8701/EB001 gültig bis:</p>
                <p className="font-semibold">28.02.2026</p>
              </div>
            </div>
            <p className="text-sm text-orange-500 mt-4">Powered by Boels-Technikweb ®</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StammdatenTabContent;