import React, { useEffect, useState } from 'react'
import SixthComponent from './SixthComponent';

function FifthComponent() {





    const [products, setProducts] = useState();


    const fetchProducts = () => {
         fetch('https://fakestoreapi.com/products')
         .then(response => response.json())
         .then(data => {
             console.log(data)
             setProducts(data)
         }).catch(err => {
            console.log("Error to fetch products!!")
         })
    }

    useEffect(() => {
        fetchProducts()
    }, [])  // This [] called as dependency array


    // fetchProducts();

  return (
    <div>
        <SixthComponent products={products}/>
    </div>
  )
}

export default FifthComponent