import { Menu, Transition } from '@headlessui/react'
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { logoutUser } from "actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from 'assets/logo.svg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

class AvatarMenu extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
        window.location.replace("/")
    };
    render() {
        return (
            <div>
                
                <Menu as="div" className='ml-3 relative'>
                    {({ open }) => (
                        <>
                            <div>
                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" >
                                    <span className="sr-only">Abrir cuenta</span>
                                    <img
                                        className='h-8 w-8 rounded-full'
                                        src={logo}
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/profile"
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                Perfil
                                            </Link>
                                        )}

                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="configuser"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Configuracion
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={this.onLogoutClick}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'w-full text-left px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                Salir
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        )
    }
}
AvatarMenu.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  export default connect(mapStateToProps, { logoutUser })(AvatarMenu);
