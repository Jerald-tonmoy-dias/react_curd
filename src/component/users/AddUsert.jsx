
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
const AddUsert = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/users', user);
        history.push("/");
    }
    return (
        <>
            <div className="container mt-5">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add New User</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                class="form-control"
                                placeholder="Enter Your Username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div class="mb-3">
                            <input type="email"
                                class="form-control"
                                placeholder="Enter Your Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                class="form-control"
                                placeholder="Enter Your Phone number"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                class="form-control"
                                placeholder="Enter Your Website"
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)} />
                        </div>


                        <button
                            type="submit"
                            class="btn btn-primary w-100">
                            Add user
                        </button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default AddUsert;
