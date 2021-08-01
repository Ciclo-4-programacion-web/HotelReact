import RoomReview from 'components/home/CardRoom'
import ServicesCard from 'components/home/ServicesCard'
import React from 'react'

const Home = () => {
    return (
        <div>
            <div>
                <div className="bg-cover bg-center h-full text-white py-40 px-10 object-fill" style={{ backgroundImage: `url("https://media.tdc.travel/tdc_media/tmp/new/1476998887.1400.banner-hotel.jpg")` }}>
                    <div className="flex flex-col items-center" >
                        <p className="text-3xl font-bold">Hotel reservas</p>
                        <a href="#2" className="bg-blue-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-blue-500 hover:text-white">Servicios</a>
                    </div>
                </div>
                <div className='bottom-0 flex mx-auto my-10'>
                </div>
                <div className='flex flex-wrap justify-center my-10'>

                    <ServicesCard
                        name='Hotel React'
                        link='#4'
                        description='El HotelReact es un moderno y elegante hotel de 4 estrellas, asomado al mar, ideal para unas vacaciones románticas y de gran encanto, en el mágico escenario de Taormina y del Mar de Sicilia.'
                        author='Julian Montero'
                        avatar='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png'
                    />
                    <ServicesCard
                        name='Mejores Habitaciones!'
                        link='#4'
                        description='El HotelReact es un moderno y elegante hotel de 4 estrellas, asomado al mar, ideal para unas vacaciones románticas y de gran encanto, en el mágico escenario de Taormina y del Mar de Sicilia.'
                        author='Julian Montero'
                        avatar='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png' />
                </div>
                <RoomReview/>
                
            </div>
        </div>
    )
}
export default Home