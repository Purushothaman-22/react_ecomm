import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shop_Context'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
    const {All_product}=useContext(ShopContext)
    const{productId}=useParams()
    const product=All_product.find((e)=>
            e.id=== Number(productId)
    )
  return (
    <div>
        <BreadCrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product