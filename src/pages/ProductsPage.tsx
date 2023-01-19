import React from 'react'
import { Outlet } from "react-router-dom"

const ProductsPage = () => {
    return (
        <div>
            <h1>List of posts go here!</h1>
            <Outlet />
        </div>
    )
}

export default ProductsPage
