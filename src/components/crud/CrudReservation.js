import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="text-sm text-gray-500">{props.todo.email}</div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.subject}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.habitacion.name}</div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {props.todo.habitacion.room_number}
            </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.start.toLocaleString()}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{props.todo.end.toLocaleString()}</div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap">
            <button className="text-white font-bold py-2 px-1 rounded-full">
                <Link to={"/edit/" + props.todo._id} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" color='blue' viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </Link>
            </button>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }
    componentDidMount() {
        const { rol } = JSON.parse(localStorage.getItem("user"))
        if (rol) {
            if (rol[0].name === 'Admin') {
                const options = {
                    headers: { token: localStorage.getItem("jwtToken") }
                };
                API.get('reservacion/list', options)
                    .then(response => {
                        this.setState({ todos: response.data });
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }else{
                const reserva = JSON.parse(localStorage.getItem("reserva"))
                this.setState({ todos: [reserva] });
            }

        } else {
            
            this.setState({ todos: [] });
        }
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
                                                    Piso
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Numero
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
                                            {this.todoList()}
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