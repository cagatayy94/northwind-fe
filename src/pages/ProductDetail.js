import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetail() {
    let {id} = useParams()
    return (
        <div>
            Detay Sayfası
            <br/>
            Ürün = {id}
        </div>
    )
}
