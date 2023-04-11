import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";
import AuthContext from "./authContext";
import { LOGIN, VERIFY, LOGOUT } from "../types";
import axios from "axios";
import api from '../../api/config'

const AuthState = (props) => {
    const initialState = {
        user: null,
        isAuthenticated: false,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = (email, password, setIsModalOpen, setIsLoading, setError) => {
        api.post('/auth/login',
            {
                email: email,
                password: password
            }
        )
        .then((res) => {
            console.log(res)
            dispatch({
                type: LOGIN,
                payload: res.data.user,
            });
            setIsModalOpen(false)
        })
        .catch((err) => {
            console.log(err);
            setError(err.response.data.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    };

    const verify = (user) => {
        dispatch({
            type: VERIFY,
            payload: user,
        });
    }

    const logout = () => {
        dispatch({
            type: LOGOUT,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                login,
                verify,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
