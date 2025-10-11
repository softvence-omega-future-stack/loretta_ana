const ArbeitsauftragTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm bg-white rounded">
      <thead className="border-b border-gray-200">
        <tr>
          <th className="text-left p-3 font-medium text-gray-700">Date</th>
          <th className="text-left p-3 font-medium text-gray-700">Maschine Nummer</th>
          <th className="text-left p-3 font-medium text-gray-700">Description</th>
          <th className="text-left p-3 font-medium text-gray-700">Kostenstelle</th>
          <th className="text-left p-3 font-medium text-gray-700">EFL/Intertext</th>
          <th className="text-left p-3 font-medium text-gray-700">Reparaturstatus</th>
          <th className="text-left p-3 font-medium text-gray-700">Abgerechnet</th>
          <th className="text-left p-3 font-medium text-gray-700">Summe</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" hover:bg-gray-50">
          <td className="p-3">11.03.2024</td>
          <td className="p-3 text-[#FF4842]">116070462</td>
          <td className="p-3 text-[#015CD7]">Abdeckung beim Auspuff beschädigt</td>
          <td className="p-3">KD</td>
          <td className="p-3 text-[#015CD7]">1.000,00 €</td>
          <td className="p-3 text-[#4CAF50]">Abgeschlossen I</td>
          <td className="p-3 text-[#015CD7]">Ja, MV</td>
          <td className="p-3">1.094,00 €</td>
        </tr>
        <tr className=" hover:bg-gray-50">
          <td className="p-3">11.03.2024</td>
          <td className="p-3 text-[#FF4842]">116070462</td>
          <td className="p-3 text-[#015CD7]">Abdeckung beim Auspuff beschädigt</td>
          <td className="p-3">KD</td>
          <td className="p-3 text-[#015CD7]">1.000,00 €</td>
          <td className="p-3 text-[#4CAF50]">Abgeschlossen I</td>
          <td className="p-3 text-[#015CD7]">Ja, MV</td>
          <td className="p-3">1.094,00 €</td>
        </tr>
        <tr className=" hover:bg-gray-50">
          <td className="p-3">11.03.2024</td>
          <td className="p-3 text-[#FF4842]">116070462</td>
          <td className="p-3 text-[#015CD7]">Abdeckung beim Auspuff beschädigt</td>
          <td className="p-3">KD</td>
          <td className="p-3 text-[#015CD7]">1.000,00 €</td>
          <td className="p-3 text-[#4CAF50]">Abgeschlossen I</td>
          <td className="p-3 text-[#015CD7]">Ja, MV</td>
          <td className="p-3">1.094,00 €</td>
        </tr>
        <tr className=" hover:bg-gray-50">
          <td className="p-3">11.03.2024</td>
          <td className="p-3 text-[#FF4842]">116070462</td>
          <td className="p-3 text-[#015CD7]">Abdeckung beim Auspuff beschädigt</td>
          <td className="p-3">KD</td>
          <td className="p-3 text-[#015CD7]">1.000,00 €</td>
          <td className="p-3 text-[#4CAF50]">Abgeschlossen I</td>
          <td className="p-3 text-[#015CD7]">Ja, MV</td>
          <td className="p-3">1.094,00 €</td>
        </tr>
        <tr className=" hover:bg-gray-50">
          <td className="p-3">11.03.2024</td>
          <td className="p-3 text-[#FF4842]">116070462</td>
          <td className="p-3 text-[#015CD7]">Abdeckung beim Auspuff beschädigt</td>
          <td className="p-3">KD</td>
          <td className="p-3 text-[#015CD7]">1.000,00 €</td>
          <td className="p-3 text-[#4CAF50]">Abgeschlossen I</td>
          <td className="p-3 text-[#015CD7]">Ja, MV</td>
          <td className="p-3">1.094,00 €</td>
        </tr>
        
      </tbody>
    </table>
  </div>
);

export default ArbeitsauftragTable;