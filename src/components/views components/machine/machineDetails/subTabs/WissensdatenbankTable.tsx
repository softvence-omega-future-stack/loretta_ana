import { FileText } from "lucide-react";

const WissensdatenbankTable = () => (
  <div className="overflow-x-auto">
    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
      <div className="flex items-start gap-3">
        <FileText className="text-orange-600 mt-1 flex-shrink-0" size={20} />
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">Datum: 12.01.2024</p>
          <p className="text-sm text-gray-700 mb-2">
            <span className="text-blue-600">11607</span> Atlas Copco QAS60 Stromerzeuger 60 kVA
          </p>
          <p className="text-sm text-red-600 font-semibold">Motor springt nicht an !!</p>
          <p className="text-sm text-gray-700 mt-2">Bei Einsatzpumpe unbedingt Abstellmagnet kontrollieren !!!</p>
          <p className="text-sm text-blue-600 mt-2">maline</p>
        </div>
      </div>
    </div>
  </div>
);

export default WissensdatenbankTable;
