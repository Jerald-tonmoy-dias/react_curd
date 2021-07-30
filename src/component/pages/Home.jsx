import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:4000/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/users/${id}`);
        loadUsers();
    }

    return (
        <>
            <div className="container">
                <table class="table mt-5 border shadow">
                    <thead class="table-dark bg-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scrop="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        <Link to={`/user/view/${user.id}`} className="btn btn-primary text-capitalize me-3 mb-2">view</Link>
                                        <Link to={`/user/edit/${user.id}`} className="btn btn-info text-capitalize  me-3 mb-2">edit</Link>
                                        <Link onClick={() => deleteUser(user.id)} className="btn btn-danger text-capitalize">delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
