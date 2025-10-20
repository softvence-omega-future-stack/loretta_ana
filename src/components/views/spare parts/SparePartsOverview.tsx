import React, { useState } from "react";
import { ChevronDown, CheckCircle, AlertCircle, Link } from "lucide-react";

// ==========================================
// Types
// ==========================================
type ActionStatus = "Service Telematics!" | "Reparatur!" | "Check!";

type MachineItem = {
  id: string;
  date: string;
  machineTitle: string;
  boelsNumber: string;
  wert: number;
  technician: string;
  depot: string;
  actionStatus: ActionStatus;
};

type Machine = {
  id: string;
  date: string;
  machineTitle: string;
  boelsNumber: string;
  wert: number;
  technician: string;
  depot: string;
  actionStatus: ActionStatus;
  serialNumber?: string;
  purchaseDate?: string;
  internalDepotDays?: string;
  lastServiceDate?: string;
  workStatus?: string;
  statusText?: string;
  repairDescription?: string;
  repairDate?: string;
  workHours?: string;
  lastMVNumber?: string;
  documents?: Array<{
    id: string;
    number: string;
    name: string;
    supplier: string;
    depot: string;
    listPrice: string;
    purchasePrice: string;
    image: string;
  }>;
  files?: Array<{
    id: string;
    date: string;
    name: string;
    size: string;
    icon: string;
  }>;
};

// ==========================================
// Machine Card Component
// ==========================================
type MachineCardProps = {
  item: MachineItem;
  onClick: () => void;
};

