import { XIcon } from '@heroicons/react/solid'
import { notification } from 'components/layout/NotifyComponent';
import React, { Component } from 'react'
import API from 'services/API';

export default class FormEditCrud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            tipo: "Gold",
            piso: 0,
            imagen: "",
            numero: 0,
            precio: 0,
        };
        this.onChange = this.onChange.bind(this)
    }
    changeNumber = () => {
        this.props.setAbrir(false)
    }
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };
    componentDidMount(){
        this.setState({
            nombre: this.props.room.room.name,
            tipo: this.props.room.room.type,
            piso: this.props.room.room.ubication,
            imagen: this.props.room.room.image,
            numero: this.props.room.room.room_number,
            precio: this.props.room.room.price,
        })
    }
    updateRoom = (e) => {
        e.preventDefault();
        const datos = {
            name: this.state.nombre,
            type: this.state.tipo,
            ubication: this.state.piso,
            image: this.state.imagen,
            room_number: this.state.numero,
            price: this.state.precio,
            state: this.props.room.room.state
        }
        const options = {
            headers: { token: localStorage.getItem("jwtToken") }
        };
        API.put(`habitacion/update/${this.props.room.room._id}`, datos, options)
        .then(res => {
            notification.success('La habitacion ha sido actualizada')
        })
        .catch(res => {
            notification.error('Error al editar la habitacion')
        })
        setTimeout(() => window.location.reload(), 2500);
    }
    render() {
        return (
            <div>
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Editar
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={this.changeNumber}
                                    >
                                        <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <XIcon />
                                        </span>
                                    </button>
                                </div>
                                <form className="w-full max-w-lg p-10" onSubmit={this.updateRoom}>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombre">
                                                Nombre
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nombre"
                                                value={this.state.nombre} onChange={this.onChange} type="text"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                                Tipo
                                            </label>
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tipo"
                                                value={this.state.tipo} onChange={this.onChange}>
                                                <option value='Gold'>Gold</option>
                                                <option value='Platinium'>Platinium</option>
                                                <option value='Diamond'>Diamond</option>
                                            </select>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="piso">
                                                Piso
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' id="piso"
                                                value={this.state.piso} onChange={this.onChange} required />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imagen">
                                                Imagen
                                            </label>
                                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="imagen"
                                                value={this.state.imagen} onChange={this.onChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-2">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="numero">
                                                Numero
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="numero" type="number"
                                                value={this.state.numero} onChange={this.onChange} required />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio">
                                                Precio
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="precio" type="number"
                                                value={this.state.precio} onChange={this.onChange} required />
                                        </div>

                                    </div>

                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={this.changeNumber}
                                        >
                                            Cerrar
                                        </button>
                                        <input
                                            className="bg-blue-900 text-white cursor-pointer font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                            value='Agregar'
                                        />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            </div>
        )
    }
}
