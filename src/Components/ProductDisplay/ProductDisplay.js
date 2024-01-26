import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/Shop_Context'

const ProductDisplay = (props) => {
  const {product}=props;
  const{addToCart}=useContext(ShopContext)
  return (
    <div className='display'>
      <div className="display-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          
        </div>
        <div className="display-image">
          <img className='main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(120)</p>
        </div>
        <div className="right-prices">
          <div className="old-price">
            RS {product.old_price}
          </div>
          <div className="new-price">
            Rs {product.new_price}</div>
        </div>
        <div className="right-discription">
        A jacket is a garment for the upper body, usually extending below the hips. A jacket typically has sleeves and fastens in the front or slightly on the side. 
        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="right-sizes">
             <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
          </div>
          
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Wish List</button>
      <p className='right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
      <p className='right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
      
    </div>
    
  )
  
}

export default ProductDisplay