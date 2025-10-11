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

const MachineCard: React.FC<{ machine: Machine; onClick: () => void }> = ({
  machine,
  onClick,
}) => {
  const statusColors = {
    available: "bg-green-500",
    maintenance: "bg-yellow-500",
    rented: "bg-orange-500",
  };

  const statusLabels = {
    available: "Available",
    maintenance: "Maintenance",
    rented: "Rented Out",
  };

  return (
    <div
      onClick={onClick}
      className="bg-gray-200 rounded-lg border border-gray-200  shadow-sm hover:shadow-md transition-all cursor-pointer p-3 hover:border-[#FFA96E]"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Left Side - Image (1/5 width) */}
        <div className="w-full sm:w-1/6 flex-shrink-0 flex items-center justify-center bg-white p-4 rounded">
          <img 
            src={machine.image} 
            alt={machine.title}
            className="max-w-full max-h-full object-contain w-54 rounded"
          />
        </div>

        {/* Right Side - Content (4/5 width) */}
        <div className="flex-1 sm:w-4/5 min-w-0 space-y-6 bg-white p-4 rounded">
          {/* Top Section: Bezeichnung/Subgruppe (Left) + Status (Right) */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-700 mb-1">
                <span>Bezeichnung: </span>
                <span className="text-blue-600 font-medium">{machine.title}</span>
              </div>
              <div className="text-xs text-gray-700">
                <span>Subgruppe: </span>
                <span className="text-red-600 font-semibold">{machine.subgroup}</span>
              </div>
            </div>
            <span
              className={`${
                statusColors[machine.status]
              } text-white text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0`}
            >
              {statusLabels[machine.status]}
            </span>
          </div>
              <hr className="border-t border-gray-300" />
          {/* Bottom Section: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {/* Left Column: Boels Nr & Serien Nr */}
            <div className="space-y-1">
              <div className="text-gray-700">
                <span>Boels Nr: </span>
                <span className="text-red-600 font-semibold">{machine.boelsNr}</span>
              </div>
              <div className="text-gray-700">
                <span>Serien Nr: </span>
                <span className="text-blue-600 font-semibold">{machine.serienNr}</span>
              </div>
            </div>

            {/* Middle Column: Ext & Intern */}
            <div className="space-y-1">
              <div className="text-gray-700">
                <span>Ext. 67B-OVE E8701: </span>
                <span className="text-blue-600 font-medium">{machine.ext}</span>
              </div>
              <div className="text-gray-700">
                <span>Intern §11 gültig bis:</span>
                {machine.intern && <span className="ml-1">{machine.intern}</span>}
              </div>
            </div>

            {/* Right Column: Letz Rücknahme & Wichtig Inform */}
            <div className="space-y-1">
              <div className="text-gray-700">
                <span>Letz Rücknahme: </span>
                <span className="text-green-600 font-semibold">{machine.letzRuckname}</span>
              </div>
              <div className="text-gray-700">
                <span>Wichtig Inform: </span>
                <span className="text-red-600 font-semibold">{machine.wichtigInform}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MachineCard;
