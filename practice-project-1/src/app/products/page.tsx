"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ProductList = () => {
  const pathname = usePathname()
  const productId = 100
  return (
    <div>
      <>
        <h1>Product List</h1>
        <h2> <Link href={"/products/1"}>Product 1</Link></h2>
        <h2><Link href={"/products/2"}>Product 2</Link> </h2>
        <h2><Link href={"/products/3"}>Product 3</Link> </h2>
        <h2> <Link href={`/products/${productId}`}>Product {productId}</Link></h2>
      </>
    </div>
  )
}

export default ProductList



// import React from 'react'

// const ProductList = () => {
//   return (
//     <div>
//       <>
//       <h1>Product List</h1>
//       <h2>Product 1</h2>
//       <h2>Product 2</h2>
//       <h2>Product 3</h2>
//       </>
//     </div>
//   )
// }

// export default ProductList
