

import { useEffect, useState } from "react";
import axios from 'axios';
import './axioscss.css'


const Fetch = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditID] = useState(-1);
    const [uname, setUName] = useState('');
    const [uemail, setUEmail] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then(res => setData(res.data))
            .catch(
                er => console.log(er));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:3000/user', { id: id, name: name, email: email })
            .then(res => {
                // location.reload()
            }
            )
            .catch(er => console.log(er))
    }

    const handleEdit = (id) => {
        axios.get('http://localhost:3000/user/' + id)
            .then(res => {
                console.log(res.data)
                setUName(res.data.name)
                setUEmail(res.data.email)
            })
            .catch(er => console.log(er))
        setEditID(id);
    }
    const handleUpdate = (id) => {
        axios.put('http://localhost:3000/user/' + editId, { id: editId, name: uname, email: uemail })
            .then(res => {
                console.log(res);
                // location.reload();
                setEditID(-1);
            })
            .catch(er => console.log(er));
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/user/' + id)
            .then(res => {
                // location.reload();
                console.log(res.data);
            })
            .catch(er => console.log(er))
    }

    return (
        <div >
            <h1>Fetch</h1>
            <div className="form_1">
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <button>Add</button>
                </form>
            </div>

            <table className="container">
                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        item.id === editId ?
                            <tr>
                                <td>{item.id}</td>
                                <td><input type="text" value={uname} onChange={e => setUName(e.target.value)} /></td>
                                <td><input type="text" value={uemail} onChange={e => setUEmail(e.target.value)} /></td>
                                <td><button onClick={handleUpdate}>update</button></td>
                            </tr> :
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={() => handleEdit(item.id)}>edit</button>
                                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Fetch