import React from "react";

interface StammdatenTabProps {
  item: {
    title: string;
    status: "available" | "maintenance" | "rented";
    boelsNr: string;
    serienNr: string;
    letzterService: string;
    subgroup: string;
    zahlerstand: string;
    baujahr: string;
    frostschutz: string;
    stundenzahlerstand: string;
    saison: string;
    internGultig: string;
    qrCode: string;
  };
}

const StammdatenTab: React.FC<StammdatenTabProps> = ({ item }) => {
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
    <div className="w-full">
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Image Section - Mobile */}
        <div className="w-full bg-white border border-gray-200 rounded p-3 sm:p-4 flex items-center justify-center lg:hidden">
          <img
            src="/frame.jpg"
            alt={item.title}
            className="w-full h-auto max-h-48 sm:max-h-60 object-contain rounded"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {/* Image Section - Desktop */}
          <div className="hidden lg:flex bg-white border border-gray-200 rounded p-4 items-center justify-center">
            <img
              src="/frame.jpg"
              alt={item.title}
              className="w-full h-auto max-h-60 object-contain rounded"
            />
          </div>

          {/* Machine Details */}
          <div className="bg-white border border-gray-200 rounded p-3 sm:p-4 flex flex-col">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 mb-3 sm:mb-4 break-words">
              {item.title}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Maschine Nummer:
                </span>
                <span className="font-semibold text-red-500 text-right">
                  {item.boelsNr}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Seriennummer:
                </span>
                <span className="font-semibold text-right">
                  {item.serienNr}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Subgruppe:
                </span>
                <span className="font-semibold text-green-600 text-right">
                  {item.subgroup}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Baujahr:</span>
                <span className="font-semibold text-right">
                  {item.baujahr}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Stundenzählerstand:
                </span>
                <span className="font-semibold text-blue-600 text-right">
                  {item.stundenzahlerstand}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Intern §§11 gültig bis:
                </span>
                <span className="font-semibold text-green-600 text-right">
                  {item.internGultig}
                </span>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="bg-white border border-gray-200 rounded p-3 sm:p-4 flex flex-col">
            <span
              className={`${statusColors[item.status]} text-white text-xs sm:text-sm font-medium px-3 py-1 rounded mb-3 sm:mb-4 w-fit`}
            >
              {statusLabels[item.status]}
            </span>

            <h4 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
              General Information
            </h4>

            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Letztes Service am:
                </span>
                <span className="font-semibold text-blue-600 text-right">
                  {item.letzterService}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  bei Zählerstand:
                </span>
                <span className="font-semibold text-right break-words">
                  {item.zahlerstand}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Frostschutz geprüft am:
                </span>
                <span className="font-semibold text-right whitespace-nowrap">
                  {item.frostschutz}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Saison:</span>
                <span className="font-semibold text-green-600 text-right">
                  {item.saison}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  QR-Code Service:
                </span>
                <span className="font-semibold text-right">
                  {item.qrCode}
                </span>
              </div>
            </div>

            <p className="text-xs text-orange-500 mt-3 sm:mt-4">
              Powered by Boels-Technikweb ®
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StammdatenTab;
