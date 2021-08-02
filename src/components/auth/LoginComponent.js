import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from 'classnames';
import { loginUser } from "actions/authActions";


import logo from 'assets/people_tax5.svg'


class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/profile");
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/profile"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container mx-auto">
                    <div className="flex justify-center px-6">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex my-12 shadow-2xl">
                            <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center font-bold">Ingresa a tu cuenta!</h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" noValidate onSubmit={this.onSubmit}>
                                    <div className="my-6">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Email
                                        </label>
                                        <div className='flex'>
                                            <input
                                                className={classNames("w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline", {
                                                    invalid: errors.email || errors.emailnotfound,
                                                })}
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                            />
                                            <div className="w-10 z-10 pl-1 -ml-10 text-center pointer-events-none flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-red-500 text-sm">
                                            {errors.email}
                                            {errors.emailnotfound}
                                        </span>
                                    </div>
                                    <div className="my-6">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Contraseña
                                        </label>
                                        <div className='flex'>
                                            <input
                                                className={classNames("w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline", {
                                                    invalid: errors.password || errors.passwordincorrect,
                                                })}
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                            />
                                            <div className="w-10 z-10 pl-1 -ml-10 text-center pointer-events-none flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-red-500 text-sm">
                                            {errors.password}
                                            {errors.passwordincorrect}
                                        </span>
                                    </div>
                                    <div className="my-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                    <hr className="my-6 border-t" />
                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            to="/register"
                                        >
                                            No tienes cuenta? Registrate
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                            >
                                <img src={logo} alt='persona' className='h-full rounded-l-lg bg-gray-50' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
LoginComponent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(LoginComponent));