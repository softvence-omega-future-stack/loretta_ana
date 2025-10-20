import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

// ✅ Lazy-loaded Pagination Component
const Pagination = lazy(() =>
  import("@/components/views components/machine/Pagination")
);

// ==========================================
// Types
// ==========================================
export type InventoryItem = {
  id: string;
  artikelnummer: string;
  name: string;
  kategorie: string;
  menge: string;
  mengeColor?: string;
  lieferant: string;
  lagerort: string;
  lieferantKurz: string;
  lagerortKurz: string;
  lagerplatz: string;
  nachbestellungen: string;
  image?: string;
};

// ==========================================
// Inventory Card Component
// ==========================================
type InventoryCardProps = {
  item: InventoryItem;
};

const InventoryCard: React.FC<InventoryCardProps> = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-orange-300">
      {/* Header with Icon and Stock */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-shrink-0">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <div
          className={`px-2 py-1 rounded text-sm font-bold ${
            item.mengeColor || "bg-green-100 text-green-700"
          }`}
        >
          {item.menge}
        </div>
      </div>

      {/* Article Number and Name */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-900">
          {item.artikelnummer}
        </div>
        <div className="text-xs text-gray-600">{item.name}</div>
      </div>

      {/* Lieferant and Lagerort */}
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-gray-600 mb-1">Lieferant:</div>
            <div className="text-blue-600 font-semibold">
              {item.lieferantKurz}
            </div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Lagerort:</div>
            <div className="text-blue-600 font-semibold">
              {item.lagerortKurz}
            </div>
          </div>
        </div>
      </div>

      {/* Lagerplatz and Nachbestellungen */}
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <div className="text-gray-600 mb-1">Lagerplatz:</div>
          <div className="text-gray-900 font-semibold">{item.lagerplatz}</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Nachbestellungen:</div>
          <div className="text-gray-900 font-semibold">
            {item.nachbestellungen}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Main Depot Inventory Page
// ==========================================
const Warehouse1061: React.FC = () => {
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const inventoryItems: InventoryItem[] = useMemo(
    () => [
      {
        id: "1",
        artikelnummer: "ASP 000602AG002",
        name: "Luftfilter (Kärcher)",
        kategorie: "Filter",
        menge: "14 Stks.",
        mengeColor: "bg-yellow-100 text-yellow-700",
        lieferant: "PA 86031",
        lagerort: "Depot 1061",
        lieferantKurz: "PA 86031",
        lagerortKurz: "Depot 1061",
        lagerplatz: "L - B - 6",
        nachbestellungen: "N/A",
      },
      {
        id: "2",
        artikelnummer: "BE 4011",
        name: "Luftfilter (Kärcher)",
        kategorie: "Filter",
        menge: "20 Stks.",
        lieferant: "PA 86031",
        lagerort: "Depot 1061",
        lieferantKurz: "PA 86031",
        lagerortKurz: "Depot 1061",
        lagerplatz: "L - B - 6",
        nachbestellungen: "N/A",
      },
      {
        id: "3",
        artikelnummer: "FT 6243",
        name: "Luftfilter (Kärcher)",
        kategorie: "Filter",
        menge: "9 Stk.",
        mengeColor: "bg-orange-100 text-orange-700",
        lieferant: "PA 86031",
        lagerort: "Depot 1061",
        lieferantKurz: "PA 86031",
        lagerortKurz: "Depot 1061",
        lagerplatz: "L - B - 6",
        nachbestellungen: "N/A",
      },
      {
      id: "4",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      mengeColor: "bg-orange-100 text-orange-700",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "5",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "6",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "7",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "8",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "9",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "10",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "11",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "12",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "13",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    {
      id: "14",
      artikelnummer: "ASP 000602AG002",
      name: "Luftfilter (Kärcher)",
      kategorie: "Filter",
      menge: "14 Stks.",
      lieferant: "PA 86031",
      lagerort: "Depot 1061",
      lieferantKurz: "PA 86031",
      lagerortKurz: "Depot 1061",
      lagerplatz: "L - B - 6",
      nachbestellungen: "N/A",
    },
    ],
    []
  );

  // 🔍 Filter using global search term
  const filteredItems = useMemo(() => {
    if (!searchTerm) return inventoryItems;
    return inventoryItems.filter((item) =>
      [
        item.artikelnummer,
        item.name,
        item.kategorie,
        item.lieferant,
        item.lagerort,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, inventoryItems]);

  // Reset pagination on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // 📄 Pagination Logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
      <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
        <h1 className="text-[1.75rem] font-bold mb-6">Depot 1061</h1>
        <hr className="border-gray-300 mb-6" />

        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-md">
              {currentItems.map((item) => (
                <InventoryCard key={item.id} item={item} />
              ))}
            </div>

            {filteredItems.length > 0 && (
              <div className="mt-6 w-full flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 py-10">
            No items found for “{searchTerm}”
          </p>
        )}
      </Suspense>
    </div>
  );
};

export default Warehouse1061;
