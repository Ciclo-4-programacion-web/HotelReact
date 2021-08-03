import React, { Component } from 'react'
import axios from 'axios';
import Loading from 'components/layout/Loading';
import { Link } from 'react-router-dom';


export default class CardRoom extends Component {
    state = {
        habitacion: []
    }
    componentDidMount() {
        axios.get(`http://localhost:4000/api/habitacion/list`)
            .then(res => {
                const habitacion = res.data.slice(0, 3);
                const room = habitacion.filter(room => room.state === true )
                this.setState({ habitacion : room});
            })
    }
    render() {
        return (
            this.state.habitacion.length === 0
                ? <Loading />
                : <>
                    <div className='flex flex-row flex-wrap || my-10'>
                        {this.state.habitacion.map(room =>
                            <article className='mx-auto w-96' key={room._id}>
                                <Link to={`/habitacion/${room._id}`} className="block || c-card bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div className="relative || pb-48 overflow-hidden">
                                        <img className="absolute inset-0 || h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="mt-2 mb-2 || font-bold">{room.name}</h2>
                                        <p className="text-sm">{room.type}</p>
                                        <div className="flex items-center || mt-3">
                                            <span className="font-bold text-xl">{room.price}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center || p-4 || text-sm text-gray-600">
                                        <span className="ml-2">Bogotá</span>
                                    </div>
                                </Link>
                            </article>
                        )}
                    </div>
                    
                </>
        )
    }
}
