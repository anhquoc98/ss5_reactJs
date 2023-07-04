import { NavLink } from 'react-router-dom';
import * as contractsList from '../../service/contractService'
import * as facilitiesLists from '../../service/facilityService'
import * as customer from '../../service/customerService'

import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import ModalDeleteContract from './ModalDeleteContract';
import ReactPaginate from 'react-paginate';





export default function ContractList() {

    const [contractList, setContracList] = useState([])

    const [customerList, setCustomerList] = useState([])

    const [facilitiesList, setFacilitiesList] = useState([])
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

    useEffect(() => {
        const showListCustomer = async () => {
            const rs = await customer.getTotalPage()
            setCustomerList(rs)
        }
        showListCustomer()
    }, [])
    useEffect(() => {
        const showListFacilities = async () => {
            const rs = await facilitiesLists.getTotalPages()
            setFacilitiesList(rs)
        }
        showListFacilities()
    }, [])

    const [idDelete,setIdDelete] = useState(0)
    const [nameDelete,setNameDelete] = useState('')

    const getPropsContract = (id,name)=>{
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
    
    return (
        <>
            {/*<div className="row mx-0" style={{ marginTop: 96 }}>*/}
            {/*    <img*/}
            {/*        className="img-fluid px-0"*/}
            {/*        style={{ height: 400 }}*/}
            {/*        src="https://cafebatdongsan.com.vn/uploads/image/images/furama-ariyana-condotel-da-nang.jpg"*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</div>*/}
            <div style={{marginTop:'96px'}}>
                <h2 className="text-center fw-bold pt-4">Danh Sách Tất Cả Các Hợp Đồng</h2>
            </div>
            <div className='container'>
            <div className='row px-0'>
                <div className='col-6 float-start'>
                    <NavLink className="ms-5 btn btn-dark" to='/contract-create'>Thêm Hợp Đồng Mới</NavLink>
                </div>
                <div className='col-6 float-start'>
                    <Formik initialValues={{
                        contractCode: ''
                    }}
                        onSubmit={(value) => {
                            console.log(value)
                            const showListContract = async () => {
                                const rs = await contractsList.findByName(value.contractCode)
                                if (rs == "") {
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
                <table className="table table-warning" style={contractList == '' ? { display: 'none' } : {}}>
                    <thead className="table-primary">
                        <tr>
                            <th>STT</th>
                            <th>Mã hợp đồng</th>
                            <th>Tên khách hàng</th>
                            <th>Tên dịch vụ</th>
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
                                <td>{customerList.filter((customer) => (
                                    customer.id == contracts.customerInfo
                                ))[0]?.name}</td>
                                <td>{facilitiesList.filter((facilities) => (
                                    facilities.id == contracts.facilityInfo
                                ))[0]?.name}</td>
                                <td>{contracts.dateStart}</td>
                                <td>{contracts.dateEnd}</td>
                                <td>{contracts.price}</td>
                                <td>{contracts.totalPrice}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalContract"
                                        onClick={() => getPropsContract(contracts.id, contracts.contractCode)}> <i className="ti-trash" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
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
            <ModalDeleteContract
                id={idDelete}
                name={nameDelete}
                getList={()=>{
                    showListContract()
                }}
                />
        </>
    )
}