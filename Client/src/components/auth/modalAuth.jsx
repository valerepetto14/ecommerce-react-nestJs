import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import googleIcon from '../../assets/google.png'
import Input from './input'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const ModalAuth = ({ isModalOpen, setIsModalOpen }) => {
    const [ registerIsOpen, setRegisterIsOpen ] = useState(false)

    const toggleRegister = () => {
        setRegisterIsOpen(!registerIsOpen)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
          <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="h-[550px] flex flex-col justify-evenly items-end max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all"> 
                        {
                            registerIsOpen ? (
                                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                                    <div className='w-full flex justify-start'>
                                        <BsFillArrowLeftCircleFill className='text-3xl cursor-pointer text-red-600' onClick={toggleRegister} />
                                    </div>
                                    <h1 className='w-full text-center text-4xl font-medium'>Register</h1>
                                    <form className=' w-full'>
                                        <Input
                                            placeholder='Email'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='First name'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='Last name'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='Number phone'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='Password' 
                                            type="text"
                                            name=""
                                            id="" 
                                        />
                                        <button className='mt-3 w-full h-12 rounded-3xl bg-red-600 text-white flex justify-evenly items-center shadow-lg'>
                                            Register
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                                    <h1 className='w-full text-center text-4xl font-medium'>Sign in</h1>
                                    <form className='h-1/3 w-full'>
                                        <Input
                                            placeholder='Email'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='Password' 
                                            type="text"
                                            name=""
                                            id="" 
                                        />
                                        <button className='mt-3 w-full h-12 rounded-3xl bg-red-600 text-white flex justify-evenly items-center shadow-lg'>
                                            Sign in
                                        </button>
                                    </form>
                                    <p className='w-full text-right text-sm cursor-pointer mt-2'>Forgot Password?</p>
                                    <h2 className='w-full text-center font-bold'>Or</h2>
                                    <button className='w-full h-12 rounded-3xl bg-red-600 text-white flex justify-center gap-2 items-center shadow-lg hover:shadow-2xl'>
                                        <img src={googleIcon} alt="" className='w-8' />
                                        Login with google
                                    </button>
                                    <button
                                        onClick={toggleRegister} 
                                        className='w-full h-12 rounded-3xl bg-red-600 text-white flex justify-center gap-2 items-center shadow-lg hover:shadow-2xl'>
                                        Register
                                    </button>
                                </div>
                            )
                        }
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
}

export default ModalAuth;