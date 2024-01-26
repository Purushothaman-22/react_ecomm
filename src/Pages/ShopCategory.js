import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/Shop_Context'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Iteam from '../Components/Iteam/Iteam'
import All_product from '../Components/Assests/all_product'

const ShopCategory = (props) => {
    const {All_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
            <img  className='shop-banner' src={props.banner} alt="" />
            <div className="index-sort">
                <p><span>Showing 1-12</span> Out Of 36 Products</p>
                <div className="shopcategory-sort">
                    Sort Out <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {All_product.map((iteam,i)=>{
                    if(props.category===iteam.category){
                        return <Iteam key={i} id={iteam.id} name={iteam.name} image={iteam.image} new_price={iteam.new_price} old_price={iteam.old_price}/>
                    }else{
                        return null;
                    }
                   
                    
                })}
            </div>
            <div className="load-more">
                Show More
            </div>
        

    </div>
  )
}

export default ShopCategory