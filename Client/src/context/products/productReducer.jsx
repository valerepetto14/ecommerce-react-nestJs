import { GET_PRODUCT, GET_PRODUCTS_OFERT, GET_PRODUCTS } from "../types";

const ProductReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };
        case GET_PRODUCT:
            return {
                ...state,
                productSelected: payload,
            };
        case GET_PRODUCTS_OFERT:
            return {
                ...state,
                productsOfert: payload,
            }
    }
};

export default AuthReducer;
