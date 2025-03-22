// Created custom not found page for product as if the file with not found name is in that folder then it will override the main not found page for that specific route

// export default function NotFound() {
//     return (
//         <div>
//             <h1>Product Not Found</h1>
//         </div>
//     )
// }


"use client"
import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname()
    console.log(pathname)
    const productId = pathname.split("/")[2]
    return (
        <div>
            <h1>Product Not Found for {productId}</h1>
        </div>
    )
}