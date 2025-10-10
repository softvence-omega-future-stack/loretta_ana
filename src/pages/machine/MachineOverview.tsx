import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MachineCard from "@/components/views components/machine/MachineCard";
import Pagination from "@/components/views components/machine/Pagination";
import MachineDetail from "@/components/views components/machine/MachineDetail";
import type { Machine } from "@/components/views components/machine/types";

const MachineOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentView, setCurrentView] = useState<"overview" | "detail">("overview");
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

 const allMachines: Machine[] = React.useMemo(
  () => [
    {
      id: "1",
      image: "/image 7.png",
      title: "Atlas Copco QAS60 Stromerzeuger 60 kVA",
      subgroup: "11607",
      boelsNr: "116070485",
      serienNr: "ESF403192",
      ext: "67B-OvE E8701: 09.01.2026",
      intern: "31.12.2025",
      letzRuckname: "Boels Depot 301",
      wichtigInform: "Batterie prüfen!",
      status: "available",
    },
    {
      id: "2",
      image: "/image 7.png",
      title: "Hitachi ZX130LCN-6 Bagger",
      subgroup: "21012",
      boelsNr: "210120341",
      serienNr: "HZR301285",
      ext: "ÖVE 8701 geprüft am 04.03.2025",
      intern: "01.06.2025",
      letzRuckname: "Hamburg Yard",
      wichtigInform: "Ketten verschlissen!",
      status: "maintenance",
    },
    {
      id: "3",
      image: "/image 7.png",
      title: "Bosch GBH 8-45 DV Bohrhammer",
      subgroup: "52007",
      boelsNr: "520071003",
      serienNr: "BGH457291",
      ext: "CE-Check 02.2026",
      intern: "",
      letzRuckname: "Berlin Center",
      wichtigInform: "OK",
      status: "available",
    },
    {
      id: "4",
      image: "/image 7.png",
      title: "JCB 540-140 Teleskoplader",
      subgroup: "34008",
      boelsNr: "340081254",
      serienNr: "JCB540T14",
      ext: "67B-OvE geprüft bis 09.2025",
      intern: "15.05.2025",
      letzRuckname: "Depot 112",
      wichtigInform: "Hydraulik undicht!",
      status: "rented",
    },
    {
      id: "5",
      image: "/image 7.png",
      title: "Makita DHR400 Akku-Bohrhammer",
      subgroup: "52015",
      boelsNr: "520150244",
      serienNr: "MAK202558",
      ext: "CE bis 12.2026",
      intern: "15.11.2025",
      letzRuckname: "Depot 445",
      wichtigInform: "Leicht beschädigt",
      status: "maintenance",
    },
    {
      id: "6",
      image: "/image 7.png",
      title: "Caterpillar 308E2 Bagger",
      subgroup: "21005",
      boelsNr: "210050789",
      serienNr: "CAT308E2-9104",
      ext: "ÖVE 8701 bis 03.2026",
      intern: "15.03.2026",
      letzRuckname: "Depot 502",
      wichtigInform: "Filterwechsel nötig",
      status: "available",
    },
    {
      id: "7",
      image: "/image 7.png",
      title: "Wacker Neuson DPU6555 Vibrationsplatte",
      subgroup: "43006",
      boelsNr: "430060122",
      serienNr: "WACK6555",
      ext: "CE gültig bis 11.2025",
      intern: "11.11.2025",
      letzRuckname: "Depot 120",
      wichtigInform: "Service fällig",
      status: "rented",
    },
    {
      id: "8",
      image: "/image 7.png",
      title: "Hilti TE 2000-AVR Abbruchhammer",
      subgroup: "52011",
      boelsNr: "520110312",
      serienNr: "HILT2000",
      ext: "CE bis 08.2025",
      intern: "10.07.2025",
      letzRuckname: "Depot 250",
      wichtigInform: "In gutem Zustand",
      status: "available",
    },
    {
      id: "9",
      image: "/image 7.png",
      title: "Kubota KX019-4 Minibagger",
      subgroup: "21003",
      boelsNr: "210030078",
      serienNr: "KUB019-1547",
      ext: "ÖVE geprüft 03.2026",
      intern: "02.01.2026",
      letzRuckname: "Depot 401",
      wichtigInform: "Tankdeckel defekt",
      status: "maintenance",
    },
    {
      id: "10",
      image: "/image 7.png",
      title: "Atlas Copco XAS 88 Kompressor",
      subgroup: "11609",
      boelsNr: "116090211",
      serienNr: "ACXAS8804",
      ext: "67B-OvE 09.2026",
      intern: "",
      letzRuckname: "Depot 303",
      wichtigInform: "OK",
      status: "rented",
    },
  ],
  []
);


  const totalPages = Math.ceil(allMachines.length / itemsPerPage);

  const getCurrentPageMachines = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allMachines.slice(startIndex, endIndex);
  };

  // 👉 When clicking a card
  const handleCardClick = (machine: Machine) => {
    setSelectedMachine(machine);
    setCurrentView("detail");
    navigate(`/machines/overview/${machine.id}`); // route change
  };

  // 👉 When clicking back
  const handleBack = () => {
    setCurrentView("overview");
    setSelectedMachine(null);
    navigate(-1); // Go back to previous page
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Sync view with URL
  useEffect(() => {
    if (location.pathname === "/machines-overview") {
      setCurrentView("overview");
      setSelectedMachine(null);
    } else if (location.pathname.startsWith("/machines/overview/")) {
      const id = location.pathname.split("/").pop();
      const found = allMachines.find((m) => m.id === id);
      if (found) {
        setSelectedMachine(found);
        setCurrentView("detail");
      }
    }
  }, [location.pathname, allMachines]);

  return (
    <div className="max-h-screen flex flex-col relative">
      {currentView === "overview" ? (
        <>
          {/* Cards Section */}
          <div className="flex-1 mb-6">
            <h2 className="text-[1.75rem] font-bold mb-4">Overview</h2>

            <div className="grid grid-cols-1 gap-2">
              {getCurrentPageMachines().map((machine) => (
                <MachineCard
                  key={machine.id}
                  machine={machine}
                  onClick={() => handleCardClick(machine)}
                />
              ))}
            </div>
          </div>

          {/* Pagination at bottom */}
          <div className="mt-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        selectedMachine && (
          <MachineDetail machine={selectedMachine} onBack={handleBack} />
        )
      )}
    </div>
  );
};

export default MachineOverview;
