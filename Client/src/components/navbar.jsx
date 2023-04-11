import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo.png';
import { HiShoppingBag } from 'react-icons/hi';
import { BsCart2 } from 'react-icons/bs';
import ModalAuth from './auth/modalAuth';
import AuthContext from "../context/auth/authContext";
import noProfile from '../assets/noProfile.png'
import api from '../api/config'

const Navbar = () => {
    const { isAuthenticated, verify, logout } = useContext(AuthContext);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [scroll, setScroll] = useState(false);


    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 0) {
          setScroll(true);
        } else {
          setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        api.get('/auth/verify')
        .then((res) => {
            console.log('verify', res.data.user)
            verify(res.data.user)
        })
        .catch((err) => {
            console.log(err)
            logout()
        })
    }, [isAuthenticated])
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const IsAuth = ( {isAuth, toggleModal, logout} ) => {
        const [ modalOpsProfileOpen, setModalOpsProfileOpen ] = useState(false);
        
        const toggleModalProfile = () => {
            setModalOpsProfileOpen(!modalOpsProfileOpen)
        }
    
        const logoutHandler = () => {
            api.get('/auth/logout')
            .then((res) => {
                logout()
            })
            .catch((err) => {
                console.log(err)
            })
        }

        const ModalOpsProfile = () => {
            return (
                <div className='z-50 absolute top-20 right-30 bg-white w-40 h-52 rounded-md shadow-lg'>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='w-10 h-10 rounded-full bg-red-600'></div>
                        <h1 className='text-lg font-medium mt-2 text-black'>Username</h1>
                        <button className='w-30 bg-red-600 text-white px-5 py-1 rounded-md mt-5 hover:-translate-y-2 transition-all shadow-lg'>Profile</button>
                        <button
                            onClick={() => {logoutHandler(), toggleModalProfile()}} 
                            className='w-30 bg-red-600 text-white px-5 py-1 rounded-md mt-5 hover:-translate-y-2 transition-all shadow-lg'>Logout</button>
                    </div>
                </div>
            )
        }
    
        return (
            <>
                {
                    isAuth && ( 
                        <img 
                            onClick={toggleModalProfile}
                            src={noProfile} 
                            className='w-10 rounded-full mr-3 cursor-pointer' />  
                    )
                }
                {
                    !isAuth && (
                        <button 
                            onClick={toggleModal}
                            className={`${scroll ? 'bg-white text-red-600' :'bg-red-600 text-white'} px-5 py-2 rounded-md hover:-translate-y-2 transition-all shadow-lg`}>
                            Login
                        </button>
                    )
                }
                {
                    modalOpsProfileOpen && <ModalOpsProfile />
                }
            </>
        )
    }
    
    return (
        <div className={`fixed ${scroll ? 'bg-red-600 opacity-95 text-white' : null } transition-colors z-50 h-16 w-full flex justify-evenly items-center font-medium text-lg`}>
            <div className='flex items-center'>
                {/* <img src={logo} alt="logo" className='sm:w-[90px] sm:h-[80px] lg:w-[120px] lg:h-[100px] cursor-pointer'/> */}
                <HiShoppingBag className={`text-5xl mr-2  ${scroll ? 'text-white' : 'text-red-600'}`}/>
                <h1 className={`text-medium ${scroll ? 'text-white' : 'text-red-600'} text-red-600 lg:text-2xl`}>Ecommerce</h1>
            </div>
            <nav>
                <ul className='flex lg:text-md'>
                    <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Home</li>
                    <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Shop</li>
                    <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Contact</li>
                </ul>
            </nav>
            <div className='flex items-center'>
                <div className={`p-2 ${scroll ? 'hover:bg-white hover:text-red-600' : 'hover:bg-red-600'} hover:text-white rounded-full mr-5 transition-all`}>
                    <BsCart2 className='text-2xl' />
                </div>
                <IsAuth isAuth={isAuthenticated} toggleModal={toggleModal} logout={logout} />
            </div>
            {
                isModalOpen && <ModalAuth isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            }
        </div>
    )
}


export default Navbar;