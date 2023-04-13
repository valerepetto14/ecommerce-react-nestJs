import React from "react";
import CategoryCard from "./CategoryCard";

import Fit from "../../assets/fit.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Garden from "../../assets/garden.jpg";
import Clothes from "../../assets/clothes.avif";
import Shoes from "../../assets/shoes.jpg";
import Smartphones from "../../assets/smartphones.jpg";

const ViewCategories = () => {
    return (
        <div className="wfull flex flex-col justify-center items-center mt-20 overflow-hidden">
            {/* <h1>View Categories</h1> */}
            <div className="w-full flex flex-row justify-between text-white gap-5 overflow-auto">
                <CategoryCard 
                    title="Fitness"
                    fondo={Fit}
                />
                <CategoryCard 
                    title="Kitchen"
                    fondo={Kitchen}
                />
                <CategoryCard 
                    title="Garden"
                    fondo={Garden}
                />
                <CategoryCard 
                    title="Clothes"
                    fondo={Clothes}
                />
                <CategoryCard 
                    title="Shoes"
                    fondo={Shoes}
                />
                <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
                <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
                <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
                <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
                 <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
                 <CategoryCard 
                    title="Smartphones"
                    fondo={Smartphones}
                />
            </div>
        </div>
    )
}

export default ViewCategories;