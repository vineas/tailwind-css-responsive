import React from 'react'
import { data } from '../data'

const CssGrid = () => {
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-4 lg p-2 flex flex-col items-center justify-center'
    return (
        <>
            <div className='grid grid-cols-3 auto-rows-[300px] gap-4 my-1'>
                {data.map((item, i) => (
                    <div key={i} className={`${boxStyle} ${i === 3 || i === 6 ? 'col-span-2' : ''}`} >
                        <h1 className='text-xl text-gray-600'>{item.title}</h1>
                        <p className='font-bold text-2xl'>{item.value}</p>
                    </div>
                ))};
            </div>
        </>
    )
}

export default CssGrid