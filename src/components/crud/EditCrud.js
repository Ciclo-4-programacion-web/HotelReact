import { PencilIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import FormEditCrud from './FormEditCrud'

const EditCrud = (room) => {
    const [abrir, setAbrir] = useState(false)
    return (
        <>
            <button
                onClick={() => setAbrir(true)}
            >
                <PencilIcon color='blue' className='w-6 h-6'/>
            </button>
            {abrir ? <FormEditCrud room={room} setAbrir={setAbrir} /> : null}   
        </>
    )
}

export default EditCrud

