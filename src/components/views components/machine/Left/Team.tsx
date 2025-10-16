import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Phone, MapPin } from "lucide-react";
const Pagination = React.lazy(() => import("@/components/views components/machine/Pagination"));


interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
  address?: string;
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Sero Mellnovic",
    role: "Serviceleiter Wiener Neudorf",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    phone: "+43 676 8890",
    address: "Laxenburgerstraße 50 2351-Wiener Neudorf",
  },
  {
    id: "2",
    name: "Lisa Berger",
    role: "Kundendienstleiterin",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    phone: "+43 676 2222 1111",
    address: "Kärntner Straße 12, 1010 Wien",
  },
  {
    id: "3",
    name: "Thomas Schmidt",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
    phone: "+43 676 3333 1111",
    address: "Mariahilfer Straße 45, 1150 Wien",
  },
  {
    id: "4",
    name: "Julia Klein",
    role: "Servicemanagerin",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop",
    phone: "+43 676 5555 1111",
    address: "Getreidemarkt 9, 1060 Wien",
  },
  {
    id: "5",
    name: "Daniel Weber",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f6f56?w=400&h=400&fit=crop",
    phone: "+43 676 6666 1111",
    address: "Donaufelder Straße 88, 1210 Wien",
  },
  {
    id: "6",
    name: "Maria Huber",
    role: "Teamassistenz",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    phone: "+43 676 7777 1111",
    address: "Landstraßer Hauptstraße 15, 1030 Wien",
  },
  {
    id: "7",
    name: "Lukas Mayer",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f6f56?w=400&h=400&fit=crop",
    phone: "+43 676 8888 1111",
    address: "Favoritenstraße 99, 1100 Wien",
  },
  {
    id: "8",
    name: "Nina Fischer",
    role: "Serviceberaterin",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop",
    phone: "+43 676 9999 1111",
    address: "Taborstraße 22, 1020 Wien",
  },
  {
    id: "9",
    name: "Peter Wagner",
    role: "Werkstattleiter",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=400&h=400&fit=crop",
    phone: "+43 676 1212 1111",
    address: "Simmeringer Hauptstraße 33, 1110 Wien",
  },
  {
    id: "21",
    name: "Sero Mellnovic",
    role: "Serviceleiter Wiener Neudorf",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    phone: "+43 676 8890",
    address: "Laxenburgerstraße 50 2351-Wiener Neudorf",
  },
  {
    id: "22",
    name: "Lisa Berger",
    role: "Kundendienstleiterin",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    phone: "+43 676 2222 1111",
    address: "Kärntner Straße 12, 1010 Wien",
  },
  {
    id: "23",
    name: "Thomas Schmidt",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
    phone: "+43 676 3333 1111",
    address: "Mariahilfer Straße 45, 1150 Wien",
  },
  {
    id: "24",
    name: "Julia Klein",
    role: "Servicemanagerin",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop",
    phone: "+43 676 5555 1111",
    address: "Getreidemarkt 9, 1060 Wien",
  },
  {
    id: "25",
    name: "Daniel Weber",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f6f56?w=400&h=400&fit=crop",
    phone: "+43 676 6666 1111",
    address: "Donaufelder Straße 88, 1210 Wien",
  },
  {
    id: "26",
    name: "Maria Huber",
    role: "Teamassistenz",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    phone: "+43 676 7777 1111",
    address: "Landstraßer Hauptstraße 15, 1030 Wien",
  },
  {
    id: "27",
    name: "Lukas Mayer",
    role: "Techniker",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f6f56?w=400&h=400&fit=crop",
    phone: "+43 676 8888 1111",
    address: "Favoritenstraße 99, 1100 Wien",
  },
  {
    id: "28",
    name: "Nina Fischer",
    role: "Serviceberaterin",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop",
    phone: "+43 676 9999 1111",
    address: "Taborstraße 22, 1020 Wien",
  },
  {
    id: "29",
    name: "Peter Wagner",
    role: "Werkstattleiter",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=400&h=400&fit=crop",
    phone: "+43 676 1212 1111",
    address: "Simmeringer Hauptstraße 33, 1110 Wien",
  },
  {
    id: "10",
    name: "Anna Leitner",
    role: "Empfangsmitarbeiterin",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    phone: "+43 676 3434 1111",
    address: "Praterstraße 44, 1020 Wien",
  },
  {
    id: "11",
    name: "Stefan Hofer",
    role: "Mechaniker",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    phone: "+43 676 5656 1111",
    address: "Ottakringer Straße 55, 1160 Wien",
  },
  {
    id: "12",
    name: "Katrin Bauer",
    role: "Backoffice Mitarbeiterin",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    phone: "+43 676 7878 1111",
    address: "Meidlinger Hauptstraße 12, 1120 Wien",
  },
];

const CardComponent: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-58"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 border-2 h-80 w-58 ${
          hover ? "border-orange-300 shadow-lg" : "border-transparent"
        }`}
      >
        <div
          className={`rounded-full bg-gray-200 overflow-hidden border-4 border-orange-200 flex-shrink-0 transition-all duration-300 ${
            hover ? "relative w-14 h-14 left-[-65px]" : "w-32 h-32"
          }`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3
          className={`font-bold text-gray-900 transition-all duration-300 mt-2 ${
            hover ? "text-xs text-left w-full" : "text-lg text-center"
          }`}
        >
          {member.name}
        </h3>

        <p
          className={`text-gray-600 transition-all duration-300 ${
            hover ? "text-xs text-left w-full mt-0.5" : "text-sm text-center mt-1"
          }`}
        >
          {member.role}
        </p>

        {hover && (
          <div className="w-full mt-3 pt-3 border-t border-gray-200 space-y-2 text-left">
            {member.phone && (
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-orange-500 flex-shrink-0" />
                <a
                  href={`tel:${member.phone}`}
                  className="text-blue-600 text-xs hover:underline truncate"
                >
                  {member.phone}
                </a>
              </div>
            )}

            {member.address && (
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-xs leading-tight">
                  {member.address}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TeamDirectory: React.FC = () => {
  const globalSearchTerm = useSelector((state: RootState) => state.search.term?.trim().toLowerCase() || "");
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
    setCurrentPage(1); // reset page when search changes
  }, [globalSearchTerm]);

  return (
    <div className="min-h-screen w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
        {currentMembers.map((member) => (
          <CardComponent key={member.id} member={member} />
        ))}

        {filteredTeam.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No team members found.
          </p>
        )}
      </div>

      {filteredTeam.length > 0 && totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default TeamDirectory;
