import React from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

interface ProtocolHeaderProps {
  onBack: () => void;
}

const ProtocolHeader: React.FC<ProtocolHeaderProps> = ({ onBack }) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft size={20} />
        Back
      </button>

      <button className="border border-gray-300 rounded px-4 py-2 text-sm bg-white hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all flex items-center gap-2 text-nowrap">
        Dokument <ChevronDown size={16} />
      </button>
    </div>
  );
};

export default ProtocolHeader;
