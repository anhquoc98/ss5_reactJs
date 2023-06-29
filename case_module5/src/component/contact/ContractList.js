import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import * as contractsList from "./contractService";





export default function ContractList() {

    const [contractList, setContracList] = useState([])

    // const [customerList, setCustomerList] = useState([])
    //
    // const [facilitiesList, setFacilitiesList] = useState([])
    let[count, setCount] = useState(1)
    const showListContract = async () => {
        const rs = await contractsList.findByName("",1)
        let pages = await contractsList.getTotalPages()
        let total = Math.ceil(pages.length/5)
        setPageCount(total)
        setContracList(rs)
    }
    useEffect(() => {
        showListContract()
    }, [])


    const [idDelete,setIdDelete] = useState(0)
    const [nameDelete,setNameDelete] = useState('')

    const getPropsContract = (id,name)=>{
        console.log(id);
        console.log(name);
        setIdDelete(id)
        setNameDelete(name)
    }

    const[pageCount,setPageCount] = useState(0)

    const handlePageClick = async(page)=>{
        let currentPage = page.selected +1
        setCount(currentPage*5-4)
        const rs = await contractsList.findByName('',currentPage)
        setContracList(rs)
    }

    function handleIdDelete(id, name) {
        setIdDelete(id)
        setNameDelete(name)
    }

    async function handleDelete() {
        await contractsList.remove(idDelete)
        let rs =await contractsList.findByName()
        setContracList(rs)
    }

    return (
        <>
            <div className="row mx-0" style={{ marginTop: 96 }}>
                <img
                    className="img-fluid px-0"
                    style={{ height: 400 }}
                    src="https://cafebatdongsan.com.vn/uploads/image/images/furama-ariyana-condotel-da-nang.jpg"
                    alt=""
                />
            </div>
            <div>
                <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Hợp Đồng</h2>
            </div>
            <div className='container'>
                <div className='row px-0'>
                    <div className='col-6 float-start'>
                        <NavLink className="ms-5 btn btn-dark" to='/contactCreate'>Thêm Hợp Đồng Mới</NavLink>
                    </div>
                    <div className='col-6 float-start'>
                        <Formik initialValues={{
                            contractCode: ''
                        }}
                                onSubmit={(value) => {
                                    console.log(value)
                                    const showListContract = async () => {
                                        const rs = await contractsList.findByName(value.contractCode)
                                        if (rs === "") {
                                            document.getElementById("empty").innerHTML = `Không Tìm Thấy Mã ${value.contractCode}`
                                        } else {
                                            document.getElementById("empty").innerHTML = ``
                                        }
                                        setContracList(rs)
                                    }
                                    showListContract()
                                }}
                        >
                            <Form>
                                <div className="form-group float-end w-75" style={{
                                    paddingLeft: 80
                                }}>
                                    <i className='ti-search ti-search2' /><Field type="text"
                                                                                 className="form-control d-inline float-start me-3 rounded-pill" style={{
                                    width: 230,
                                    paddingLeft:30
                                }} name="contractCode" aria-describedby="helpId" placeholder="Tìm kiếm..." />
                                    <button type="submit" className="btn btn-secondary float-start rounded-pill">Tìm kiếm</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>



                <div className="row mx-0 mt-3 px-5 py-1">
                    <table className="table table-striped" >
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã hợp đồng</th>

                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Tiền cọc trước</th>
                            <th>Tổng tiền thanh toán</th>
                            <th />
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        {contractList.map((contracts) => (
                            <tr key={contracts.contractCode}>
                                <td scope="row">{count++}</td>
                                <td>{contracts.contractCode}</td>
                                <td>{contracts.dateStart}</td>
                                <td>{contracts.dateEnd}</td>
                                <td>{contracts.price}</td>
                                <td>{contracts.totalPrice}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => handleIdDelete(contracts.id, contracts.name)}>
                                        Xóa
                                    </button>

                                </td>
                            </tr>
                        ))}
                        </tbody>
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
                    </table>
                    <ReactPaginate
                        previousLabel={'Trước'}
                        nextLabel={'Sau'}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName='pagination'
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        activeClassName='active'
                    />
                    <ToastContainer
                        position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                    <div><h4 id="empty" className="text-danger text-center"></h4></div>
                </div>
            </div>

        </>
    )
}