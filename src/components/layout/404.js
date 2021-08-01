import React from 'react'
import { Link } from 'react-router-dom'
import photo404 from '../../assets/404.svg'

const NotFound = () => {
    return (
        <div>
            <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="mb-10 md:mb-20 text-gray-600 font-light">
                            <h1 className="font-black uppercase text-3xl lg:text-5xl text-blue-700 mb-10">404 :/</h1>
                            <p>Pagina no encontrada</p>
                            <p>¿Donde querías ir?</p>
                        </div>
                        <div className="mb-20 md:mb-0">
                            <Link to='/' className="py-2 px-5 rounded-full bg-blue-600 text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-white hover:bg-white hover: border hover:text-blue-600">Ven</Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                    <img src={photo404} alt='404' className='w-80 h-80' />

                    </div>
                    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                    <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-55 rounded-full pointer-events-none -rotate-45 transform"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
