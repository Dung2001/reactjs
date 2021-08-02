import { Link } from 'react-router-dom'

const ListCategory = (props) => {
    console.log(props.categories); //{obj}
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {props.categories.map((category, index) => {
                    return <tbody  key={index}><tr>
                        <td>{index}</td>
                        <td>{category.name}</td>
                        <td>
                            <Link to={`/admin/category/edit/${category._id}`} className="btn btn-outline-primary">Update</Link>
                            <button className="btn btn-outline-danger btn-remove" onClick={() => { props.onCateDelete(category._id) }}>Remove</button>
                        </td>
                    </tr></tbody>
                })}

            </table>
        </div>

    )
}
export default ListCategory;