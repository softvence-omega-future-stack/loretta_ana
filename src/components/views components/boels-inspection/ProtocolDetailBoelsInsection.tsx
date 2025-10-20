import React from "react";
import type { InspectionProtocol } from "./types";

const ProtocolDetailBoelsInspection: React.FC<{ protocol: InspectionProtocol }> = ({ protocol }) => {
  return (
    <div className="space-y-6">
      {/* Maschinendaten */}
      <div className="flex flex-col md:flex-row justify-between items-start bg-gray-50 p-6 rounded-md border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Maschinendaten & Prüfungsdetails
        </h3>
        <div className="text-left md:text-right text-sm text-gray-600">
          Machine Nummer:{" "}
          <span className="text-red-600 font-bold">{protocol.machineNummer}</span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Prüfprotokoll Details:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Machine Bezeiachnung:</span>
              <span className="text-blue-600 font-semibold">{protocol.machineDescription}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Geprüft am:</span>
              <span className="text-gray-900 font-semibold">{protocol.prueftAm}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Sticksoff Prüfen:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Nächster Prüfung am:</span>
              <span className="text-green-600 font-semibold">05.02.2021</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Geprüft von Herr:</span>
              <span className="text-green-600 font-semibold">Jurick Ivan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Signature */}
      <div className="bg-gray-50 p-6 rounded-md border border-gray-100 flex justify-center md:justify-start">
        <img className="w-full max-w-xs md:max-w-80 object-contain" src="/signature.png" alt="Signature" />
      </div>

      {/* Footer */}
      <div className="text-xs text-orange-500 text-right">Powered by Boels-Technikweb ®</div>
    </div>
  );
};

export default ProtocolDetailBoelsInspection;
