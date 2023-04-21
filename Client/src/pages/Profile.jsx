import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import noProfile from "../assets/noProfile.png";
import ClipLoader from "react-spinners/ClipLoader";

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <ClipLoader color="#32a852" loading={true} size={150} />
            </div>
        );
    }
    return (
        <div className="h-screen w-full">
            <div className="w-full h-1/2 flex flex-col items-center justify-center">
                <img
                    className="lg:w-96 lg:h-96 w-44 h-44 rounded-full"
                    src={noProfile}
                />
                <span className="text-3xl mt-5">{user.firstname} {user.lastname}</span>
                <button className="mt-2 p-2 lg:px-32 px-20 rounded-md bg-green-600 text-white">
                    Edit profile
                </button>
            </div>
        </div>
    )
};

export default Profile;