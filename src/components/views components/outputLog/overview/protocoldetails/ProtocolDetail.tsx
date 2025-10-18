// import React, { useState, lazy, Suspense } from "react";
// import { Link, ChevronDown } from "lucide-react";
// import type { ProtocolCardItem } from "@/components/views components/outputLog/overview/ProtocolCard";

// // Lazy load tab components
// const ProtocolAusgabeprotokoll = lazy(() =>
//   import("@/components/views components/outputLog/overview/protocoldetails/ProtocolAusgabeprotokoll")
// );
// const ProtocolFiles = lazy(() =>
//   import("@/components/views components/outputLog/overview/protocoldetails/ProtocolFiles")
// );

// interface ProtocolDetailProps {
//   item: ProtocolCardItem;
//   onBack: () => void;
// }

// const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ item, onBack }) => {
//   const [activeTab, setActiveTab] = useState("ausgabeprotokoll");

//   const mainTabs = [
//     { id: "ausgabeprotokoll", label: "Ausgabeprotokoll" },
//     { id: "files", label: "Files" },
//     { id: "link", label: null, icon: true },
//   ];

//   // Convert ProtocolCardItem to the format needed for detail page
//   const protocolData = {
//     id: item.id,
//     boelsNr: item.boelsNr,
//     mvNr: item.mvNr,
//     deliveryType: item.deliveryType,
//     technician: item.technician,
//     date: item.date,
//     status: item.status,
//   };

//   return (
//     <div className="flex flex-col w-full">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors w-fit"
//         >
//           <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
//           Back
//         </button>

//         <button className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-nowrap">
//           Dokument <ChevronDown size={16} className="inline-block" />
//         </button>
//       </div>

//       <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">
//         Ausgabeprotokoll: Depot {item.boelsNr}
//       </h2>
//       <hr className="border-gray-300 mb-4 sm:mb-6" />

//       {/* Tabs */}
//       <div className="mb-4 sm:mb-6 -mx-3 sm:mx-0">
//         <div className="overflow-x-auto px-3 sm:px-0">
//           <div className="flex gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0 sm:flex-wrap">
//             {mainTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-3 py-2 text-sm rounded whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1 ${
//                   activeTab === tab.id
//                     ? "bg-orange-100 text-orange-600 border border-orange-300"
//                     : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
//                 }`}
//               >
//                 {tab.icon ? <Link size={16} /> : tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tab Content (Lazy Loaded) */}
//       <div className="w-full">
//         <Suspense
//           fallback={
//             <div className="text-center py-10 text-gray-500">Loading...</div>
//           }
//         >
//           {activeTab === "ausgabeprotokoll" && (
//             <ProtocolAusgabeprotokoll item={protocolData} />
//           )}
//           {activeTab === "files" && <ProtocolFiles />}
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default ProtocolDetail;


import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Link2 } from "lucide-react";

export interface ProtocolCardItem {
  id: string;
  boelsNr: string;
  mvNr: string;
  deliveryType: string;
  technician: string;
  date: string;
  status: "vorbereitet" | "in_progress" | "completed";
}

interface ProtocolDetailProps {
  item: ProtocolCardItem;
  onBack: () => void;
}

const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ item, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for the carousel
  const images = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect fill='%23e8f4f8' width='500' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%23666'%3EMachine Image 1%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect fill='%23f0f0f0' width='500' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%23999'%3EMachine Image 2%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect fill='%23fff4e8' width='500' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%23999'%3EMachine Image 3%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect fill='%23f4e8ff' width='500' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%23666'%3EMachine Image 4%3C/text%3E%3C/svg%3E",
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vorbereitet":
        return "bg-green-100 text-green-700";
      case "in_progress":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const statusLabel = {
    vorbereitet: "Vorbereitet!",
    in_progress: "In Progress",
    completed: "Completed",
  };

  return (
    <div className="w-full p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 transition-colors text-sm font-medium"
      >
        <ChevronLeft size={20} />
        Back
      </button>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Ausgabeprotokoll: Depot {item.mvNr}
      </h1>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Image Section */}
        <div className="lg:col-span-2">
          {/* Status Badge and Link Button */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded text-xs font-semibold inline-block ${getStatusColor(
                item.status
              )}`}
            >
              {statusLabel[item.status as keyof typeof statusLabel]}
            </span>
            <button className="p-2 text-blue-500 hover:text-blue-700 transition-colors">
              <Link2 size={18} />
            </button>
          </div>

          {/* Main Image Display */}
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-md">
            <img
              src={images[currentImageIndex]}
              alt={`Protocol image ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevImage}
              className="p-2 bg-gray-800 hover:bg-gray-900 rounded text-white transition-colors flex-shrink-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2 overflow-x-auto flex-1 pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-3 transition-all ${
                    idx === currentImageIndex
                      ? "border-blue-500 ring-2 ring-blue-300"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={handleNextImage}
              className="p-2 bg-gray-800 hover:bg-gray-900 rounded text-white transition-colors flex-shrink-0"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Column: Information Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Technische Daten Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Technische Daten
            </h3>

            <div className="space-y-4">
              {/* Boels Nummer */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Boels Nummer
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-bold text-gray-900">{item.boelsNr}</p>
                  <p className="text-xs text-blue-600 font-medium">
                    {item.deliveryType}
                  </p>
                </div>
              </div>

              {/* Subgruppe */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Subgruppe
                </p>
                <p className="text-sm font-bold text-gray-900">{item.boelsNr}</p>
              </div>

              {/* MV Nummer */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  MV Nummer
                </p>
                <p className="text-sm font-bold text-blue-600">{item.mvNr}</p>
              </div>

              {/* Stundenzählerstand */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Stundenzählerstand
                </p>
                <p className="text-sm font-bold text-gray-900">0,0 BH</p>
              </div>
            </div>
          </div>

          {/* Protokoll Information Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              Protokoll Information
            </h3>

            <div className="space-y-4">
              {/* Techniker */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Techniker
                </p>
                <p className="text-sm font-bold text-blue-600">{item.technician}</p>
              </div>

              {/* Fotograf am */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Fotograf am
                </p>
                <p className="text-sm font-bold text-gray-900">{item.date}</p>
              </div>

              {/* Letzter Status */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Letzter Status
                </p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-bold ${getStatusColor(
                    item.status
                  )}`}
                >
                  {statusLabel[item.status as keyof typeof statusLabel]}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                Powered by Boels-Technisweb ®
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Files Section */}
      <div className="mt-8 bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Files</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Dateianhang
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  Files
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  File Size
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "12/27/2021 09:32 AM", file: "1060_20250122_083213.jpg", size: "178 KB" },
                { date: "04/09/2025 11:59 AM", file: "1060_20250122_083213.jpg", size: "519 KB" },
                { date: "04/09/2025 11:59 AM", file: "1060_20250122_083213.jpg", size: "519 KB" },
                { date: "04/09/2025 11:59 AM", file: "1060_20250122_083213.jpg", size: "519 KB" },
              ].map((file, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-600">{file.date}</td>
                  <td className="py-3 px-4 text-blue-600 font-medium hover:underline cursor-pointer">
                    {file.file}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{file.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProtocolDetail;