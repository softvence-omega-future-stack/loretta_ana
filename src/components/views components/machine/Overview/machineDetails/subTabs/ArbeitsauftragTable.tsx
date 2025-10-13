const ArbeitsauftragTable = () => (
  <div className="w-full overflow-x-auto rounded">
    <table className="min-w-full text-xs lg:text-sm bg-white border border-gray-100 ">
      <thead className="border-b border-gray-200 bg-gray-50">
        <tr>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Date</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Maschine Nummer</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap min-w-[200px]">Description</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Kostenstelle</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">EFL/Intertext</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Reparaturstatus</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Abgerechnet</th>
          <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Summe</th>
        </tr>
      </thead>
      <tbody>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="p-3 whitespace-nowrap">11.03.2024</td>
              <td className="p-3 text-[#FF4842] whitespace-nowrap">116070462</td>
              <td className="p-3 text-[#015CD7] min-w-[200px]">
                Abdeckung beim Auspuff beschädigt
              </td>
              <td className="p-3 whitespace-nowrap">KD</td>
              <td className="p-3 text-[#015CD7] whitespace-nowrap">1.000,00 €</td>
              <td className="p-3 text-[#4CAF50] whitespace-nowrap">Abgeschlossen I</td>
              <td className="p-3 text-[#015CD7] whitespace-nowrap">Ja, MV</td>
              <td className="p-3 whitespace-nowrap">1.094,00 €</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default ArbeitsauftragTable;