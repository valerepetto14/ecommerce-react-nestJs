import React, { useState, useContext, useEffect } from 'react';
import logo from '../assets/logo.png';
import { HiShoppingBag } from 'react-icons/hi';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import ModalAuth from './auth/modalAuth';
import AuthContext from "../context/auth/authContext";
import noProfile from '../assets/noProfile.png'
import api from '../api/config'
import SearchInput from './SearchInput';

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
                            className='flex text-sm items-center gap-1'>
                            <AiOutlineUser className='text-2xl text-green-600'/>
                            Account
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
        <div className={`${ scroll ? 'fixed' : ''} bg-white transition-colors z-50 h-20 w-full flex justify-evenly items-center font-medium text-lg`}>
                <div className='flex items-center'>
                    <HiShoppingBag className='text-5xl mr-2 text-green-600'/>
                    <h1 className='text-medium text-green-600 lg:text-2xl'>Ecommerce</h1>
                </div>
                <nav>
                    <ul className='flex text-sm'>
                        <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>Categories</li>
                        <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>Shop</li>
                        <li className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>Contact</li>
                    </ul>
                </nav>
                <SearchInput />
                <div className='flex items-center gap-5'>
                    <IsAuth isAuth={isAuthenticated} toggleModal={toggleModal} logout={logout} />
                    <div className='flex items-center p-2 gap-2 rounded-full transition-all'>
                        <BsCart2 className='text-2xl text-green-600' />
                        <span className='text-sm'>Cart</span>
                    </div>
                </div>
                {
                    isModalOpen && <ModalAuth isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                }
            </div>
    )
}


export default Navbar;