import React from 'react';
import {Field, Form, Formik} from "formik";
import * as furamaService from "./service/furamaService";
import {useNavigate} from "react-router-dom";

function CreateFurama(props) {
    let navigate=useNavigate()
    return (
        <div>
            <div
                className="row mx-0"
                style={{marginTop: 96, backgroundColor: "rgb(232, 235, 219)"}}
            >
                <div className="col-5">
                    <div>
                        <h2 className="text-center fw-bold mt-3">Thêm Phòng Mới</h2>
                    </div>
                    <div className="dropdown text-center mt-3" style={{paddingRight: 360}}>
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Danh sách cơ sở
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Phòng
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Biệt thự
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Căn hộ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Formik initialValues={{
                            name: '',
                            area: '',
                            price: '',
                            people: '',
                            facilityService: '',
                            serviceFree: '',
                        }}
                                onSubmit={async(value) => {
                                    await furamaService.save(value)
                                    alert('thêm mới thành công')
                                    navigate('/listService')
                                }}>
                            <Form action="">
                                <table className="" style={{width: 500}}>
                                    <tbody>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Tên dịch vụ:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className={"form-control "}
                                                name="name"
                                                placeholder="Nhập tên dịch vụ"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Diện tích sử dụng:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="area"
                                                placeholder="Nhập diện tích sử dụng"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Chi phí thuê:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="price"
                                                placeholder="Nhập chi phí thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số lượng người tối đa:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="people"
                                                placeholder="Nhập số lượng người tối đa"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Kiểu thuê:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <Field
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập kiểu thuê"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 60}}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Dịch vụ miễn phí đi kèm:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập dịch vụ miễn phí đi kèm"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{height: 120}}>
                                        <td>
                                            <button className="btn btn-primary float-end">Xác nhận</button>
                                        </td>
                                    </tr>
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

export default CreateFurama;