import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getData } from '../api/productApi'

export const ProductDatacontext = createContext()

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([])
    const setData = async ()=> {
        const data = await getData()

        setProducts(data)

  }

  useEffect(()=> {
    setData()
  }, [])
  return (
    <div>
        <ProductDatacontext.Provider value={products}>
            {children}
        </ProductDatacontext.Provider>
    </div>
  )
}

export default ProductContext