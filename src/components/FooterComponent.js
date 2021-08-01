import React from 'react'
import logofooter from 'assets/logo_white_large.png'
import { PaperClipIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const FooterComponent = () => {
    return (
        <div>

            <footer className=" pt-10 || bg-blue-900">
                <div>
                    <Link to='/'>
                        <img src={logofooter} alt='logo-footer' className='w-40 mx-auto' />
                    </Link>

                </div>
                <div className="flex flex-wrap justify-center || max-w-6xl m-auto || text-gray-800 ">
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="mb-6 || text-base uppercase text-white font-bold">
                            Inicio
                        </div>

                        <a href="#3" className="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Dashboard
                        </a>
                        <a href="#3" className="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Team
                        </a>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="mb-6 || text-base uppercase text-white font-bold">
                            Información
                        </div>

                        <a href="#3" className="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            GitHub
                        </a>
                        <a href="#3" className="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            DevOps
                        </a>
                        <a href="#3" className="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Imaster
                        </a>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="mb-6 || text-base uppercase text-white font-bold">
                            Comunidad
                        </div>

                        <label className="block || mb-2 || text-white-700 text-sm font-bold  hidden" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@react.com" />
                    </div>
                </div>

                <div className="pt-2">
                    <div className="flex flex-col || max-w-6xl py-5 px-3 m-auto border-t border-gray-500 || text-white || md:flex-row">
                        <div className="mt-2">
                            HotelReact
                        </div>
                        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="https://github.com/Ciclo-4-programacion-web" target='_blank' rel='noreferrer' className="w-6 mx-1">
                                <PaperClipIcon />
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterComponent
