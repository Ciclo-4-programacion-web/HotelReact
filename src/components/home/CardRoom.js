import React, { Component } from 'react'
import Loading from 'components/layout/Loading';
import { Link } from 'react-router-dom';
import API from 'services/API';


export default class CardRoom extends Component {
    state = {
        habitacion: []
    }
    async componentDidMount() {
        await API.get(`habitacion/list`)
            .then(res => {
                const habitacion = res.data;
                const room = habitacion.filter(room => room.state === true )
                let room2 = []
                for (let i = 0; i < 3; i++) {
                    room2[i] = room[i]
                }
                this.setState({ habitacion : room2});
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
                                        <img className="absolute inset-0 || h-full w-full object-cover" src={room.image} alt="" />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="mt-2 mb-2 || font-bold">{room.name}</h2>
                                        <p className="text-sm">{room.type}</p>
                                        <div className="flex items-center || mt-3">
                                            <span className="font-bold text-xl">${room.price}</span>
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
