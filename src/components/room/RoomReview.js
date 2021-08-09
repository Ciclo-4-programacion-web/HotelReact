import Loading from 'components/layout/Loading';
import ReservationComponent from 'components/reservation/ButtonComponent';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import API from 'services/API';

export default class RoomReview extends Component {
    state = {
        habitacion: []
    }
    componentDidMount() {
        const { match } = this.props;
        API.get(`habitacion/room/${match.params.id}`)
            .then(res => {
                const habitacion = res.data;
                this.setState({ habitacion });
            })
    }
    render() {
        const user  = JSON.parse(localStorage.getItem("user"))
        return (
            this.state.habitacion.length === 0
                ? <Loading tam='h-screen' />
                : <>
                    <div className="min-w-screen bg-gray-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
                        <div className="w-full max-w-6xl rounded-lg bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                            <div className="md:flex items-center -mx-10">
                                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                    <div className="relative">
                                        <img src={this.state.habitacion.image} className="w-full relative z-10" alt="" />
                                        <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-10">
                                    <div className="mb-10">
                                        <h1 className="font-bold uppercase text-2xl mb-5">{this.state.habitacion.name} <br />{this.state.habitacion.type}</h1>
                                        <p className="text-sm">Piso {this.state.habitacion.ubication}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-block align-bottom mr-5">
                                            <span className="text-2xl leading-none align-baseline">$</span>
                                            <span className="font-bold text-5xl leading-none align-baseline">{this.state.habitacion.price}</span>
                                        </div>
                                        <div className="inline-block align-bottom">
                                            {user.name 
                                                ? 
                                                    <ReservationComponent id={this.state.habitacion._id} />
                                                : 
                                                    <Link to='/login' className="bg-blue-800 hover:opacity-70 text-white rounded-full px-10 py-2 font-semibold">
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
