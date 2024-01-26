import React from 'react'
import './New.css'
import new_collection from '../Assests/new_collection'
import Iteam from '../Iteam/Iteam'

const New = () => {
  return (
    <div className='new'>
        <h1>New Arrivals</h1>
        <hr />
        <div className="collection">
        {new_collection.map((iteam,i)=>{
            return <Iteam key={i} id={iteam.id} name={iteam.name} image={iteam.image} new_price={iteam.new_price} old_price={iteam.old_price}/>
        })}
        </div>
    </div>
  )
}

export default New