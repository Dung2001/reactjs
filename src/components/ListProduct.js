import React from 'react'
import { Link } from 'react-router-dom'
const Products = (props) => {
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th><a href="/admin/product/add" style={{ textDecoration: 'none' }}>ADD Product</a></th>
                    </tr>
                </thead>
                {props.products.map((product, index) => {
                    return <tbody key={index}><tr>
                        <td>{index}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td><img src={`http://localhost:4003/api/product/photo/${product._id}`} width="50px" height="50px" /></td>
                        <td>{product.description}</td>
                        <td>
                            <Link to={`/admin/product/edit/${product._id}`} className="btn btn-outline-primary">Update</Link>
                            <button className="btn btn-outline-danger btn-remove" onClick={() => { props.onDelete(product._id) }}>Remove</button>
                        </td>
                    </tr></tbody>
                })}

            </table>
        </div>

    )
}
export default Products