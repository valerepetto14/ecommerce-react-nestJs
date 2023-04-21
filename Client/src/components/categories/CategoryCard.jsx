import React from "react";

const CategoryCard = ({ title, fondo}) => {
    return (
        <div className="relative w-48 h-48 rounded-full flex flex-col items-center justify-center bg-green-600 shadow-md hover:shadow-2xl transition-shadow cursor-pointer">
            <img src={fondo} alt="" className="absolute top-0 right-0 w-full h-full rounded-full object-cover" />
            <div class="absolute top-0 left-0 w-full h-full rounded-full bg-black opacity-30"></div>
            <h1 className="z-40 text-2xl font-poppins font-bold">{title}</h1>
        </div>
    )
}

export default CategoryCard;