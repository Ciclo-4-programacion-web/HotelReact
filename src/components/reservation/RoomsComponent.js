import React, { Component } from 'react'
import Loading from 'components/layout/Loading';
import { Link } from 'react-router-dom';
import API from 'services/API'

export default class RoomsComponent extends Component {
    state = {
        habitacion: []
    }
    componentDidMount() {
        API.get(`habitacion/list`)
            .then(res => {
                const habitacion = res.data;
                const room = habitacion.filter(room => room.state === true)
                if (this.props.inicio) {
                    let room2 = []
                    if (room.length > 2) {
                        for (let i = 0; i < 3; i++) {
                            room2[i] = room[i]
                        }
                        this.setState({ habitacion: room2 });
                    } else {
                        this.setState({ habitacion: room });
                    }
                } else {
                    this.setState({ habitacion: room });
                }

            })
    }
    render() {
        return (
            this.state.habitacion.length === 0
                ? <Loading tam='h-screen' />
                : <>
                    <div className='flex items-center justify-center'>
                        <div className='holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                            {this.state.habitacion.map(room =>
                                <div className="wrapper antialiased text-gray-900 my-10 mx-5" key={room._id}>
                                    <div>

                                        <img src={room.image} alt="random imgee" className="object-cover object-center rounded-lg shadow-md h-80" width='420px' />

                                        <Link to={`/habitacion/${room._id}`}>
                                            <div className="relative px-4 -mt-16">
                                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                                    <div className="flex items-baseline">
                                                        <span className="bg-green-100 text-green-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                            Nuevo!
                                                        </span>
                                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                            {room.type}  &bull; {room.ubication}
                                                        </div>
                                                    </div>

                                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{room.name}</h4>

                                                    <div className="mt-1">
                                                        ${room.price}
                                                    </div>
                                                    <div className="mt-4">
                                                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </>
        )
    }
}