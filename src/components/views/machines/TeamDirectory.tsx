import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import TeamGrid from "../../views components/machine/Left/team/TeamGrid";
import { teamData } from "../../views components/machine/Left/team/teamData";

const Pagination = React.lazy(() => import("@/components/views components/machine/Pagination"));

const TeamDirectory: React.FC = () => {
  const globalSearchTerm = useSelector(
    (state: RootState) => state.search.term?.trim().toLowerCase() || ""
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  const filteredTeam = teamData.filter(
    (member) =>
      !globalSearchTerm ||
      member.name.toLowerCase().includes(globalSearchTerm) ||
      member.role.toLowerCase().includes(globalSearchTerm)
  );

  const totalPages = Math.ceil(filteredTeam.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMembers = filteredTeam.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [globalSearchTerm]);

  return (
    <div className="min-h-screen w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h1>
      <TeamGrid members={currentMembers} />
      {filteredTeam.length > 0 && totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Suspense fallback={<div>Loading pagination...</div>}>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default TeamDirectory;
