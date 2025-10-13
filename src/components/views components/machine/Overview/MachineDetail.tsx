import React, { useState, lazy, Suspense } from "react";
import { Link, ChevronDown } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";
import ZugeordneteDokumenteSection from "./ZugeordneteDokumenteSection";
import type { Machine } from "./types";

//Lazy load all the tab components
const StammdatenTab = lazy(() => import("./machineDetails/mainTabs/StammdatenTab"));
const MotordatenTabContent = lazy(() => import("./machineDetails/mainTabs/MotordatenTabContent"));
const TechnischeDatenTabContent = lazy(() => import("./machineDetails/mainTabs/TechnischeDatenTabContent"));
const SchmierstoffeTabContent = lazy(() => import("./machineDetails/mainTabs/SchmierstoffeTabContent"));
const AnbaugerateTabContent = lazy(() => import("./machineDetails/mainTabs/AnbaugerateTabContent"));
const WartungstabelleTabContent = lazy(() => import("./machineDetails/mainTabs/WartungstabelleTabContent"));
const DokumentationTabContent = lazy(() => import("./machineDetails/mainTabs/DokumentationTabContent"));
const ZubehorTabContent = lazy(() => import("./machineDetails/mainTabs/ZubehorTabContent"));
const NotizenTabContent = lazy(() => import("./machineDetails/mainTabs/NotizenTabContent"));
const FilesTab = lazy(() => import("./machineDetails/mainTabs/FilesTab"));

interface MachineDetailProps {
  machine: Machine;
  onBack: () => void;
}

const MachineDetail: React.FC<MachineDetailProps> = ({ machine, onBack }) => {
  const [activeTab, setActiveTab] = useState("Stammdaten");

  const mainTabs = [
    { id: "Stammdaten", label: "Stammdaten" },
    { id: "Motordaten", label: "Motordaten" },
    { id: "Technische Daten", label: "Technische Daten" },
    { id: "Schmierstoffe", label: "Schmierstoffe" },
    { id: "Anbaugeräte", label: "Anbaugeräte" },
    { id: "Wartungstabelle", label: "Wartungstabelle" },
    { id: "Dokumentation", label: "Dokumentation" },
    { id: "Zubehör", label: "Zubehör" },
    { id: "Notizen", label: "Notizen" },
    { id: "Files", label: null, icon: true },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
          Back
        </button>

        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
          Boels Technikweb - Maschinen Stammdaten
        </h2>

        <UniversalDropdown
          trigger={
            <button className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-nowrap">
              Dokument <ChevronDown size={16} className="inline-block" />
            </button>
          }
          align="center"
        >
          <button className="block w-full text-left p-2 text-gray-200 hover:bg-gray-700">
            Dokument
          </button>
          <button className="block w-full text-left p-2 text-gray-200 hover:bg-gray-700">
            Dokument
          </button>
        </UniversalDropdown>
      </div>

      <hr className="border-gray-300 mb-4 sm:mb-6" />

      {/* Tabs */}
      <div className="mb-4 sm:mb-6 -mx-3 sm:mx-0">
        <div className="overflow-x-auto px-3 sm:px-0">
          <div className="flex gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0 sm:flex-wrap">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm rounded whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1 ${
                  activeTab === tab.id
                    ? "bg-orange-100 text-orange-600 border border-orange-300"
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
                }`}
              >
                {tab.icon ? <Link size={16} /> : tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content (Lazy Loaded) */}
      <div className="w-full">
        <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
          {activeTab === "Stammdaten" && <StammdatenTab machine={machine} />}
          {activeTab === "Motordaten" && <MotordatenTabContent />}
          {activeTab === "Technische Daten" && <TechnischeDatenTabContent />}
          {activeTab === "Schmierstoffe" && <SchmierstoffeTabContent />}
          {activeTab === "Anbaugeräte" && <AnbaugerateTabContent />}
          {activeTab === "Wartungstabelle" && <WartungstabelleTabContent />}
          {activeTab === "Dokumentation" && <DokumentationTabContent />}
          {activeTab === "Zubehör" && <ZubehorTabContent />}
          {activeTab === "Notizen" && <NotizenTabContent />}
          {activeTab === "Files" && <FilesTab />}
        </Suspense>
      </div>

      {/* Zugeordnete Dokumente Section */}
      <div className="w-full mt-4 sm:mt-6">
        <ZugeordneteDokumenteSection />
      </div>
    </div>
  );
};

export default MachineDetail;
