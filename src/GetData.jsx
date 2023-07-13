import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetData() {
    const [users, SetUsers] = useState([]);

    const loadData = async () => {
        let user = await axios.get('https://62fe35d041165d66bfbb1342.mockapi.io/mentors')
        console.log(user)
        SetUsers(user.data)
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetData