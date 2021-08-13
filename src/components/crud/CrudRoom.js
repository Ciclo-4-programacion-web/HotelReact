import React, { Component } from 'react';
import { LightBulbIcon, TrashIcon } from '@heroicons/react/solid';
import Loading from 'components/layout/Loading';
import API from 'services/API';
import ButtonCrud from './ButtonCrud';
import { notification } from 'components/layout/NotifyComponent';
import EditCrud from './EditCrud';


class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            rol: '',
            abrir: false
        };
    }
    async componentDidMount() {
        const { rol } = JSON.parse(localStorage.getItem("user")) || ' '
        rol ? this.setState({ rol: rol[0].name }) : this.setState({ rol: null})
        
        await API.get('habitacion/list')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    async changeState(id, state) {
        const options = {
            headers: { token: localStorage.getItem("jwtToken") }
        };
        if (state) {
            await API.put(`habitacion/deactivate/${id}`, id, options)
                .then(res => notification.success('El estado ha sido cambiado'))
        } else {
            await API.put(`habitacion/activate/${id}`, id, options)
                .then(res => notification.success('El estado ha sido cambiado'))
        }
        setTimeout(() => window.location.reload(), 1500);

    }
    async deleteRoom(id) {
        const options = {
            headers: { token: localStorage.getItem("jwtToken") }
        };
        await API.delete(`habitacion/delete/${id}`, options)
            .then(res => notification.success('La habitacion ha sido eliminada'))
        setTimeout(() => window.location.reload(), 1500);
    }
    render() {
        return (
            this.state.todos.length === 0
                ? <Loading />
                :
                <div>
                    {this.state.rol === 'Admin' ? <ButtonCrud /> : ''}
                    <div className="flex flex-col">
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
                                                    Imagen
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Tipo
                                                </th>
                                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Piso
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Numero
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Precio
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
                                                                <div className="text-sm text-gray-500">Bogota</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <img className="w-12 h-10" src={room.image} alt={room.name} />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.type}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.ubication}</div>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            {room.room_number}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{room.price}</div>
                                                    </td>
                                                    <td className="px-2 py-4 whitespace-nowrap">
                                                        {this.state.rol === 'Admin'
                                                            ? <div className='flex'>
                                                                
                                                                <EditCrud room={room}/>
                                                                <button onClick={() => this.changeState(room._id, room.state)}>
                                                                    <LightBulbIcon className='w-6 h-6' color={room.state ? 'blue' : 'red'} />
                                                                </button>
                                                                <button onClick={() => this.deleteRoom(room._id)}>
                                                                    <TrashIcon color='red' className='w-6 h-6' />
                                                                </button>
                                                            </div>
                                                            : ''}

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
export default TodosList