const MachineCard: React.FC<MachineCardProps> = ({ item, onClick }) => {
  const getStatusColor = (status: ActionStatus) => {
    switch (status) {
      case "Service Telematics!":
        return "bg-green-100 text-green-700";
      case "Reparatur!":
        return "bg-red-100 text-red-700";
      case "Check!":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: ActionStatus) => {
    switch (status) {
      case "Service Telematics!":
      case "Check!":
        return <CheckCircle size={16} />;
      case "Reparatur!":
        return <AlertCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all cursor-pointer bg-white"
    >
      {/* Status Circle */}
      <div className="flex-shrink-0">
        <CheckCircle size={24} className="text-green-500" />
      </div>

      {/* Date */}
      <div className="flex-shrink-0 w-20">
        <span className="text-sm text-gray-600">{item.date}</span>
      </div>

      {/* Machine Info */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-gray-900">{item.machineTitle}</div>
        <div className="text-xs text-blue-600">{item.boelsNumber}</div>
      </div>

      {/* WERT */}
      <div className="flex-shrink-0 w-12 text-right">
        <span className="text-sm text-blue-600 font-medium">{item.wert.toFixed(1)}</span>
      </div>

      {/* Technician / Depot */}
      <div className="flex-shrink-0 w-32 text-right">
        <div className="text-sm font-semibold text-gray-900">{item.technician}</div>
        <div className="text-xs text-orange-500">{item.depot}</div>
      </div>

      {/* Action Status */}
      <div className="flex-shrink-0">
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
            item.actionStatus
          )}`}
        >
          {getStatusIcon(item.actionStatus)}
          {item.actionStatus}
        </span>
      </div>
    </div>
  );
};

// ==========================================
// Machine Detail Component
// ==========================================
type MachineDetailProps = {
  machine: Machine;
  onBack: () => void;
};

const MachineDetailView: React.FC<MachineDetailProps> = ({ machine, onBack }) => {
  const [activeTab, setActiveTab] = useState("stammdaten");

  const mainTabs = [
    { id: "stammdaten", label: "Stammdaten" },
    { id: "motordaten", label: "Motordaten" },
    { id: "technische", label: "Technische Daten" },
    { id: "schmierstoffe", label: "Schmierstoffe" },
    { id: "anbaugeraete", label: "Anbaugeräte" },
    { id: "wartung", label: "Wartungstabelle" },
    { id: "dokumentation", label: "Dokumentation" },
    { id: "zubehor", label: "Zubehör" },
    { id: "notizen", label: "Notizen" },
    { id: "files", label: null, icon: true },
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

        <button className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-nowrap">
          Dokument <ChevronDown size={16} className="inline-block ml-1" />
        </button>
      </div>

      {/* Title Section */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{machine.machineTitle}</h2>
            <div className="text-sm text-gray-600">
              Boels Nummer:{" "}
              <span className="text-orange-500 font-semibold">{machine.boelsNumber}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium">
              Vermietbereit !
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Tabs */}
      <div className="mb-6 -mx-4 sm:mx-0">
        <div className="overflow-x-auto px-4 sm:px-0">
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

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "stammdaten" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Machine Data */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Maschinendaten</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Boels Nummer:</span>
                  <span className="font-semibold">{machine.boelsNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seriennummer:</span>
                  <span className="font-semibold">{machine.serialNumber || "101695221907"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Baujahr:</span>
                  <span className="font-semibold">{machine.purchaseDate || "04.11.2019"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Intern 68 durchgeführt am:</span>
                  <span className="text-blue-600 font-semibold">
                    {machine.internalDepotDays || "26.09.2026"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technician Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4">Techniker Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Techniker:</span>
                  <span className="text-blue-600 font-semibold">{machine.technician}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Zweiter Techniker:</span>
                  <span className="text-blue-600 font-semibold">Helmut Hirschler</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "files" && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-gray-600 w-12">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">Dateianhang</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">Files</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">File Size</th>
                </tr>
              </thead>
              <tbody>
                {(machine.files || []).map((file) => (
                  <tr key={file.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-3 text-sm">{file.date}</td>
                    <td className="p-3">
                      <span className="text-sm">{file.name}</span>
                    </td>
                    <td className="p-3 text-sm">{file.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab !== "stammdaten" && activeTab !== "files" && (
          <div className="text-center py-10 text-gray-500">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon...
          </div>
        )}
      </div>

      {/* Zugeordnete Dokumente Section */}
      <div className="w-full mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Zugeordnete Dokumente</h3>
          <button className="text-orange-500 hover:text-orange-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded text-sm font-medium mb-4">
          Ersatzteile (3)
        </div>

        <div className="grid grid-cols-1 gap-3">
          {(machine.documents || []).map((doc) => (
            <div
              key={doc.id}
              className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:border-orange-300 bg-white"
            >
              <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <div className="font-semibold text-sm text-blue-600">{doc.number}</div>
                <div className="text-xs text-gray-600">{doc.name}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-medium text-gray-600">{doc.supplier}</div>
                <div className="text-xs text-blue-600">{doc.depot}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-green-600">{doc.listPrice}</div>
                <div className="text-xs text-red-600">{doc.purchasePrice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Main Overview Component
// ==========================================
const SparePartsOverview: React.FC = () => {
  const [selectedMachineId, setSelectedMachineId] = useState<string | null>(null);

  const allMachines: Machine[] = [
    {
      id: "1",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Service Telematics!",
      serialNumber: "101695221907",
      purchaseDate: "04.11.2019",
      internalDepotDays: "26.09.2026",
      files: [
        { id: "1", date: "12/27/2021 09:32 AM", name: "Stomerzeugter.jpg", size: "178 KB", icon: "image" },
        { id: "2", date: "04/09/2025 11:59 AM", name: "Pruefbericht.pdf", size: "519 KB", icon: "pdf" },
      ],
      documents: [
        {
          id: "1",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/image 7.png",
        },
        {
          id: "2",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/image 7.png",
        },
        {
          id: "3",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/image 7.png",
        },
      ],
    },
    {
      id: "2",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      serialNumber: "101695221908",
      purchaseDate: "05.11.2019",
      internalDepotDays: "27.09.2026",
      documents: [],
      files: [],
    },
    {
      id: "3",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      documents: [],
      files: [],
    },
    {
      id: "4",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "5",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "6",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "7",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      documents: [],
      files: [],
    },
    {
      id: "8",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Service Telematics!",
      documents: [],
      files: [],
    },
    {
      id: "9",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
  ];

  const selectedMachine = allMachines.find((m) => m.id === selectedMachineId);

  if (selectedMachine) {
    return (
      <div className="p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
        <MachineDetailView
          machine={selectedMachine}
          onBack={() => setSelectedMachineId(null)}
        />
      </div>
    );
  }

  return (
    <div className="p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
      <h2 className="text-[1.75rem] font-bold mb-6">Overview</h2>
      <hr className="border-gray-300 mb-6" />

      <div className="space-y-3">
        {allMachines.map((machine) => (
          <MachineCard
            key={machine.id}
            item={machine}
            onClick={() => setSelectedMachineId(machine.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SparePartsOverview;