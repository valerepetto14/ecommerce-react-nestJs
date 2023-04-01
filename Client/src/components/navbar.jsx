import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FiUser } from 'react-icons/fi';
import { BsCart2 } from 'react-icons/bs';
import ModalAuth from './auth/modalAuth';

const Navbar = () => {
    
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <div className="h-30 w-3/4 flex justify-between items-center font-medium text-lg">
            <div className='flex items-center'>
                <img src={logo} alt="logo" className='sm:w-[90px] sm:h-[80px] lg:w-[120px] lg:h-[100px] cursor-pointer'/>
                <h1 className='text-medium text-red-600 lg:text-2xl'>Ecommerce</h1>
            </div>
            <nav>
                <ul className='flex lg:text-xl'>
                    <li className='lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Home</li>
                    <li className='lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Shop</li>
                    <li className='lg:mr-10 mr-4 hover:-translate-y-2 transition-all hover:border-b-2 hover:border-b-red-600'>Contact</li>
                </ul>
            </nav>
            <div className='flex items-center'>
                <FiUser className='text-2xl mr-3' />
                <div className='p-2 hover:bg-red-600 hover:text-white rounded-full mr-5 transition-all'>
                    <BsCart2 className='text-2xl' />
                </div>
                <button 
                    onClick={toggleModal}
                    className='bg-red-600 text-white px-5 py-2 rounded-md hover:-translate-y-2 transition-all shadow-lg'>
                    Login
                </button>
            </div>
            {
                isModalOpen && <ModalAuth isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            }
        </div>
    )
}

export default Navbar;