import React from 'react'
import { Link } from 'react-router-dom'


const AcessLink = (params) => {
    return (

        <div>
            <div>
                <Link to='/login' className="whitespace-nowrap text-base font-medium text-white hover:text-gray-100">
                    Inicia sesion
                </Link>
                <Link
                    to='/register'
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800"
                >
                    Registrate
                </Link>
            </div>
        </div>
    )
}

export default AcessLink