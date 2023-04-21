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
        <div className="flex gap-10 text-white justify-center items-center mt-20">
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
                title="Kitchen"
                fondo={Kitchen}
            />
            <CategoryCard 
                title="Garden"
                fondo={Garden}
            />
            <CategoryCard 
                title="Garden"
                fondo={Garden}
            />
            <CategoryCard 
                title="Garden"
                fondo={Garden}
            />
        </div>
    )
}

export default ViewCategories;