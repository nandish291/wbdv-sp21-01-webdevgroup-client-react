import React, {useState} from 'react'
import {Link} from "react-router-dom";

const UserRow = ({item}) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCahedItem] = useState(item)

    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto@gmail.com</td>
                <td>*****</td>
                <td>12/08/1996</td>
                <td>
                    <button className="btn btn-danger">delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto@gmail.com</td>
                <td>*****</td>
                <td>12/08/1996</td>
                <td>
                    <button className="btn btn-danger">delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto@gmail.com</td>
                <td>*****</td>
                <td>12/08/1996</td>
                <td>
                    <button className="btn btn-danger">delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto@gmail.com</td>
                <td>*****</td>
                <td>12/08/1996</td>
                <td>
                    <button className="btn btn-danger">delete</button>
                </td>
            </tr>
    </>
    )
}

export default UserRow