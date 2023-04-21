import React, { useState } from "react";

import banner from "../assets/banner.png";

import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import ProductList from "../components/products/productList";

const Home = () => {

    const [productsList, setProducts] = useState(products)
    const [ moreActive, setMoreActive ] = useState(false)

    const moreProducts = () => {
        setMoreActive(true)
        setProducts([
            ...productsList,
            {
                title: "Termo Standley",
                price: 100,
                img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
                ofert: 50,
            },
            {
                title: "Termo Standley",
                price: 100,
                img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
            },
            {
                title: "Termo Standley",
                price: 100,
                img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
            },
            {
                title: "Termo Standley",
                price: 100,
                img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
            },
            {
                title: "Termo Standley",
                price: 100,
                img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
            }
        ]
        )
    }

    const lessProducts = () => {
        setMoreActive(false)
        setProducts(products)
    }

    return (
        <div className="w-3/4 mt-24 mb-32 flex flex-col justify-center gap-10">
            <div className="relative">
                <img src={banner} alt="banner" className="w-full" />
                <div className="absolute top-88 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:-translate-y-2 transition-all shadow-lg font-thin">Shop Now</button>
                </div>
            </div>
            {/* <div className="px-10">
                <ViewCategories />
            </div> */}
            <div className="flex flex-col mt-20">
                <h1 className="text-3xl font-light border-b-2">Monthly highlights</h1>
                <ProductList 
                    data={productsList}
                    moreActive={moreActive}
                />
                {
                    moreActive ? 
                    <IoIosArrowDropupCircle
                        onClick={() => lessProducts()}
                        className="text-5xl rounded-full text-green-600 shadow-lg mx-auto mt-10 cursor-pointer"/>
                    :
                    <IoIosArrowDropdownCircle
                        onClick={() => moreProducts()}
                        className="text-5xl rounded-full text-green-600 shadow-lg mx-auto mt-10 cursor-pointer"/>
                }
                {/* <IoIosArrowDropdownCircle 
                    onClick={() => moreProducts()}
                    className="text-5xl rounded-full text-green-600 shadow-lg mx-auto mt-10 cursor-pointer"/> */}
            </div>
        </div>
    )
}

export default Home;

const products = [
    {
        title: "Termo Standley",
        price: 200,
        new: true,
        img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
    },
    {
        title: "Termo Standley",
        price: 120,
        new: true,
        img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
    },
    {
        title: "Termo Standley",
        price: 120,
        new: true,
        img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
    },
    {
        title: "Termo Standley",
        price: 120,
        new: true,
        img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
    },
    {
        title: "Termo Standley",
        price: 120,
        new: true,
        img: "https://disershop.com.uy/cache/aadiser/productos/SAD-ZE1762-08-550x550.jpg",
    }
];
