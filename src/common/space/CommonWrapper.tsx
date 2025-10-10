import { type ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode; // Type for children (can be any valid React node)
  className?: string; // Optional className prop
}

// Define the component
const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={` w-full max-w-[1400px] mx-auto my-auto py-4 md:py-6 px-4 md:px-6  ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
