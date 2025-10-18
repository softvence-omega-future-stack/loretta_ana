import React from "react";

interface ProtocolTabsProps {
  activeTab: string;
  onChange: (id: string) => void;
}

const tabs = [
  { id: "ausgabeprotokoll", label: "Ausgabeprotokoll" },
  { id: "files", label: "Files" },
];

const ProtocolTabs: React.FC<ProtocolTabsProps> = ({ activeTab, onChange }) => {
  return (
    <div className="mb-6 flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 text-sm rounded transition-colors flex items-center gap-2 ${
            activeTab === tab.id
              ? "bg-orange-100 text-orange-600 border border-orange-300"
              : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProtocolTabs;
