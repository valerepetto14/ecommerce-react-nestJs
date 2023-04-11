import React, { useReducer } from "react";
import ProductReducer from "./productReducer";
import { GET_PRODUCT, GET_PRODUCTS_OFERT, GET_PRODUCTS } from "../types";
import axios from "axios";
import api from '../../api/config'

const ProductState = (props) => {
    const initialState = {
        products: null,
        productSelected: null,
        productsOfert: null,
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = (limit, page) => {
        api.get(`/products?limit=${limit}&page=${page}`)
        .then( res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data.products,
            });
        })
        .catch( err => {
            console.log(err);
        })
    };

    const getProduct = (id) => {
        api.get(`/products/${id}`)
        .then( res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data.product,
            });
        })
        .catch( err => {
            console.log(err);
        })
    }

    const getProductsOfert = (limit, page) => {
        api.get(`/products/ofert?limit=${limit}&page=${page}`)
        .then( res => {
            dispatch({
                type: GET_PRODUCTS_OFERT,
                payload: res.data.products,
            });
        })
        .catch( err => {
            console.log(err);
        })
    }


    return (
        <AuthContext.Provider
            value={{
                products: state.products,
                productSelected: state.productSelected,
                productsOfert: state.productsOfert,
                getProducts,
                getProduct,
                getProductsOfert,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
