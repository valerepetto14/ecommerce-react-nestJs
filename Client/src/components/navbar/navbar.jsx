import React, { useState, useContext, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import { HiShoppingBag } from 'react-icons/hi';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';


import DropDown from './dropDown';
import ModalAuth from '../auth/modalAuth';
import AuthContext from "../../context/auth/authContext";
import noProfile from '../../assets/noProfile.png'
import api from '../../api/config'
import SearchInput from '../SearchInput';

const Navbar = () => {

    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const [ isModalOpcionesOpen, setIsModalOpcionesOpen ] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [ isModalAuthOpen , setIsModalAuthOpen ] = useState(false);
    const [ isModalProfileOpen , setIsModalProfileOpen ] = useState(true);

    const navigate = useNavigate();


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

    
    const toggleModalOpciones = () => {
        setIsModalOpcionesOpen(!isModalOpcionesOpen)
    }

    const toggleModalAuth = () => {
        setIsModalAuthOpen(!isModalAuthOpen)
    }

    const toggleModalProfile = () => {
        setIsModalProfileOpen(!isModalProfileOpen)
    }

    const logoutHandler = () => {
        api.get('/auth/logout')
        .then((res) => {
            navigate('/')
            logout()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setIsModalOpcionesOpen(false)
            setIsModalProfileOpen(false)
        })
    }

    console.log('user', user);

    return (
        <div className={`${ scroll ? 'fixed' : 'relative'} bg-white transition-colors z-50 h-20 w-full px-10 lg:px-2 flex justify-between lg:justify-evenly items-center font-medium text-lg`}>
                <div className='flex items-center'>
                    <HiShoppingBag 
                        onClick={() => navigate('/')}
                        className='text-5xl mr-2 text-green-600 cursor-pointer'
                    />
                    <h1 className='text-medium text-green-600 lg:text-2xl'>Ecommerce</h1>
                </div>
                <div className='sm:1/3 lg:w-1/3 lg:flex justify-evenly items-center hidden'>
                    <nav>
                        <ul className='flex text-sm'>
                            <Link
                                to='/' 
                                className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>
                                Home
                            </Link>
                            <Link 
                                className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>
                                Oferts
                            </Link>
                            <Link 
                                className='cursor-pointer lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-green-600'>
                                Contact
                            </Link>
                        </ul>
                    </nav>
                    <SearchInput />
                </div>
                <div className='flex items-center lg:gap-5'>
                    {
                        isAuthenticated ? (
                            <div className='hidden relative lg:inline-block text-left'>
                                <img 
                                    src={noProfile} 
                                    onClick={toggleModalProfile}
                                    className='hidden lg:block w-10 rounded-full mr-3 cursor-pointer' />
                                {
                                    isModalProfileOpen && (
                                        <DropDown 
                                            toggleModalProfile={toggleModalProfile}
                                        />
                                    )
                                }
                            </div>
                        ) : (
                            <button 
                                onClick={toggleModalAuth}
                                className='hidden lg:flex text-sm items-center gap-1'>
                                <AiOutlineUser className='text-2xl text-green-600'/>
                                Account
                            </button>
                        )

                    }
                    <div className='flex flex-col lg:flex-row items-center p-2 lg:gap-2 rounded-full transition-all'>
                        <BsCart2 className='text-3xl text-green-600' />
                    </div>
                    <div className='lg:hidden ml-3'>
                        {
                            isModalOpcionesOpen ? (
                                <IoMdClose
                                    className='text-3xl text-green-600'
                                    onClick={toggleModalOpciones}
                                />
                            ) : (
                                <MdMenu 
                                    className='text-3xl text-green-600'
                                    onClick={toggleModalOpciones}
                                />
                            )
                        }
                    </div>
                </div>
                {
                    isModalOpcionesOpen && (
                        <div className={`lg:hidden w-full h-screen pt-10 flex flex-col gap-20 items-center bg-white fixed ${ scroll ? 'top-20' : 'top-28' } left-0 `}>
                            <SearchInput />
                            <div className='w-full flex justify-center gap-5'>
                                <div className='flex flex-col items-center gap-20'>
                                    <span className='text-md'>Categories</span>
                                    <span className='text-md'>Oferts</span>
                                    <span className='text-md'>Contact</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col items-center justify-center gap-3'>
                                <div className='absolute bottom-40 w-full flex flex-col items-center gap-2'>
                                    {
                                        isAuthenticated ? (
                                            <div className='w-full flex flex-col items-center gap-5'>
                                                <img 
                                                    src={noProfile} 
                                                    className='w-10 rounded-full mr-3 cursor-pointer'
                                                />
                                                <span>{user.email}</span>

                                                <div className='w-full flex flex-col items-center gap-2'>
                                                    <button className='w-3/4 rounded-lg bg-green-600 text-white text-sm py-3'>
                                                        View profile
                                                    </button>
                                                    <button
                                                        onClick={logoutHandler} 
                                                        className='w-3/4 rounded-lg bg-green-600 text-white text-sm py-3'>
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={toggleModalAuth}
                                                className='flex text-md items-center gap-1'>
                                                <AiOutlineUser className='text-3xl text-green-600'/>
                                                Account
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>  
                    )
                }
                {
                    isModalAuthOpen && (
                            <ModalAuth isModalOpen={isModalAuthOpen} setIsModalOpen={setIsModalAuthOpen} />
   
                    )
                }
            </div>
    )
}


export default Navbar;
