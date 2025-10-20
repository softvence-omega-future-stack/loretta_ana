import { FileIcon } from "lucide-react";
import React from "react";
import type { InspectionProtocol } from "./types";

type ProtocolCardProps = {
  protocol: InspectionProtocol;
  onClick: () => void;
};

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-300 transition-all cursor-pointer bg-white mb-3"
    >
      {/* Calendar Icon & Date */}
      <div className="flex items-center gap-1 min-w-[80px]">
        <FileIcon size={18} className="text-gray-600" />
        <span className="text-sm font-semibold text-gray-900">{protocol.machineNummer}</span>
      </div>

      {/* Machine Title */}
      <div className="flex-1 text-center min-w-[120px]">
        <span className="text-sm font-semibold text-blue-600">{protocol.maschine}</span>
      </div>

      {/* DePrüft Date */}
      <div className="flex-1 text-center min-w-[100px]">
        <span className="text-sm text-gray-600">{protocol.deoPrüft}</span>
      </div>

      {/* Benutzer */}
      <div className="flex-1 text-center min-w-[120px]">
        <div className="text-sm font-semibold text-gray-900">{protocol.benutzer}</div>
        <div className="text-xs text-orange-500">{protocol.depot}</div>
      </div>

      {/* Status */}
      <div className="flex-1 text-center min-w-[100px]">
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
          {protocol.status}
        </span>
      </div>
    </div>
  );
};

export default ProtocolCard;
