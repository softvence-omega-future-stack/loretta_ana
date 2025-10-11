import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import MachineCard from "@/components/views components/machine/MachineCard";
import Pagination from "@/components/views components/machine/Pagination";
import MachineDetail from "@/components/views components/machine/MachineDetail";
import type { Machine } from "@/components/views components/machine/types";

const MachineOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const allMachines: Machine[] = [
    {
      id: "1",
      image: "/image 7.png",
      title: "Atlas Copco QAS80 Stromerzeuger 80 kVA",
      subgroup: "116001",
      boelsNr: "1160785",
      serienNr: "ESF40392",
      ext: "67B-OvE E8701: 09.01.2026",
      intern: "",
      letzRuckname: "1160785",
      wichtigInform: "Beschädigt !",
      status: "maintenance",
    },
    {
      id: "2",
      image: "/image 7.png",
      title: "Caterpillar XQ100 Diesel Generator 100 kVA",
      subgroup: "116002",
      boelsNr: "1160786",
      serienNr: "CTP50783",
      ext: "67B-OvE E8702: 15.03.2026",
      intern: "",
      letzRuckname: "1160786",
      wichtigInform: "",
      status: "available",
    },
    {
      id: "3",
      image: "/image 7.png",
      title: "Doosan G70 Stromaggregat 70 kVA",
      subgroup: "116003",
      boelsNr: "1160787",
      serienNr: "DSN60194",
      ext: "67B-OvE E8703: 21.04.2026",
      intern: "",
      letzRuckname: "1160787",
      wichtigInform: "Wartung fällig",
      status: "rented",
    },
    {
      id: "4",
      image: "/image 7.png",
      title: "Honda EU65iS Benzin Generator 65 kVA",
      subgroup: "116004",
      boelsNr: "1160788",
      serienNr: "HND70825",
      ext: "67B-OvE E8704: 10.06.2026",
      intern: "",
      letzRuckname: "1160788",
      wichtigInform: "",
      status: "available",
    },
    {
      id: "5",
      image: "/image 7.png",
      title: "Bosch PowerGen BG90 Stromerzeuger 90 kVA",
      subgroup: "116005",
      boelsNr: "1160789",
      serienNr: "BSC80936",
      ext: "67B-OvE E8705: 27.07.2026",
      intern: "",
      letzRuckname: "1160789",
      wichtigInform: "Neue Batterie erforderlich",
      status: "maintenance",
    },
    {
      id: "6",
      image: "/image 7.png",
      title: "Yanmar YDG5500 Diesel Generator 55 kVA",
      subgroup: "116006",
      boelsNr: "1160790",
      serienNr: "YMR91247",
      ext: "67B-OvE E8706: 02.09.2026",
      intern: "",
      letzRuckname: "1160790",
      wichtigInform: "",
      status: "rented",
    },
    {
      id: "7",
      image: "/image 7.png",
      title: "Atlas Copco QAS100 Stromerzeuger 100 kVA",
      subgroup: "116007",
      boelsNr: "1160791",
      serienNr: "ACP10358",
      ext: "67B-OvE E8707: 18.10.2026",
      intern: "",
      letzRuckname: "1160791",
      wichtigInform: "Ölstand prüfen",
      status: "maintenance",
    },
    {
      id: "8",
      image: "/image 7.png",
      title: "Caterpillar XQ60 Diesel Generator 60 kVA",
      subgroup: "116008",
      boelsNr: "1160792",
      serienNr: "CTP20469",
      ext: "67B-OvE E8708: 05.11.2026",
      intern: "",
      letzRuckname: "1160792",
      wichtigInform: "",
      status: "available",
    },
    {
      id: "9",
      image: "/image 7.png",
      title: "Doosan G90 Stromaggregat 90 kVA",
      subgroup: "116009",
      boelsNr: "1160793",
      serienNr: "DSN30570",
      ext: "67B-OvE E8709: 22.12.2026",
      intern: "",
      letzRuckname: "1160793",
      wichtigInform: "Technische Prüfung ausstehend",
      status: "rented",
    },
    {
      id: "10",
      image: "/image 7.png",
      title: "Honda EP2500CX Benzin Generator 25 kVA",
      subgroup: "116010",
      boelsNr: "1160794",
      serienNr: "HND40681",
      ext: "67B-OvE E8710: 30.12.2026",
      intern: "",
      letzRuckname: "1160794",
      wichtigInform: "",
      status: "available",
    },
  ];

  // Filter by global search term
  const filteredMachines = allMachines.filter(
    (machine) =>
      machine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.boelsNr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      machine.serienNr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMachines.length / itemsPerPage);
  const getCurrentPageMachines = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMachines.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Determine current view and selected machine based on URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/machines/machines-overview";
  const detailId =
    pathParts.length === 3 && pathParts[1] === "machines-overview"
      ? pathParts[2]
      : null;
  const selectedMachine = allMachines.find((m) => m.id === detailId);

  const handleCardClick = (machine: Machine) => {
    navigate(`/machines/machines-overview/${machine.id}`);
  };

  const handleBack = () => {
    navigate("/machines/machines-overview");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-4 border bg-white border-gray-300 rounded-md">
      {isOverview ? (
        <>
          <h2 className="text-[1.75rem] font-bold mb-6">Overview</h2>
          <hr className="border-gray-300 mb-6" />
          
          <div className="flex flex-col w-full">
            {getCurrentPageMachines().map((machine, index) => (
              <React.Fragment key={machine.id}>
                <MachineCard
                  machine={machine}
                  onClick={() => handleCardClick(machine)}
                />
                
                {/* Horizontal line separator between cards */}
                {index < getCurrentPageMachines().length - 1 && (
                  <hr className="border-gray-300 my-4" />
                )}
              </React.Fragment>
            ))}

            {filteredMachines.length === 0 && (
              <p className="text-gray-500 text-center py-6">
                No machines found for "{searchTerm}"
              </p>
            )}
          </div>

          {filteredMachines.length > 0 && (
            <div className="mt-6 w-full flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : selectedMachine ? (
        <MachineDetail machine={selectedMachine} onBack={handleBack} />
      ) : (
        <p className="text-center mt-10 text-gray-500">Machine not found</p>
      )}
    </div>
  );
};

export default MachineOverview;