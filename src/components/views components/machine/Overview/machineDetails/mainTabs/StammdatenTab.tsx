import type { Machine } from "@/components/views components/machine/Overview/types";

const StammdatenTab = ({ machine }: { machine: Machine }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Image Section - Mobile Only */}
        <div className="w-full bg-white border border-gray-200 rounded p-3 sm:p-4 flex items-center justify-center lg:hidden">
          <img
            src={
              machine.image ||
              "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
            }
            alt={machine.title}
            className="w-full h-auto max-h-48 sm:max-h-60 object-contain"
          />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {/* Image Section - Desktop Only */}
          <div className="hidden lg:flex bg-white border border-gray-200 rounded p-4 items-center justify-center">
            <img
              src={
                machine.image ||
                "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
              }
              alt={machine.title}
              className="w-full h-auto max-h-60 object-contain"
            />
          </div>

          {/* Machine Details */}
          <div className="bg-white border border-gray-200 rounded p-3 sm:p-4 flex flex-col">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-600 mb-3 sm:mb-4 break-words">
              {machine.title}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Maschine Nummer:
                </span>
                <span className="font-semibold text-red-500 text-right">
                  {machine.boelsNr}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Seriennummer:</span>
                <span className="font-semibold text-right">
                  {machine.serienNr}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Subgruppe:</span>
                <span className="font-semibold text-green-600 text-right">
                  {machine.subgroup}
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Baujahr:</span>
                <span className="font-semibold text-right">31.03.2020</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Stundenzählerstand:
                </span>
                <span className="font-semibold text-blue-600 text-right">
                  6.594 Bh
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Elektro ÖVE gültig bis:
                </span>
                <span className="font-semibold text-green-600 text-right">
                  28.02.2026
                </span>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="bg-white border border-gray-200 rounded p-3 sm:p-4 flex flex-col">
            <span className="inline-block bg-green-500 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded mb-3 sm:mb-4 w-fit">
              Available
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
                  20.06.2025
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  bei Zählerstand:
                </span>
                <span className="font-semibold text-right break-words">
                  6594 / Robert Bocsa
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  Frostschutz geprüft am:
                </span>
                <span className="font-semibold text-right whitespace-nowrap">
                  13.12.2021 −38 °C
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">Saison:</span>
                <span className="font-semibold text-green-600 text-right">
                  2023/2024
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600 flex-shrink-0">
                  QR-Code Service:
                </span>
                <span className="font-semibold text-right">JA</span>
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
