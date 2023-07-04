import React, {useEffect, useState} from 'react';
import * as postsService from "../service/postsService";
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ListPosts() {
    const [postsList, setPostsList] = useState([])
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const list = async () => {
            let rs = await postsService.findByAll();
            if (rs.data.length ===0){
                setNoResults(true);
            }
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
        toast("Oke")
    }

    return (
        <>

            <div style={{textAlign: 'center'}}>
                <h2> List posts</h2>
            </div>
            <div className='d-flex' style={{position :"fixed"}}>
                <Formik initialValues={{
                    title: ''
                }}
                        onSubmit={(values) => {
                            const findByName = async () => {
                                let rs = await postsService.searchByTitle(values.title);
                                setPostsList(rs.data)
                                if (rs.data.length ===0){
                                    setNoResults(true);
                                    setPostsList([])
                                }
                            }
                            findByName()
                        }}>
                    <Form>
                        <Field type='text' name='title' className=''/>
                        <button type='search' className='btn btn-primary m-1'>Search</button>
                    </Form>
                </Formik>
            </div>
            <div className='m-3' style={{textAlignLast: 'right', marginRight: "20px"}}>
                <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            </div>
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
                {
                    noResults && ( <h6 style={{textAlign:"center",width:"100%"}}>No post found</h6>)
                }
                {
                    postsList.map((value, index) => (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.category}</td>
                        <td>{value.updatedAt}</td>
                        <td>
                            <NavLink to={`/edit/${value.id}`} className='btn btn-primary m-1'>Edit</NavLink>
                            <NavLink to={`/detail/${value.id}`} className='btn btn-success m-1'>Detail</NavLink>
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
            <ToastContainer/>
        </>
    );
}

export default ListPosts;