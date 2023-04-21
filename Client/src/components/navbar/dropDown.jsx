import React, { useContext } from "react";
import { Link  } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import api from "../../api/config";

const DropDown = ({ toggleModal }) => {
    
    const { logout } = useContext(AuthContext)

    const toggleModalProfile = () => {
        toggleModal()
    }

    const logoutHandler = () => {
        api.get('/auth/logout')
        .then((res) => {
            console.log(res.data)
            logout()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="mr-3 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <Link
                    to='/profile' 
                    onClick={toggleModalProfile} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 hover:text-gray-900"
                    >
                        Profile
                </Link>
                <Link 
                    to='/'
                    onClick={logoutHandler}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 hover:text-gray-900" 
                    role="menuitem" 
                    tabIndex="-1" 
                    id="menu-item-1">
                        Logout
                </Link>
            </div>
        </div>
    )
}

export default DropDown;