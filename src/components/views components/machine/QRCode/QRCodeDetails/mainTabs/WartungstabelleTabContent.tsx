const WartungstabelleTabContent = () => {
  const maintenanceData = [
    {
      material: "Motorölfilter",
      juraHifiPart: "SO 242",
      sfFilterNumber: "SP 4384",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
    {
      material: "Luftfilter außen",
      juraHifiPart: "SA 17088",
      sfFilterNumber: "SL 8390",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
    {
      material: "Luftfilter innen",
      juraHifiPart: "SA 17089",
      sfFilterNumber: "SL 8391",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
    {
      material: "Dieselfilter",
      juraHifiPart: "SN 904530",
      sfFilterNumber: "SK 3470",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
    {
      material: "Dieselfilter_Pumpe",
      juraHifiPart: "SN 30017",
      sfFilterNumber: "SK 3380/1",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
    {
      material: "Entlüftungsfilter",
      juraHifiPart: "SAO 5313",
      sfFilterNumber: "SOE 530",
      intervals: {
        100: "W",
        250: "W",
        500: "",
        1000: "W",
        1500: "W",
        2000: "W",
        2500: "W",
        3000: "W",
        3500: "W",
      },
      yearly: "W",
      manufacturerNumber: "",
    },
  ];

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="mb-4 p-3 flex flex-col sm:flex-row rounded border border-gray-100 justify-between items-start sm:items-center shadow">
        <p className="text-xs sm:text-sm flex-1 sm:mr-4 text-red-400">
          Wartungsvorgaben sind strengstens einzuhalten, Gerätewartung wird
          einmal jährlich oder bei Erreichen der Betriebsstunden durchgeführt.
          Jahresservice und §11 Überprüfung sind im Zeitraum von November–März
          durchzuführen.
        </p>

        <div className="mt-2 sm:mt-0 flex flex-col text-xs sm:text-sm text-left">
          <span>
            <span className="font-semibold text-green-600">W</span> = Wechseln
          </span>
          <span>
            <span className="font-semibold text-blue-600">K</span> =
            Kontrollieren
          </span>
          <span>
            <span className="font-semibold text-gray-700">E</span> = Einstellen
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-xs sm:text-sm bg-white border border-gray-50 rounded-md">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left p-3 font-semibold text-gray-900 whitespace-nowrap sticky left-0 bg-white z-10 border-r border-gray-200">
                Wartungsmaterial
              </th>
              <th className="text-left p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                Jura HiFi
                <br />
                Filtration
              </th>
              <th className="text-left p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                SF-Filter
                <br />
                GmbH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                100
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                250
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                500
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                1000
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                1500
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                2000
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                2500
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                3000
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                3500
                <br />
                BH
              </th>
              <th className="text-center p-3 font-semibold text-gray-900 whitespace-nowrap border-r border-gray-200">
                Jährlich
              </th>
              <th className="text-left p-3 font-semibold text-gray-900 whitespace-nowrap">
                Herstellernummer
              </th>
            </tr>
          </thead>
          <tbody>
            {maintenanceData.map((row, i) => (
              <tr
                key={i}
                className={`hover:bg-gray-50 transition-colors ${
                  i !== maintenanceData.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <td className="p-3 whitespace-nowrap left-0 bg-white font-medium relative">
                  {row.material}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 whitespace-nowrap relative">
                  {row.juraHifiPart}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-blue-600 whitespace-nowrap relative">
                  {row.sfFilterNumber}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[100]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[250]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[500]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[1000]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[1500]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[2000]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[2500]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[3000]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.intervals[3500]}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 text-center text-green-600 font-medium relative">
                  {row.yearly}
                  <div className="absolute right-0 top-2 bottom-2 w-px bg-gray-200"></div>
                </td>
                <td className="p-3 whitespace-nowrap">
                  {row.manufacturerNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WartungstabelleTabContent;
