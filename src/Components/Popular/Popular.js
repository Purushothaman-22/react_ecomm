import React from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import Iteam from '../Iteam/Iteam'
const  Popular = () => {
  return (
    <div className='popular'>
        <h1>Updates For Womens </h1>
        <hr />
        <div className="popular_iteam">
            {data_product.map((iteam,i)=>{
                return <Iteam key={i} id={iteam.id} name={iteam.name} image={iteam.image} new_price={iteam.new_price} old_price={iteam.old_price}/>
            })}
        </div>
    </div>
  )
}

export default  Popular