import React from "react";
import type { ProtocolCardItem } from "@/components/views components/outputLog/overview/ProtocolCard";

interface ProtocolAusgabeprotokollProps {
  item: ProtocolCardItem;
}

const ProtocolAusgabeprotokoll: React.FC<ProtocolAusgabeprotokollProps> = ({
  item,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Image Section */}
      <div className="lg:col-span-2">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="aspect-square flex items-center justify-center bg-gray-200">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='%239CA3AF' font-size='24'%3EProtokoll Image%3C/text%3E%3C/svg%3E"
              alt="Protocol"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23F3F4F6'/%3E%3C/svg%3E"
                alt={`thumb-${i}`}
                className="w-16 h-16 rounded object-cover border border-gray-300 cursor-pointer hover:border-orange-400"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-6">
        <div className="px-3 py-1 rounded bg-orange-100 text-orange-600 w-fit text-sm font-semibold">
          Ausgabeprotokoll
        </div>

        {/* Technische Daten */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Technische Daten
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-600">Boels Nummer:</span>
              <span className="font-semibold text-orange-600 ml-2">
                {item.boelsNr}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Subgruppe:</span>
              <span className="font-semibold text-gray-900 ml-2">11891</span>
            </div>
            <div>
              <span className="text-gray-600">MV Nummer:</span>
              <span className="font-semibold text-gray-900 ml-2">
                1060257993
              </span>
            </div>
            <div>
              <span className="text-gray-600">Stundenzählerstand:</span>
              <span className="font-semibold text-gray-900 ml-2">0,0 BH</span>
            </div>
          </div>
        </div>

        {/* Protokoll Information */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Protokoll Information
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-600">Techniker:</span>
              <span className="font-semibold text-blue-600 ml-2">
                {item.technician}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Fotografiert am:</span>
              <span className="font-semibold text-gray-900 ml-2">
                {item.date}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Letzter Status:</span>
              <span className="text-green-600 font-semibold ml-2">
                Hergerichtet!
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-auto">
          Powered by Boels-Technikweb ®
        </div>
      </div>
    </div>
  );
};

export default ProtocolAusgabeprotokoll;
