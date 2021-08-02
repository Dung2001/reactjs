import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LayoutAdmin = (props) => {
    return (
        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item">
                        <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink activeClassName="active" to="/admin/product">Product</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink activeClassName="active" to="/admin/category">Category</NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink activeClassName="active" to="/">Website</NavLink>
                    </li>
                </ul>

            </div>
            <div className="col-8">
                {props.children}
            </div>
        </div>
    )
}

export default LayoutAdmin