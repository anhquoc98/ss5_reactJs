import { NavLink } from 'react-router-dom';


import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import * as contractsList from "./contractService";
import * as facilitiesLists from "../serviceFurama/service/furamaService";
import * as customerService from "../customer/customerService";
import Header from "../Header";
import Footer from "../Footer";





export default function ContractList() {


    return (
        <>
            <>
                <Header/>
                <div className="row mx-0">
                    <img
                        className="img-fluid px-0"
                        style={{ height: 400 }}
                        src="https://cdn.azvd.asia/images/furama/draf1-2.jpg"
                        alt=""
                    />
                </div>
                <div>
                    {" "}
                    <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Hợp Đồng</h2>
                </div>
                <div>
                    <button className="ms-5 btn btn-dark">Thêm Hợp Đồng Mới</button>
                </div>
                <div className="row mx-0 mt-3 px-5 py-1">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hợp đồng</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Số tiền cọc trước</th>
                            <th>Tổng số tiền thanh toán</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>SV-0001</td>
                            <td>23-03-2023</td>
                            <td>25-05-2023</td>
                            <td>500.000.000</td>
                            <td>2.000.000.000</td>
                            <td>
                                <button>Chỉnh sửa</button>
                            </td>
                            <td>
                                <button>Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>SV-0002</td>
                            <td>23-03-2023</td>
                            <td>25-05-2023</td>
                            <td>500.000.000</td>
                            <td>2.000.000.000</td>
                            <td>
                                <button>Chỉnh sửa</button>
                            </td>
                            <td>
                                <button>Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>SV-0003</td>
                            <td>23-03-2023</td>
                            <td>25-05-2023</td>
                            <td>500.000.000</td>
                            <td>2.000.000.000</td>
                            <td>
                                <button>Chỉnh sửa</button>
                            </td>
                            <td>
                                <button>Xóa</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Footer/>
            </>

        </>
    )
}