import axios from "axios";
import React, { useEffect, useState } from "react";

const CrudApp = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ id:"",name: "", email: "", number: "" });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3000/user")
            .then((res) => res.data)
            .then((data) => setData(data));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addData = () => {
        axios.post("http://localhost:3000/user", formData)
            .then((res) => {
                const newData = res.data;
                setData(prevData => [...prevData, newData]);
                setFormData({id:"", name: "", email: "", number: "" });
            })
            .catch((error) => {
                console.error("Error adding data:", error);
            });
    };

    const updateData = (id, updatedData) => {
        axios.put(`http://localhost:3000/user/${id}`, updatedData)
            .then((res) => {
                const updatedDataArray = data.map(item => (item.id === id ? { ...item, ...updatedData } : item));
                setData(updatedDataArray);
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    };

    const deleteData = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then((res) => {
                const updatedDataArray = data.filter(item => item.id !== id);
                setData(updatedDataArray);
            })
            .catch((error) => {
                console.error("Error deleting data:", error);
            });
    };

    return (
        <div>
            <div>
            <input type="number" name="id" value={formData.id} onChange={handleInputChange} placeholder="Enter Id"/>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Name"/>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email"/>
                <input type="number" name="number" value={formData.number} onChange={handleInputChange} placeholder="Enter Number"/>
                <button onClick={addData}>Add</button>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index ) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>
                                <button onClick={() => updateData(item.id, { id:"",name: "", email: "", number: "" })}>Edit</button>
                                <button onClick={() => deleteData(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CrudApp;