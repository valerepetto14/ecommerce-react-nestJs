import React from "react";
import Banner from "../assets/banner.avif";
import CardProduct from "../components/products/cardProducts";

const Home = () => {
    return (
        <div className="w-3/4 mt-24 mb-32 flex flex-col justify-center gap-10">
            <div className="relative">
                <img src={Banner} alt="banner" className="w-full" />
                <div className="absolute top-88 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:-translate-y-2 transition-all shadow-lg font-thin">Shop Now</button>
                </div>
            </div>
            <div className="w-full mt-20 flex flex-wrap justify-center gap-10">
                <CardProduct
                    title={"Termo Standley"}
                    price={200}
                    New={true}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                    category={"Termos"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    new={true}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
                <CardProduct
                    title={"Termo Standley"}
                    price={120}
                    ofert={50}
                    img={"https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg"}
                />
            </div>
        </div>
    )
}

export default Home;