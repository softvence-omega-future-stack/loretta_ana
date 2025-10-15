import React, { useState, lazy, Suspense } from "react";
import { Link, ChevronDown } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";
import ZugeordneteDokumenteSection from "@/components/views components/machine/QRCode/QRCodeDetails/ZugeordneteDokumenteSection";
import type { QrCodeCardItem } from "@/components/views components/machine/QRCode/QRCodeCard";

// Lazy load all the tab components (reusing the same ones from Machine)
const StammdatenTab = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/StammdatenTab"));
const MotordatenTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/MotordatenTabContent"));
const TechnischeDatenTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/TechnischeDatenTabContent"));
const SchmierstoffeTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/SchmierstoffeTabContent"));
const AnbaugerateTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/AnbaugerateTabContent"));
const WartungstabelleTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/WartungstabelleTabContent"));
const DokumentationTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/DokumentationTabContent"));
const ZubehorTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/ZubehorTabContent"));
const NotizenTabContent = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/NotizenTabContent"));
const FilesTab = lazy(() => import("@/components/views components/machine/QRCode/QRCodeDetails/mainTabs/FilesTab"));

interface QrCodeDetailProps {
  item: QrCodeCardItem;
  onBack: () => void;
}

const QrCodeDetail: React.FC<QrCodeDetailProps> = ({ item, onBack }) => {
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

  // Convert QrCodeCardItem to Machine type format for compatibility
  const QRCodeData = {
    title: item.title,
    status: item.status,
    boelsNr: item.boelsNr,
    serienNr: "SN-123456", // Add if available
    letzterService: "", // Provide actual value if available
    subgroup: "116001", // Add if available
    zahlerstand: "", // Provide actual value if available
    baujahr: "", // Provide actual value if available
    frostschutz: "", // Provide actual value if available
    stundenzahlerstand: "", // Provide actual value if available
    saison: "", // Provide actual value if available
    internGultig: "", // Provide actual value if available
    qrCode: "", // Provide actual value if available
  };

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
        </UniversalDropdown>
      </div>

      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">
        Boels Technikweb - QR Code Stammdaten
      </h2>
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
          {activeTab === "Stammdaten" && <StammdatenTab item={QRCodeData} />}
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

export default QrCodeDetail;