import { PlusSmIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import FormAddCrud from './FormAddCrud'

const ButtonCrud = (id) => {
    const [abrir, setAbrir] = useState(false)
    return (
        <div className='flex flex-col items-end justify-end'>
            <button
                className="bg-blue-900 my-5 mx-5 text-white text-left rounded rounded-2xl hover:shadow-lg hover:opacity-70 outline-none focus:outline-none  ease-linear transition-all duration-150"
                type="button"
                onClick={() => setAbrir(true)}
            >
                <PlusSmIcon className='w-8 h-8 text-white'/>
            </button>
            {abrir ? <FormAddCrud id={id} setAbrir={setAbrir} /> : null}   
        </div >
    )
}

export default ButtonCrud
