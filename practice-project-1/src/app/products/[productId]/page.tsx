import React from 'react'
import { notFound } from 'next/navigation'

const ProductDetails = ({ params }) => {
    const productId = parseInt(params.productId)
    if (productId > 200) {
        return notFound() // Here as we have created a custom not found page for this route then it will override the main not found page
    }
    return (
        <div>
            <h1>Details about product {productId}</h1>
        </div>
    )
}

export default ProductDetails

