import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

// ==========================================
// Types
// ==========================================
type ActionStatus = "Service Telematics!" | "Reparatur!" | "Check!";

type WorklogItem = {
  id: string;
  date: string;
  machineTitle: string;
  boelsNumber: string;
  wert: number;
  technician: string;
  depot: string;
  actionStatus: ActionStatus;
};

// ==========================================
// Machine Card Component
// ==========================================
type WorkLogCardProps = {
  item: WorklogItem;
  onClick: () => void;
};

const WorkLogCard: React.FC<WorkLogCardProps> = ({ item, onClick }) => {
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
      className="flex"
    >
      <div className="flex w-full border  hover:border-orange-400 hover:shadow-md transition-all cursor-pointer bg-white m-3 rounded-md">
        <div className="w-[60px] flex justify-center items-center p-4">
          <CheckCircle size={24} className="text-green-500" />
        </div>
        <div className="w-[80px] flex justify-center items-center p-4">
          <span className="text-sm text-gray-600">{item.date}</span>
        </div>
        <div className="flex-1 flex flex-col justify-center p-4 min-w-0">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {item.machineTitle}
          </div>
          <div className="text-xs text-blue-600 truncate">
            {item.boelsNumber}
          </div>
        </div>
        <div className="w-[60px]justify-center items-center p-4 text-right hidden lg:flex">
          <span className="text-sm text-blue-600 font-medium">
            {item.wert.toFixed(1)}
          </span>
        </div>
        <div className="w-[160px] hidden lg:flex flex-col justify-center items-center p-4">
          <div className="text-sm font-semibold text-gray-900 truncate">
            {item.technician}
          </div>
          <div className="text-xs text-orange-500 truncate">{item.depot}</div>
        </div>
        <div className="w-[160px] flex justify-center items-center p-4">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium ${getStatusColor(
              item.actionStatus
            )}`}
          >
            {getStatusIcon(item.actionStatus)}
            {item.actionStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkLogCard;
