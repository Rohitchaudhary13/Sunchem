import React from 'react'
import { categories } from './data'




const Cards = () => {
  return (
    <div className='flex gap-4 mt-16'>
        {
            categories.map((item, index) => {
                return(
                    <>
                        <div key={index} className='rounded-2xl'>
                            <video prefix='auto' autoPlay loop muted playsInline controls>
                                <source src={item.source} type="video/mp4" />
                            </video>
                            <h2>{item.name}</h2>
                            <p>{item.details}</p>
                        </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Cards