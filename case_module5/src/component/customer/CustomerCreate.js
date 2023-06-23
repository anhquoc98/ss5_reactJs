import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as furamaService from "../serviceFurama/service/furamaService";
import {useNavigate} from "react-router-dom";
import * as customerService from "./customerService";

function CustomerCreate(props) {
    const [listCustomerType, setListCustomerType] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await customerService.findAllType()
            setListCustomerType(rs.data)
        }
        list()
    }, [])
    let navigate = useNavigate();
    return (

        <div>
            <div
                className="row mx-0"
                style={{marginTop: 96, backgroundColor: "rgb(232, 235, 219)"}}
            >
                <div className="col-5">
                    <div>
                        <h2 className="text-center fw-bold mt-3">Thêm mới khách hàng</h2>
                    </div>
                    <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>

                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Formik initialValues={{
                            name: '',
                            gender: '1',
                            dateOfBirth: '',
                            cmnd: '',
                            phone: '',
                            email: '',
                            address: '',
                            customerType: 1
                        }}
                                onSubmit={async (value) => {
                                    await customerService.save(value)
                                    alert('thêm mới thành công')
                                    navigate('/customer')
                                }}>
                            <Form action="">
                                <table className="" style={{width: 500}}>
                                    <tbody>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Họ và tên{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className={"form-control "}
                                                name="name"
                                                placeholder="Nhập họ và tên"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Giới tính:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="radio"
                                                name="gender"
                                                placeholder="Giới tính"
                                                value='1'
                                            />Nam
                                            <Field
                                                type="radio"
                                                name="gender"
                                                placeholder="Giới tính"
                                                value='0'

                                            />Nữ
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Ngày sinh:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="dateOfBirth"
                                                placeholder="Ngày sinh"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Cmnd:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="Cmnd"
                                                placeholder="Nhập số cmnd"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Điện thoại:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control "
                                                name="phone"
                                                placeholder="Nhập số điện thoại"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Email:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name="email"
                                                placeholder="Nhập email"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Địa chỉ:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name="address"
                                                placeholder="Nhập Địa chỉ"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 120}}>
                                        <td>
                                            <button className="btn btn-primary float-end">Xác nhận</button>
                                        </td>
                                    </tr>
                                    <Field component='select' name='customerType'>
                                        {
                                            listCustomerType.map((value, index) => (
                                                <option key={index} value={value.id}>
                                                    {value.name}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    </tbody>
                                </table>
                            </Form>
                        </Formik>

                    </div>
                </div>
                <div className="col-7 p-0">
                    <img
                        className="w-100 h-100"
                        src="https://khunghiduong.vn/wp-content/uploads/2017/07/can-ho-1-phong-ngu-ariyana_2.jpg"
                        alt=""
                    />
                </div>
            </div>

        </div>


    );
}

export default CustomerCreate;