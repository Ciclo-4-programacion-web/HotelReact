import React from 'react'
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import CrudRoom from 'components/crud/CrudRoom';
import CrudReservation from 'components/crud/CrudReservation';

const Item = () => {
  const { name } = useParams();
  return (
    <div>
      {name === 'habitaciones-crud' ? <CrudRoom></CrudRoom> : <CrudReservation></CrudReservation>}
    </div>
  );
}
const Crud = () => {
  const sidebar = document.getElementById("menu")
  // add our event listener for the click
  const click = () => {
    console.log(sidebar)
    sidebar.classList.toggle('-translate-x-full')
  };
  const navigationCrud = [
    { name: 'Habitaciones', href: '/habitaciones-crud', current: true },
    { name: 'Reservas', href: '/reservas-crud', current: false }
  ]
  const { url, path } = useRouteMatch();
  return (
    <div className="relative min-h-screen md:flex ">


      <div className="header text-white-100 flex justify-between md:hidden">
        <div></div>

        <button onClick={click} className="mobile-menu-button p-4 focus:outline-none">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color='white'>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div id='menu' className="sidebar text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out bg-gradient-to-r from-blue-900 to-indigo-900">
        <nav>
          {navigationCrud.map((link) => (
            <Link key={link.name} to={`${url}${link.href}`} aria-current={link.current ? 'page' : undefined} className='block px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white cursor-pointer py-2.5'
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-1 md:px-10 bg-gray-200">
        <Route path={`${path}/:name`}>

          <Item></Item>
          
        </Route>

      </div>

    </div>
  )
}

export default Crud
