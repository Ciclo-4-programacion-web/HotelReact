import React from 'react'

const ServicesCard = ({ name, link, description, author, avatar }) => {
    return (
        <div className='mx-4'>
            <div className="max-w-2xl px-8 py-6 mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-2" src={avatar} alt="Avatar of Writer" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{author}</p>
                    </div>
                </div>
                <div className="mt-2">
                    <h2 href="#3" className="text-2xl font-bold text-gray-700">{name}</h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
                <div className="mt-4"><a href={link}
                    className="text-blue-500 text-center hover:underline">Leer mas</a>

                </div>

            </div>

        </div>
    )
}

export default ServicesCard
