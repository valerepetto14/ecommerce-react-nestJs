import { LOGIN, VERIFY, LOGOUT } from "../types";

const AuthReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
            };
        case VERIFY:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
    }
};

export default AuthReducer;
