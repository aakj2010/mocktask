import React, { useState } from 'react'

function User() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers([...users, {
            userName,
            email,
            mobile
        }]);
        setUserName("");
        setEmail("");
        setMobile("");
    }
    return (
        <>
            <div className='container'>
                
                <form onSubmit={handleSubmit} className='form-control'>
                <h2>Create User</h2>
                    <br />
                    <input type="text" placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <br /><br /><input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br /><br /><input type="number" placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <br /><br /><button type='submit' className='btn btn-primary' >Add User</button>
                </form>
            </div>
            <br />
            <div >
                <table className='bordered'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User