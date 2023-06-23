import React, {useEffect, useState} from 'react';
import * as postsService from "../service/postsService";
import {NavLink} from "react-router-dom";

function ListPosts() {
    const [postsList, setPostsList] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await postsService.findByAll();
            setPostsList(rs.data)
        }
        list()
    }, []);

    const [idDelete, setIdDelete] = useState('')

    function getIdDelete(id) {
        setIdDelete(id)
    }

    async function handleDelete() {
        await postsService.remove(idDelete)
        let rs = await postsService.findByAll()
        setPostsList(rs.data)
    }

    return (
        <div>
            <h2> List posts</h2>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <table className='table table-primary'>
                <thead className='table-danger'>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>category</th>
                    <th>time</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {postsList.map((value, index) => (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.category}</td>
                        <td>{value.updatedAt}</td>
                        <td>
                            <NavLink to={`/edit/${value.id}`} className='btn btn-primary m-1'>Edit</NavLink>
                            <NavLink to={`/detail/${value.id}`} className='btn btn-success'>Detail</NavLink>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => getIdDelete(value.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                    onClick={() => handleDelete()}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListPosts;