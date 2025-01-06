import React, { useState, useEffect } from "react";
import axios from "axios";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({id:"", name: "", email: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(" http://localhost:3000/user");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post(" http://localhost:3000/user", newItem);
      setData([...data, response.data]); // Add the newly created item to the data array
      setNewItem({  id:"" ,name: "", email: "" }); // Reset the newItem state
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdate = async (id, newData) => {
    try {
      await axios.put(` http://localhost:3000/user/${id}`, newData);
      const updatedData = data.map(item => item.id === id ? { ...item, ...newData } : item);
      setData(updatedData);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(` http://localhost:3000/user/${id}`);
      setData(data.filter(item => item.id !== id)); // Remove the deleted item from the data array
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Dynamic Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleUpdate(item.id, { name: 'HELLO ', email: 'WORLD' })}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Item</h2>
      <input
        type="text"
        value={newItem.id}
        onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
        placeholder="ID"
      />
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="NAME"
      />
      <input
        type="text"
        value={newItem.email}
        onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
        placeholder="EMAIL"
      />
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default DynamicTable;