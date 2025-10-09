import React from "react";

interface Machine {
  id: string;
  image: string;
  title: string;
  subgroup: string;
  boelsNr: string;
  serienNr: string;
  ext: string;
  intern: string;
  letzRuckname: string;
  wichtigInform: string;
  status: "available" | "maintenance" | "rented";
}

interface MachineCardProps {
  machine: Machine;
  onClick: () => void;
}

const MachineCard: React.FC<MachineCardProps> = ({ machine, onClick }) => {
  const statusColors = {
    available: "bg-green-400",
    maintenance: "bg-red-400",
    rented: "bg-orange-400",
  };

  const statusLabels = {
    available: "Available",
    maintenance: "Maintenance",
    rented: "Rented Out",
  };

  return (
    <div
      onClick={onClick}
      className="hover:shadow-lg transition-shadow cursor-pointer p-4 rounded-xl border border-gray-200 bg-[#F4F6F8] shadow-xs hover:border-[#FFA96E]"
    >
      <div className="flex gap-4">
        <div className="w-32 h-32 bg-orange-500 rounded flex-shrink-0"></div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-700 mb-1">
                Bezeichnung:{" "}
                <span className="text-blue-600 font-medium">
                  {machine.title}
                </span>
              </p>
              <p className="text-xs text-gray-700">
                Subgruppe:{" "}
                <span className="text-red-500 font-medium">
                  {machine.subgroup}
                </span>
              </p>
            </div>
            <span
              className={`${
                statusColors[machine.status]
              } text-white text-xs px-2.5 py-1 rounded whitespace-nowrap`}
            >
              {statusLabels[machine.status]}
            </span>
          </div>

          <div className="space-y-1 text-xs mb-2">
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-gray-700">
                Boels Nr:{" "}
                <span className="text-red-500 font-medium">
                  {machine.boelsNr}
                </span>
              </p>
              <p className="text-gray-700">Ext: {machine.ext}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <p className="text-gray-700">
                Serien Nr:{" "}
                <span className="text-blue-600 font-medium">
                  {machine.serienNr}
                </span>
              </p>
              <p className="text-gray-700">Intern §11 gültig bis:</p>
            </div>
          </div>

          <div className="text-xs space-y-1">
            <p className="text-gray-700">
              Letz Rücknahme:{" "}
              <span className="text-green-600 font-medium">
                {machine.letzRuckname}
              </span>
            </p>
            <p className="text-gray-700">
              Wichtig Inform:{" "}
              <span className="text-red-500 font-medium">
                {machine.wichtigInform}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineCard;
