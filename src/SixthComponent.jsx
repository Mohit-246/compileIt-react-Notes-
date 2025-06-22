import React from 'react'

function SixthComponent({products}) {
  return (
    <div>
     {products && products.map((product, id) => (
            <div key={id}>
                <h3>{product.title}</h3>
                <img src={product.image} alt='' width={100}/>
            </div>
        ))}
    </div>
  )
}

export default SixthComponent