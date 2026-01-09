import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getData } from '../api/productApi'

export const ProductDatacontext = createContext()

const ProductContext = ({children}) => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const setData = async ()=> {
        const data = await getData()

        setProducts(data)

  }

  useEffect(()=> {
    setData()
  }, [])

  const value = {
    products,
    count,
    setCount
  }
  return (
    <div>
        <ProductDatacontext.Provider value={value}>
            {children}
        </ProductDatacontext.Provider>
    </div>
  )
}

export default ProductContext