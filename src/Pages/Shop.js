import React from 'react'
import Heroo from '../Components/Heroo/Heroo'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import New from '../Components/NewCollections/New'
import Newsletter from '../Components/NewsLetter/letter'


const Shop = () => {
  return (
    <div>
  <Heroo/>
  <Popular/>
  <Offers/>
  <New/>
  <Newsletter/>
  
    </div>
  )
}

export default Shop