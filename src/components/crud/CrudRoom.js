import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/outline';
import { LightBulbIcon } from '@heroicons/react/solid';
import Loading from 'components/layout/Loading';
import API from 'services/API';

const Todo = props => (
    <tr>
        <td className="px-4 py-4 whitespace-nowrap">
            <div className="flex items-center">
                <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                        {props.todo.name}
                    </div>
                    <div className="text-sm text-gray-500">Bogota</div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.type}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.ubication}</div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {props.todo.room_number}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.price}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.state}</div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap">
            <button className="text-white font-bold py-2 px-1 rounded-full">
                <Link to={"/edit/" + props.todo._id} >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <PencilIcon color='blue' />
                    </span>
                </Link>
            </button>
            <button className="text-white font-bold py-2 px-1 rounded-full">
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        <LightBulbIcon color={props.todo.state ? 'blue' : 'red'} />
                    </span>
            </button>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }
    async componentDidMount() {
        await API.get('habitacion/list')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    render() {
        return (
            this.state.todos.length === 0
            ? <Loading />
            :
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
                                            Estado
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {this.todoList()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}