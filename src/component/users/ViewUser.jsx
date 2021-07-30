import React from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ViewUser = () => {

    const { id } = useParams();

    // setting params
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    // destructing variable
    const { name, username, email, phone, website } = user;

    useEffect(() => {
        onLoad();
    }, []);


    const onLoad = async () => {
        const result = await axios.get(`http://localhost:4000/users/${id}`, user);
        setUser(result.data);
    }


    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center display-6 text-primary mb-4 ">User Information</h1>
                <ul className="list-group w-30 mx-auto">
                    <li className="list-group-item">Name : {name}</li>
                    <li className="list-group-item">Username : {username}</li>
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item">Phone : {phone}</li>
                    <li className="list-group-item">Website : {website}</li>
                </ul>
                <Link className="btn btn-secondary mt-4" to="/"> Back to Home</Link>
            </div>

        </>
    );
}

export default ViewUser;
