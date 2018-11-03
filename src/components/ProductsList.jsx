import React from 'react'
import Product from './Product'

export default function ProductsList({products}) {
    const productsItems = products.map((product) => {
        return (
        <div key={product.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
            <Product products = {product}/>
        </div>)
        });

    return(        
        productsItems
    )
}