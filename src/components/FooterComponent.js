import React from 'react'
import logofooter from 'assets/logo_white_large.png'
import { PaperClipIcon } from '@heroicons/react/solid'

const FooterComponent = () => {
    return (
        <div>

            <footer class="sm:mt-10 pt-10 || bg-blue-900">
                <div>
                    <img src={logofooter} alt='logo-footer' className='w-40 mx-auto'></img>
                </div>
                <div class="flex flex-wrap justify-center || max-w-6xl m-auto || text-gray-800 ">
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div class="mb-6 || text-base uppercase text-white font-bold">
                            Inicio
                        </div>

                        <a href="#3" class="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Dashboard
                        </a>
                        <a href="#3" class="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Team
                        </a>
                    </div>

                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div class="mb-6 || text-base uppercase text-white font-bold">
                            Información
                        </div>

                        <a href="#3" class="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            GitHub
                        </a>
                        <a href="#3" class="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            DevOps
                        </a>
                        <a href="#3" class="block || my-3 || text-gray-300 hover:text-white text-sm font-medium || duration-300">
                            Imaster
                        </a>
                    </div>

                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div class="mb-6 || text-base uppercase text-white font-bold">
                            Comunidad
                        </div>

                        <label class="block || mb-2 || text-white-700 text-sm font-bold  hidden" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@react.com" />
                    </div>
                </div>

                <div class="pt-2">
                    <div class="flex flex-col || max-w-6xl py-5 px-3 m-auto border-t border-gray-500 || text-white || md:flex-row">
                        <div class="mt-2">
                            HotelReact
                        </div>
                        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="https://github.com/Ciclo-4-programacion-web" target='_blank' rel='noreferrer' class="w-6 mx-1">
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
