import React from "react";
import type { InspectionProtocol } from "./types";

const ProtocolDetailMultiPat: React.FC<{ protocol: InspectionProtocol }> = ({
  protocol,
}) => {
  return (
    <div className="space-y-6">
      {/* Maschinendaten & Prüfungsdetails */}
      <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900">
              Maschinendaten & Prüfungsdetails
            </h3>
            <div className="text-sm text-gray-600 mt-1">
              Machine Nummer:{" "}
              <span className="text-red-600 font-bold">{protocol.machineNummer}</span>
            </div>
          </div>
          <div className="text-left md:text-right">
            <span className="text-sm text-gray-600">Unterzeichner: </span>
            <span className="text-blue-600 font-semibold">{protocol.unterzeichner}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Left */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 text-nowrap">Machine Bezeiachnung:</span>
              <span className="text-blue-600 font-semibold">{protocol.machineDescription}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-nowrap">Zählersstand:</span>
              <span className="text-blue-600 font-semibold">{protocol.zahlersstand}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Geprüft am:</span>
              <span className="text-blue-600 font-semibold">{protocol.prueftAm}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Boels Depot:</span>
              <span className="text-blue-600 font-semibold">{protocol.boelsDepot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Geprüft von Herr:</span>
              <span className="text-blue-600 font-semibold">{protocol.prueftVonHerr}</span>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Prüfungsart:</span>
              <span className="text-gray-900 font-semibold">{protocol.pruefungsart}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Schutzklasse:</span>
              <span className="text-gray-900 font-semibold">{protocol.schutzklasse}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Elk: Hzleistung:</span>
              <span className="text-gray-900 font-semibold">{protocol.elkHaelterung}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Schutzleiterlaenge:</span>
              <span className="text-gray-900 font-semibold">{protocol.schutzleiterlaenge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nenspannung:</span>
              <span className="text-gray-900 font-semibold">{protocol.nenspannung}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messungen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Messungen:</h4>
          <div className="space-y-2 text-sm">
            {[
              ["Erdverbindung", protocol.messungen?.erdverbindung],
              ["Isolierung", protocol.messungen?.isolierung],
              ["SUB-Leckstrom", protocol.messungen?.subLeckstrom],
              ["Leckstrom", protocol.messungen?.leckstrom],
              ["Leckstrom", protocol.messungen?.leckstromValue],
              ["Last Leckstrom", protocol.messungen?.lastLeckstrom],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-600">{label}</span>
                <span className="text-gray-900 font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Funktionsmessungen:</h4>
          <div className="space-y-2 text-sm">
            {[
              ["Funktionsmessungen", protocol.funktionsmessungen?.funktionsMessungen],
              ["Spannung in Volt", protocol.funktionsmessungen?.spanningInVolt],
              ["Strom in Ampere", protocol.funktionsmessungen?.stromInAmpere],
              ["Leistung in Watt", protocol.funktionsmessungen?.leistungInWatt],
              ["Teststatus", protocol.funktionsmessungen?.teststatus],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-600">{label}</span>
                <span className={label === "Teststatus" ? "text-green-600 font-semibold" : "text-gray-900 font-semibold"}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prüfprotokoll Details & Funktionsmessungen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Prüfprotokoll Details:</h4>
          <div className="space-y-2 text-sm">
            {[
              ["Testcodes", protocol.pruefprotokollDetails?.testcodes],
              ["Bemerkung zur Prüfung", protocol.pruefprotokollDetails?.bemerkung],
              ["Sonstiges", protocol.pruefprotokollDetails?.sonstiges],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-600">{label}:</span>
                <span className="text-gray-900 font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
          <h4 className="font-bold text-lg mb-3">Funktionsmessungen:</h4>
          <div className="space-y-2 text-sm">
            {[
              ["Funktionsprüfung", protocol.funktionsprufung?.funktionsprufung],
              ["Art der Prüfung", protocol.funktionsprufung?.art_der_prufung],
              ["Gerät Vermietereit", protocol.funktionsprufung?.gerate_vermietereit],
              ["Nächster Prüfung am", protocol.funktionsprufung?.nachster_prufung_am],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-600">{label}:</span>
                <span className={["Funktionsprüfung", "Gerät Vermietereit"].includes(label as string) ? "text-green-600 font-semibold" : "text-gray-900 font-semibold"}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolDetailMultiPat;
