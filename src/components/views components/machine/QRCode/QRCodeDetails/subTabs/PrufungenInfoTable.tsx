import { CalendarIcon } from "lucide-react";

const PrufungenInfoTable = () => {
  const data = [
    {
      boelsNumber: '11607',
      designation: 'Stromerzeuger 60kVA schallgedämpft',
      electroTest: 'Elektroprüfung gemäß ÖVE E 8701',
      oeeNumber: 'ÖVE E 8701 (extern)',
      external: 'Extern',
      electricalPower: 'Elektrofachkraft gemäß ÖVE E 8701 (TPG, TÜV-Süd,...)',
      escNumber: 'ESC-365',
      safetyCheck: 'Safety Check Electrical Inspection',
    },
  ];

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Boels-Nummer</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Bezeichnung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Elektroprüfung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">ÖVE Nr</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Extern</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Elektrofachkraft</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">ESC</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Safety Check</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <CalendarIcon size={16} className="text-green-600" />
                  </div>
                  <span className="text-green-600 font-medium">{row.boelsNumber}</span>
                </div>
              </td>
              <td className="p-3 text-blue-600 min-w-[200px]">{row.designation}</td>
              <td className="p-3 text-gray-700 min-w-[180px]">{row.electroTest}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.oeeNumber}</td>
              <td className="p-3 text-gray-700 whitespace-nowrap">{row.external}</td>
              <td className="p-3 text-gray-700 min-w-[250px]">{row.electricalPower}</td>
              <td className="p-3 text-green-600 whitespace-nowrap">{row.escNumber}</td>
              <td className="p-3 text-red-500 min-w-[200px]">{row.safetyCheck}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrufungenInfoTable;