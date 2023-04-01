import React, { useState } from "react";
import Banner from "../assets/banner.avif";

const Home = () => {
    return (
        <div className="w-3/4 mt-10 flex flex-col justify-center gap-10 mb-20">
            <div className="relative">
                <img src={Banner} alt="banner" className="w-full" />
                <div className="absolute top-88 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-red-600 text-white px-5 py-2 rounded-md hover:-translate-y-2 transition-all shadow-lg font-thin">Shop Now</button>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-10">
                <div className="h-3/4 w-[250px] shadow-md relative hover:shadow-2xl transition-all">
                    <div className="p-2 h-12 w-12 text-center flex absolute top-2 right-2 rounded-full bg-red-600 text-white">
                        <h1 className="text-sm font-medium">50% off</h1>
                    </div>
                    <img src="https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg" alt="product" className="w-full h-2/3 object-cover rounded-t-lg" />
                    <div className="p-2 flex flex-col justify-start ml-3">
                        <h1 className="text-md font-medium">Termo Standley</h1>
                        <h1 className="font-medium text-gray-500">antes USD$120</h1>
                        <h1 className="text-3xl font-medium text-red-600">USD$60</h1>
                    </div>
                </div>
                <div className="h-3/4 w-[250px] shadow-md relative hover:shadow-2xl transition-all">
                    <div className="p-2 h-12 w-12 text-center flex absolute top-2 right-2 rounded-full bg-red-600 text-white">
                        <h1 className="text-sm font-medium">50% off</h1>
                    </div>
                    <img src="https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg" alt="product" className="w-full h-2/3 object-cover rounded-t-lg" />
                    <div className="p-2 flex flex-col justify-start ml-3">
                        <h1 className="text-md font-medium">Termo Standley</h1>
                        <h1 className="font-medium text-gray-500">antes USD$120</h1>
                        <h1 className="text-3xl font-medium text-red-600">USD$60</h1>
                    </div>
                </div>
                <div className="h-3/4 w-[250px] shadow-md relative hover:shadow-2xl transition-all">
                    <div className="p-2 h-12 w-12 text-center flex absolute top-2 right-2 rounded-full bg-red-600 text-white">
                        <h1 className="text-sm font-medium">50% off</h1>
                    </div>
                    <img src="https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg" alt="product" className="w-full h-2/3 object-cover rounded-t-lg" />
                    <div className="p-2 flex flex-col justify-start ml-3">
                        <h1 className="text-md font-medium">Termo Standley</h1>
                        <h1 className="font-medium text-gray-500">antes USD$120</h1>
                        <h1 className="text-3xl font-medium text-red-600">USD$60</h1>
                    </div>
                </div>
                <div className="h-3/4 w-[250px] shadow-md relative hover:shadow-2xl transition-all">
                    <div className="p-2 h-12 w-12 text-center flex absolute top-2 right-2 rounded-full bg-red-600 text-white">
                        <h1 className="text-sm font-medium">50% off</h1>
                    </div>
                    <img src="https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg" alt="product" className="w-full h-2/3 object-cover rounded-t-lg" />
                    <div className="p-2 flex flex-col justify-start ml-3">
                        <h1 className="text-md font-medium">Termo Standley</h1>
                        <h1 className="font-medium text-gray-500">antes USD$120</h1>
                        <h1 className="text-3xl font-medium text-red-600">USD$60</h1>
                    </div>
                </div>
                <div className="h-3/4 w-[250px] shadow-md relative hover:shadow-2xl transition-all">
                    <div className="p-2 h-12 w-12 text-center flex absolute top-2 right-2 rounded-full bg-red-600 text-white">
                        <h1 className="text-sm font-medium">50% off</h1>
                    </div>
                    <img src="https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg" alt="product" className="w-full h-2/3 object-cover rounded-t-lg" />
                    <div className="p-2 flex flex-col justify-start ml-3">
                        <h1 className="text-md font-medium">Termo Standley</h1>
                        <h1 className="font-medium text-gray-500">antes USD$120</h1>
                        <h1 className="text-3xl font-medium text-red-600">USD$60</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;