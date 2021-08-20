import React, { Component } from 'react';
import Loading from 'components/layout/Loading';
import API from 'services/API';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { notification } from 'components/layout/NotifyComponent';


export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            rol: ''
        };
    }
    async componentDidMount() {
        const { rol, email } = JSON.parse(localStorage.getItem("user")) 
        if (rol) {
            this.setState({ rol: rol[0].name })
            if (rol[0].name === 'Admin') {
                const options = {
                    headers: { token: localStorage.getItem("jwtToken") }
                };
                await API.get('reservacion/list', options)
                    .then(response => {
                        this.setState({ todos: response.data });
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            } else {
                const options = {
                    headers: { token: localStorage.getItem("jwtToken") }
                };
                await API.get(`reservacion/list/${email}`, options)
                    .then(response => {
                        this.setState({ todos: response.data });
                        
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }

        } else {
            this.setState({ todos: [] });
        }
    }
    async deleteRoom(id, roomid) {
        const options = {
            headers: { token: localStorage.getItem("jwtToken") }
        };
        await API.delete(`reservacion/delete/${id}`, options)
        await API.put(`habitacion/activate/${roomid}`, roomid, options)
            .then(res => notification.success('La reservacion ha sido eliminada'))
        setTimeout(() => window.location.reload(), 2500);
    }
    render() {
        return (
            this.state.todos.length === 0
                ? <Loading />
                :
                <div>
                    <div className='py-5'>
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nombre
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Asunto
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Habitacion
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Inicio
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Fin
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Acciones
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {this.state.todos.map(room =>
                                                <tr key={room._id}>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {room.name}
                                                                </div>
                                                                <div className="text-sm text-gray-500">{room.email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.subject}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{room.habitacion.name}</div>
                                                        <div className="text-sm text-gray-900">{room.habitacion.room_number}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.start.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.end.toLocaleString()}</div>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <button className="text-white font-bold py-2 px-1 rounded-full" >
                                                            <PencilIcon color='blue' className='w-6 h-6' />
                                                        </button>
                                                        <button onClick={() => this.deleteRoom(room._id, room.habitacion._id)}>
                                                            <TrashIcon color='red' className='w-6 h-6' />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}