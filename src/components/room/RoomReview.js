import axios from 'axios';
import Loading from 'components/layout/Loading';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RoomReview extends Component {
    state = {
        habitacion: []
    }
    componentDidMount() {
        const { match } = this.props;
        axios.get(`http://localhost:4000/api/habitacion/room/${match.params.id}`)
            .then(res => {
                const habitacion = res.data;
                this.setState({ habitacion });
            })
    }
    render() {
        const user  = localStorage.getItem("user")
        console.log(user.length)
        return (
            this.state.habitacion.length === 0
                ? <Loading tam='h-screen' />
                : <>
                    <div className="min-w-screen min-h-screen bg-blue-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                        <div className="w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                            <div className="md:flex items-center -mx-10">
                                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                    <div className="relative">
                                        <img src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" className="w-full relative z-10" alt="" />
                                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-10">
                                    <div className="mb-10">
                                        <h1 className="font-bold uppercase text-2xl mb-5">{this.state.habitacion.name} <br />{this.state.habitacion.type}</h1>
                                        <p className="text-sm">{this.state.habitacion.ubication}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-block align-bottom mr-5">
                                            <span className="text-2xl leading-none align-baseline">$</span>
                                            <span className="font-bold text-5xl leading-none align-baseline">{this.state.habitacion.price}</span>
                                        </div>
                                        <div className="inline-block align-bottom">
                                            {user.length > 2 
                                                ? 
                                                    <Link to='/hello' className="bg-blue-800 opacity-75 hover:opacity-100 text-white rounded-full px-10 py-2 font-semibold">
                                                        Reservar
                                                    </Link> 
                                                : 
                                                    <Link to='/login' className="bg-blue-800 opacity-75 hover:opacity-100 text-white rounded-full px-10 py-2 font-semibold">
                                                        Iniciar sesion
                                                    </Link>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

        )
    }
}
