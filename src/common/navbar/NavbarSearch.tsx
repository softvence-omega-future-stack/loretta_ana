import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { setSearchTerm } from "@/redux/slices/searchSlice";
import type { RootState } from "@/redux/store";

const NavbarSearch: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="bg-gray-700 w-full px-4 py-2 pr-10 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
    </div>
  );
};

export default NavbarSearch;
