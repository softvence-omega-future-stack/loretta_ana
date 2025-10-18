import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExpensesPage: React.FC = () => {
  const [boelsDepot, setBoelsDepot] = useState("");
  const [volltextsuche, setVolltextsuche] = useState("");
  const [searchType, setSearchType] = useState("einen der Begriffe");
  const [boelsNummerFrom, setBoelsNummerFrom] = useState("");
  const [boelsNummerTo, setBoelsNummerTo] = useState("");
  const [mvNummerFrom, setMvNummerFrom] = useState("");
  const [mvNummerTo, setMvNummerTo] = useState("");
  const [datumFrom, setDatumFrom] = useState("");
  const [datumTo, setDatumTo] = useState("");

  const handleSearch = () => {
    console.log("Search clicked");
    // Add search logic here
  };

  const handleReset = () => {
    setBoelsDepot("");
    setVolltextsuche("");
    setSearchType("einen der Begriffe");
    setBoelsNummerFrom("");
    setBoelsNummerTo("");
    setMvNummerFrom("");
    setMvNummerTo("");
    setDatumFrom("");
    setDatumTo("");
  };

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="bg-white rounded-lg shadow-sm p-6 ">
          <h1 className="text-2xl font-bold mb-8">Expenses</h1>

          <div className="space-y-6">
            {/* Row 1: Boels Depot and Volltextsuche */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Boels Depot */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Boels Depot:
                </label>
                <div className="relative">
                  <select
                    value={boelsDepot}
                    onChange={(e) => setBoelsDepot(e.target.value)}
                    className="w-full px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="">Choose One</option>
                    <option value="depot1">Depot 1</option>
                    <option value="depot2">Depot 2</option>
                    <option value="depot3">Depot 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Volltextsuche */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Volltextsuche:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={volltextsuche}
                    onChange={(e) => setVolltextsuche(e.target.value)}
                    placeholder="Choose or Type manually"
                    className="flex-1 px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <div className="relative">
                    <select
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                      className="px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer pr-10"
                    >
                      <option value="einen der Begriffe">einen der Begriffe</option>
                      <option value="alle Begriffe">alle Begriffe</option>
                      <option value="genauer Begriff">genauer Begriff</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Boels Nummer */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Boels Nummer:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={boelsNummerFrom}
                  onChange={(e) => setBoelsNummerFrom(e.target.value)}
                  placeholder="e.g 7521454"
                  className="flex-1 px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <span className="text-gray-600 font-medium">bis</span>
                <input
                  type="text"
                  value={boelsNummerTo}
                  onChange={(e) => setBoelsNummerTo(e.target.value)}
                  placeholder="e.g 7521454"
                  className="flex-1 px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 3: MV Nummer */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                MV Nummer:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={mvNummerFrom}
                  onChange={(e) => setMvNummerFrom(e.target.value)}
                  placeholder="e.g 7521454"
                  className="flex-1 px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <span className="text-gray-600 font-medium">bis</span>
                <input
                  type="text"
                  value={mvNummerTo}
                  onChange={(e) => setMvNummerTo(e.target.value)}
                  placeholder="e.g 7521454"
                  className="flex-1 px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 4: Datum */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Datum:
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="date"
                    value={datumFrom}
                    onChange={(e) => setDatumFrom(e.target.value)}
                    placeholder="Choose date"
                    className="w-full px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none" size={20} /> */}
                </div>
                <span className="text-gray-600 font-medium">bis</span>
                <div className="flex-1 relative">
                  <input
                    type="date"
                    value={datumTo}
                    onChange={(e) => setDatumTo(e.target.value)}
                    placeholder="Choose date"
                    className="w-full px-4 py-2.5 text-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  {/* <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 pointer-events-none" size={20} /> */}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={handleSearch}
                className="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Suchen
              </button>
              <button
                onClick={handleReset}
                className="px-8 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;