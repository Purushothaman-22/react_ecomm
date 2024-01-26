import React, { createContext, useState } from "react";
import All_product from "../Components/Assests/all_product";

export const ShopContext=createContext(null)
const  getDefaultCart=()=>{
    let cart={}
    for (let index = 0; index < All_product.length+1; index++) {
        cart[index]=0
        }
return cart;
}
const ShopContextProvider=(props)=>{
    const[cartIteam,setCartIteam]=useState(getDefaultCart())
   
    const addToCart=(iteamId)=>{
setCartIteam((prev)=>({...prev,[iteamId]:prev[iteamId]+1}))
console.log(cartIteam)
    }

    const removeToCart=(iteamId)=>{
        setCartIteam((prev)=>({...prev,[iteamId]:prev[iteamId]-1}))
            }
const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const iteam in cartIteam)
    {
        if(cartIteam[iteam]>0){
            let iteamInfo=All_product.map((product)=>product.id===Number(iteam))
            totalAmount += iteamInfo.new_price * cartIteam[iteam]
        }
        return totalAmount;
    }
}



            const contextValue={All_product,cartIteam,addToCart,removeToCart,getTotalCartAmount}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    }
export default ShopContextProvider;