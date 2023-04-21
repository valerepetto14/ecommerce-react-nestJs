import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
    return (
        <div className="relative">
            <input
                type="text"
                className="w-50 lg:w-80 h-10 bg-slate-200 text-sm rounded-full pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                placeholder="Search"
            />
            <div className="absolute top-2 left-2">
                <AiOutlineSearch className="text-gray-500 text-2xl" />
            </div>
        </div>
    )
}

export default SearchInput;