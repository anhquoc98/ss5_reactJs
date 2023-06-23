import React, {useEffect, useState} from 'react';
import * as customerService from "./customerService";
import {NavLink} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import {Field, Formik} from "formik";

function CustomerList() {
    const [listCustomer, setListCustomer] = useState([])
    const [listCustomerType, setListCustomerType] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await customerService.findAll()
            setListCustomer(rs.data)
        }
        list()
    }, []);

    useEffect(() => {
        const list = async () => {
            let rs = await customerService.findAllType()
            setListCustomerType(rs.data)
        }
        list()
    }, [])
    const [idDelete, setIdDelete] = useState([])
    const [nameDelete, setNameDelete] = useState([])

    function handleIdDelete(id, name) {
        setIdDelete(id)
        setNameDelete(name)
    }

    async function handleDelete() {
        await customerService.remove(idDelete)
        alert('xóa thành công')
        let rs= await customerService.findAll()
        setListCustomer(rs.data)
    }

    return (
        <div>
            <Header/>
            {/*<Formik initialValues={{*/}
            {/*    name: '',*/}
            {/*}}*/}
            {/*        onSubmit={(values) => {*/}
            {/*            const */}
            {/*        }*/}
            {/*        }>*/}
            {/*    <Field type='text'/>*/}
            {/*    <button type='submit'> Tìm kiếm</button>*/}
            {/*</Formik>*/}
            <NavLink to={'/createCustomer'} className='btn btn-primary m-lg-2'>Thêm mới</NavLink>
            <table className='table table-primary'>
                <thead className='table-danger'>
                <tr>
                    <th>id</th>
                    <th>họ và tên</th>
                    <th>giới tính</th>
                    <th>ngày sinh</th>
                    <th>cmnd</th>
                    <th>số điện thoại</th>
                    <th>email</th>
                    <th>loại khách</th>
                    <th>địa chỉ</th>
                </tr>
                </thead>
                <tbody>
                {
                    listCustomer.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.gender == "1" ? 'nam' : 'nữ'}</td>
                            <td>{value.dateOfBirth}</td>
                            <td>{value.cmnd}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                            <td>{listCustomerType.filter(ct => ct.id === value.customerType)[0]?.name}</td>
                            <td>{value.address}</td>
                            <td>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handleIdDelete(value.id, value.name)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Footer/>

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
                            Xóa {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                    onClick={() => handleDelete()}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CustomerList;