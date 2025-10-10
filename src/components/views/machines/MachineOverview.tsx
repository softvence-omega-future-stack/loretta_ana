import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MachineCard from "@/components/views components/machine/MachineCard";
import Pagination from "@/components/views components/machine/Pagination";
import MachineDetail from "@/components/views components/machine/MachineDetail";
import type { Machine } from "@/components/views components/machine/types";

const MachineOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Demo data for machines
  const allMachines: Machine[] = Array(25)
    .fill(null)
    .map((_, i) => ({
      id: `${i + 1}`,
      image: "/image 7.png",
      title: `Atlas Copco QAS${50 + i} Stromerzeuger ${50 + i} kVA`,
      subgroup: `1160${i + 1}`,
      boelsNr: `11607${i + 1}85`,
      serienNr: `ESF403${i + 1}92`,
      ext: `67B-OvE E87${i + 1}: 09.01.2026`,
      intern: "",
      letzRuckname: `11607${i + 1}85`,
      wichtigInform: i % 5 === 0 ? "Beschädigt !" : "",
      status: ["available", "maintenance", "rented"][i % 3] as
        | "available"
        | "maintenance"
        | "rented",
    }));

  const totalPages = Math.ceil(allMachines.length / itemsPerPage);

  const getCurrentPageMachines = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allMachines.slice(startIndex, endIndex);
  };

  // Determine current view and selected machine based on URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/machines/machines-overview";
  const detailId =
    pathParts.length === 3 && pathParts[1] === "machines-overview"
      ? pathParts[2]
      : null;
  const selectedMachine = allMachines.find((m) => m.id === detailId);

  // Card click: navigate to detail page
  const handleCardClick = (machine: Machine) => {
    navigate(`/machines/machines-overview/${machine.id}`);
  };

  // Back button click: navigate to overview
  const handleBack = () => {
    navigate("/machines/machines-overview");
  };

  // Pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-h-screen flex flex-col relative">
      {isOverview ? (
        <>
          {/* Overview Cards */}
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

          {/* Pagination */}
          <div className="mt-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
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
