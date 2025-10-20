import React from "react";
import type { WorkLog } from "../types";

const ErsatzteilInformation: React.FC<{ workLog: WorkLog }> = ({ workLog }) => {
  return (
    <div className="flex flex-col w-full space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-100">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">{workLog.machineTitle}</h1>
            <div className="text-sm mt-4">
              <span className="text-gray-600">Boels Nummer:</span>
              <span className="text-orange-600 font-bold text-lg ml-2">
                #{workLog.boelsNumber}
              </span>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-sm text-gray-600">
              Gerät-Zustand:{" "}
              <span className="text-green-600 font-semibold">Vermietbereit !</span>
            </span>
          </div>
        </div>
      </div>

      {/* Machine Data & Technician Info - Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        {/* Left: Maschinendaten */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="font-bold text-lg mb-3">Maschinendaten</h3>
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div className="text-gray-500 text-xs mb-1">Boels Number:</div>
                <div className="text-gray-900 font-semibold">
                  {workLog.boelsNumber || "101695221907"}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Seriennummer:</div>
                <div className="text-gray-900 font-semibold">
                  {workLog.serialNumber || "101695221907"}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">Baujahr:</div>
                <div className="text-gray-900 font-semibold">
                  {workLog.purchaseDate || "04.11.2019"}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">
                  Intern 68 durchgeführt am:
                </div>
                <div className="text-blue-600 font-semibold">
                  {workLog.internalDepotDays || "26.09.2026"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Techniker Information */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="font-bold text-lg mb-3">Techniker Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Techniker:</span>
              <span className="text-blue-600 font-semibold">
                {workLog.technician}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Zweiter Techniker:</span>
              <span className="text-blue-600 font-semibold">Helmut Hirschler</span>
            </div>
          </div>
        </div>
      </div>

      {/* Protokoll Übersicht & Reparaturbericht */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        {/* Left: Protokoll Übersicht */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="font-bold text-lg mb-3">Protokoll Übersicht</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-start">
              <span className="text-gray-500 text-xs">Auftragsart:</span>
              <span className="text-blue-600 font-semibold">
                {workLog.actionStatus || "Service Telematics !"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Datum:</span>
              <span className="text-gray-900 font-semibold">
                {workLog.date || "26.09.2025"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Uhrzeit:</span>
              <span className="text-gray-900 font-semibold">
                {workLog.workStatus || "11:21"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Bh Stand-Maschine:</span>
              <span className="text-gray-900 font-semibold">
                {workLog.statusText || "0,0 BH"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">
                Intern 68 durchgeführt am:
              </span>
              <span className="text-blue-600 font-semibold">
                {workLog.internalDepotDays || "26.09.2025"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Letztes Service am:</span>
              <span className="text-gray-900 font-semibold">
                {workLog.lastServiceDate || "26.09.2025 0 Bh Stand"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Saison:</span>
              <span className="text-green-600 font-semibold">- °C - 24/25</span>
            </div>
          </div>
        </div>

        {/* Right: Reparaturbericht */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h3 className="font-bold text-lg mb-3">Reparaturbericht</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-500 text-xs block mb-1">
                Reparaturbeschreibung:
              </span>
              <p className="text-blue-600 font-semibold text-xs leading-relaxed">
                {workLog.repairDescription ||
                  "Service & Wartung durchgeführt, Pflegemaßnahmen durchgeführt, Funktionskontrolle! Erregerwellen Öl getauscht, Seiltitzgarter erneuert"}
              </p>
            </div>
            <div>
              <span className="text-gray-500 text-xs block mb-1">
                Reparaturbeschreibung:
              </span>
              <p className="text-gray-800 font-semibold text-xs leading-relaxed">
                Erregerwellen Öl getauscht, Seiltitzgarter erneuert
              </p>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Arbeitsstunden:</span>
              <span className="text-gray-900 font-semibold">
                {workLog.workHours || "2,5 Std."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs">Letzte MV Nummer:</span>
              <span className="text-blue-600 font-semibold">
                {workLog.lastMVNumber || "5780629470"}
              </span>
            </div>
            <div className="text-orange-500 text-xs pt-2">
              Powered by Boels-Technikweb ®
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErsatzteilInformation;
