import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../api/productAPI';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                console.log(data);
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])
    return (
        <div className="row">
            <div className="col-6">
                <img style={{ width: 500 }} src={`http://localhost:4003/api/product/photo/${product._id}`} />
            </div>
            <div className="col-6">
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <p>{product.quantity}</p>
            </div>
        </div>

    )
}

export default ProductDetailPage