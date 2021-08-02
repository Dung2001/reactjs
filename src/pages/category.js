import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = (props) => {
    let {id} = useParams()
    return (
        <div className="row mb-5">
            {props.products.filter(product => product.category === id).map(product => {
                return <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div className="block-4 text-center border">
                        <figure className="block-4-image">
                            <a href={`/product/${product._id}`}>
                                <img src={`http://localhost:4003/api/product/photo/${product._id}`} alt="Image placeholder" className="img-fluid" />
                            </a>
                        </figure>
                        <div className="block-4-text p-4">
                            <h3><a href={`/product/${product._id}`}>{product.name}</a></h3>
                            <p className="mb-0">Finding perfect products</p>
                            <p className="text-primary font-weight-bold">${product.price}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
export default CategoryPage
