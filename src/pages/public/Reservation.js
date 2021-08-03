import Rooms from 'components/reservation/hello'
import React from 'react'

const Reservation = () => {
    return (
        <div className='flex justify-around items-center'>
            <Rooms/>
            <Rooms/>
            <Rooms/>
            <Rooms/>
        </div>
    )
}

export default Reservation
