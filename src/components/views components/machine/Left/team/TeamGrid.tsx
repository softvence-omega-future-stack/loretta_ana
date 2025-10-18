import React from "react";
import TeamCard from "./TeamCard";
import type { TeamMember } from "./teamData";

interface Props {
  members: TeamMember[];
}

const TeamGrid: React.FC<Props> = ({ members }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
    {members.map((member) => (
      <TeamCard key={member.id} member={member} />
    ))}
    {members.length === 0 && (
      <p className="text-gray-500 col-span-full text-center">No team members found.</p>
    )}
  </div>
);

export default TeamGrid;
