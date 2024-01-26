import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assests/data'
import Iteam from '../Iteam/Iteam'
const RelatedProduct = () => {
  return (
    <div className='related'>
        <h1>Related Products</h1>
    <hr />
    <div className="related-iteams">
{data_product.map((iteam,i)=>{
    return <Iteam key={i} id={iteam.id} name={iteam.name} image={iteam.image} new_price={iteam.new_price} old_price={iteam.old_price}/>
})}
    </div>
    </div>
   
  )
}

export default RelatedProduct