import React, { Component } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { withRouter } from 'react-router-dom';
import API from 'services/API';
import { notification } from 'components/layout/NotifyComponent';


class FormReservation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            asunto: " ",
            inicio: new Date("0000-00-00"),
            fin: new Date("0000-00-00")

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeInicio = this.handleChangeInicio.bind(this);
        this.handleChangeFin = this.handleChangeFin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        const user = await JSON.parse(localStorage.getItem("user"))
        this.setState({ user })
    }
    handleChange(event) {
        this.setState({ asunto: event.target.value });
    }
    handleChangeInicio(e) {
        this.setState( {inicio: e.target.value})
    }
    handleChangeFin(e) {
        this.setState( {fin: e.target.value})
    }
    changeNumber = () => {
        this.props.setNumber(false)
    }
    async handleSubmit(e) {
        e.preventDefault();
        const datos = {
            name: this.state.user.name,
            email: this.state.user.email,
            subject: this.state.asunto,
            habitacion: this.props.id,
            start: this.state.inicio,
            end: this.state.fin
        }
        const options = {
            headers: {token: localStorage.getItem("jwtToken") }
        };
        await API.post("reservacion/add", datos , options).then(res => {
            notification.success('Reservacion agregada!')
        })
        await API.put(`habitacion/deactivate/${this.props.id}`, this.props.id , options)
            .then(res => {
                console.log(res)
        })
        this.props.history.push('/')
        
    }
    render() {
        return (
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
                                    Reserva tu habitacion!
                                </h3>
                                <button
                                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={this.changeNumber}
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        <XIcon/>
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <form className="w-full max-w-lg p-10" onSubmit={this.handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Nombre
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={this.state.user.name} disabled />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" value={this.state.user.email} disabled />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="asunto">
                                            Asunto
                                        </label>
                                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="asunto" value={this.state.asunto} onChange={this.handleChange} ></textarea>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                            Habitacion
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" value={this.props.id} disabled />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inicio">
                                            Inicio
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inicio" type="date" required value={this.state.inicio} onChange={this.handleChangeInicio}/>
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fin">
                                            Fin
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fin" type="date" required value={this.state.fin} onChange={this.handleChangeFin}/>
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
                                        value='Reservar'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        )
    }

}
export default withRouter(FormReservation)