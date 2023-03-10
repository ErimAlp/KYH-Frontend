import React, { useEffect } from 'react'
import { useProductContext } from '../Contexts/ProductContext'


const FeaturedProduct = () => {
    const { featured } = useProductContext()

    

    return (
        <div>
            { featured.map(product => (<div>{product.name}</div>)) }
        </div>
    )
}

export default FeaturedProduct