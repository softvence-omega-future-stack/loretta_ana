import { Link } from "lucide-react";


export type QrCodeCardItem = {
  id: string;
  title: string;
  boelsNr: string;
  qrCode: string;
  protocol: string;
  status: "available" | "maintenance" | "rented";
};

type QrCodeCardProps = {
  item: QrCodeCardItem;
  onClick?: () => void;
};

const QrCodeCard = ({ item, onClick }: QrCodeCardProps) => {
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
      className="bg-gray-200 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer p-3 hover:border-[#FFA96E]"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Left Side - QR Code (1/6 width) */}
        <div className="w-full sm:w-1/6 flex-shrink-0 flex items-center justify-center bg-white p-4 rounded">
          <img
            src="/frame.jpg"
            alt="QR-Code"
            className="max-w-full max-h-full w-42 object-contain rounded"
          />
        </div>

        {/* Right Side - Content (5/6 width) */}
        <div className="flex-1 sm:w-5/6 min-w-0 space-y-6 bg-white p-4 rounded">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-md text-gray-700 mb-1 leading-relaxed">
                <span>Bezeichnung: </span>
                <span className="text-blue-600 font-medium">{item.title}</span>
              </div>
              <div className="text-md text-gray-700 leading-relaxed">
                <span>Boels Nummer: </span>
                <span className="text-red-600 font-semibold">{item.boelsNr}</span>
              </div>
            </div>

            <span
              className={`${statusColors[item.status]} text-white text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium flex-shrink-0`}
            >
              {statusLabels[item.status]}
            </span>
          </div>

          <hr className="border-t border-gray-300" />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-sm leading-relaxed">
            <div className="space-y-1 text-gray-700">
              <div>
                <span>QR-Code: </span>
                <span className="text-blue-600 font-semibold">{item.qrCode}</span>
              </div>
              <div>
                <span>Prüfprotokoll: </span>
                <span className="text-blue-600 font-semibold">{item.protocol}</span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button className="text-blue-600 hover:text-blue-700 ml-2">
                <Link size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCodeCard;