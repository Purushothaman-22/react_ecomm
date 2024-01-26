import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../../Context/Shop_Context'
import remove_icon from '../Assests/cart_cross_icon.png'
const Cart = () => {
    const{getTotalCartAmount,All_product,cartIteam,removeToCart}=useContext(ShopContext)
  return (
    <div className='cart'>
        <div className="format-main">
           <p>Products</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
           </div>
           <hr />
{All_product.map((e)=>{
    if(cartIteam[e.id]>0)
    {
        return <div>
            <div className="format format-main">
                <img className='product-icon' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>Rs {e.new_price}</p>
                <button className='quantity'>{cartIteam[e.id]}</button>
                <p>Rs {e.new_price*cartIteam[e.id]}</p>
                <img className='remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
                </div>
                <hr />
                </div>
                }
                return null;

           })}
           <div className="down">
            <div className="total">
                <h1>Total Value</h1>
                <div>
                    <div className="total-iteams">
                        <p>Subtotal</p>
                        <p>Rs{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-iteams">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-iteams">
                        <h3>Pay</h3>
                        <h3>Rs{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To CheckOut</button>
            </div>
            <div className="promo-code">
                <p>If You A Promo Code, Enter</p>
                <div className="promo-box">
                    <input type="text"placeholder='Promo Code' />
                    <button>Submit Here</button>
                </div>
            </div>
           </div>
        </div>

  )
}

export default Cart