import React, { useRef } from "react";
import { Phone, MapPin } from "lucide-react";
import gsap from "gsap";
import type { TeamMember } from "./teamData";

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
  const tl = gsap.timeline();
  tl.to(cardRef.current, {
    borderColor: "#fdba74",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    duration: 0.3,
  })
    .to(
      imageRef.current,
      { width: 56, height: 56, x: -2, duration: 0.3 },
      "<"
    )
    .to(cardRef.current, { alignItems: "flex-start", duration: 0.2 }, "<") // 👈 move all content to left
    .to(nameRef.current, { textAlign: "left", duration: 0.2 }, "<")
    .to(roleRef.current, { textAlign: "left", fontSize: "0.75rem", duration: 0.2 }, "<")
    .to(detailsRef.current, { opacity: 1, height: "auto", duration: 0.3, ease: "power2.out" }, "<");
};

const handleLeave = () => {
  const tl = gsap.timeline();
  tl.to(cardRef.current, {
    borderColor: "transparent",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    duration: 0.3,
  })
    .to(imageRef.current, { width: 128, height: 128, x: 0, duration: 0.3 }, "<")
    .to(cardRef.current, { alignItems: "center", duration: 0.2 }, "<") // 👈 return to centered layout
    .to(nameRef.current, { textAlign: "center", duration: 0.2 }, "<")
    .to(roleRef.current, { textAlign: "center", fontSize: "0.875rem", duration: 0.2 }, "<")
    .to(detailsRef.current, { opacity: 0, height: 0, duration: 0.3, ease: "power2.in" }, "<");
};


  return (
    <div className="w-58" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div
  ref={cardRef}
  className="bg-white rounded-lg shadow-sm p-6 flex flex-col text-center border-2 h-70 w-58 transition-none"
  style={{ borderColor: "transparent", alignItems: "center" }}
>

        <div
          ref={imageRef}
          className="rounded-full bg-gray-200 overflow-hidden border-4 border-orange-200 flex-shrink-0 w-32 h-32"
        >
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>

        <h3 ref={nameRef} className="font-bold text-gray-900 text-lg mt-2">
          {member.name}
        </h3>

        <p ref={roleRef} className="text-gray-600 text-sm mt-1">
          {member.role}
        </p>

        <div ref={detailsRef} className="w-full mt-3 pt-3 border-t border-gray-200 space-y-2 text-left opacity-0 overflow-hidden h-0">
          {member.phone && (
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-orange-500 flex-shrink-0" />
              <a href={`tel:${member.phone}`} className="text-blue-600 text-xs hover:underline truncate">
                {member.phone}
              </a>
            </div>
          )}
          {member.address && (
            <div className="flex items-start gap-2">
              <MapPin size={12} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 text-xs leading-tight">{member.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
