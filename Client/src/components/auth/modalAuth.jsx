import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, useContext } from 'react'
import googleIcon from '../../assets/google.png'
import Input from './input'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import AuthContext from '../../context/auth/authContext'

const ModalAuth = ({ isModalOpen, setIsModalOpen }) => {
    const [ registerIsOpen, setRegisterIsOpen ] = useState(false)
    const [ isLoading , setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const { login } = useContext(AuthContext);
    const formLogin = useRef(null)
    const formRegister = useRef(null)

    const toggleRegister = () => {
        setRegisterIsOpen(!registerIsOpen)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const loginHandler = (e) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)
        login(
            formLogin.current[0].value,
            formLogin.current[1].value,
            setIsModalOpen,
            setIsLoading,
            setError
        )
    }


    const register = (e) => {
      e.preventDefault()
      setError(null)
      setIsLoading(true)
      axios.post('http://localhost:3000/auth/register',
        {
          email: formRegister.current[0].value,
          firstname: formRegister.current[1].value,
          lastname: formRegister.current[2].value,
          numberPhone: formRegister.current[3].value,
          password: formRegister.current[4].value
        }
      )
      .then((res) => {
          console.log(res)
          setIsModalOpen(false)
      })
      .catch((err) => {
          console.log(err);
          setError(err.response.data.message[0])
      })
      .finally(() => {
          setIsLoading(false)
      })
  }

    return (
        <>
          <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                                <div className='w-full h-1/2 flex flex-col justify-evenly items-center'>
                                    <div className='w-full flex justify-start'>
                                        <BsFillArrowLeftCircleFill className='text-3xl cursor-pointer text-green-600' onClick={toggleRegister} />
                                    </div>
                                    <h1 className='mb-5 w-full text-center text-4xl font-medium'>Register</h1>
                                    <form ref={formRegister} onSubmit={register} className=' w-full'>
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
                                        <button
                                          type='submit'
                                          className='mt-3 w-full h-12 rounded-3xl bg-green-600 text-white flex justify-evenly items-center shadow-lg'>
                                            {
                                              isLoading ? (
                                                <ClipLoader color='#fff' size={20} />
                                              ) : (
                                                'register'
                                              )
                                            }
                                        </button>
                                        {
                                            error && (
                                              <div className='w-full flex justify-center mt-2 font-bold'>
                                                <h1>{error}</h1>
                                              </div>
                                            )
                                        }
                                    </form>
                                </div>
                            ) : (
                                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                                    <h1 className='w-full text-center text-4xl font-medium'>Sign in</h1>
                                    <form onSubmit={loginHandler} ref={formLogin} className='h-1/3 w-full'>
                                        <Input
                                            placeholder='Email'
                                            type="text"
                                            name="" 
                                            id="" 
                                        />
                                        <Input
                                            placeholder='Password' 
                                            type="password"
                                            name=""
                                            id="" 
                                        />
                                        <button 
                                          type='submit'
                                          className='mt-3 w-full h-12 rounded-3xl bg-green-600 text-white flex justify-evenly items-center shadow-lg'>
                                          Login
                                        </button>
                                    </form>
                                    <p className='w-full text-right text-sm cursor-pointer mt-2'>Forgot Password?</p>
                                    <h2 className='w-full text-center font-bold'>Or</h2>
                                    <button className='w-full h-12 rounded-3xl bg-green-600 text-white flex justify-center gap-2 items-center shadow-lg hover:shadow-2xl'>
                                        <img src={googleIcon} alt="" className='w-8' />
                                        Login with google
                                    </button>
                                    <button
                                        onClick={toggleRegister} 
                                        className='w-full h-12 rounded-3xl bg-green-600 text-white flex justify-center gap-2 items-center shadow-lg hover:shadow-2xl'>
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