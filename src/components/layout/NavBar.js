import { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import {
    TableIcon,
    DesktopComputerIcon,
    UserGroupIcon,
    ChatAlt2Icon,
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'


import PropTypes from "prop-types";
import { connect } from "react-redux";

import logo from 'assets/logo_white_large.png'
import logoWhite from 'assets/logo_large.png'
import AvatarMenu from 'components/profile/AvatarMenu';
import AcessLink from 'components/profile/AcessLink';

const navigation = [
    { name: 'Dashboard', href: '/crud', icon: TableIcon, },
    { name: 'Reservar', href: '/reservacion', icon: DesktopComputerIcon, },
    { name: 'Servicios', href: '/services', icon: ChatAlt2Icon, },
    { name: 'Equipo', href: '/team', icon: UserGroupIcon, },
]

class NavBar extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <>
                <Popover className="sticky top-0 bg-white nav z-50">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                                    <div className="flex justify-start lg:w-0 lg:flex-1">
                                        <Link to='/'>
                                            <span className="sr-only">HotelReact</span>
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                src={logo}
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                    <div className="-mr-2 -my-2 md:hidden">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Ábreme</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                    <Popover.Group as="nav" className="hidden md:flex space-x-10">

                                        {navigation.map((item) => (
                                            <Link to={item.href} key={item.name} className="text-base font-medium text-white hover:text-gray-100">
                                                {item.name}
                                            </Link>
                                        ))}

                                    </Popover.Group>
                                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                        {user.name ? <AvatarMenu /> : <AcessLink />}

                                    </div>
                                </div>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <img
                                                        className="h-8 w-auto"
                                                        src={logoWhite}
                                                        alt="Logo"
                                                    />
                                                </div>
                                                {user.name ? <AvatarMenu /> : ''}
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Cerrar menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>

                                                </div>

                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid gap-y-8">
                                                    {navigation.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5 space-y-6">
                                                {!user.name ? <div>
                                                <Link
                                                    to='/register'
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Registrate
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Eres usuario?{' '}
                                                    <Link to='/login' className="text-indigo-600 hover:text-indigo-500">
                                                        Ingresa
                                                    </Link>
                                                </p>
                                            </div> : ''}
                                            
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </>)
    }
}

NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(NavBar);