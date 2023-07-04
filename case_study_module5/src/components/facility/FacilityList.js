import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import * as facilities from '../../service/facilityService'
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import FacilityEdit from "./FacilityEdit";
import { Field, Form, Formik } from "formik";
import ModalDeleteFacility from "./ModalDeleteFacility";


export default function FacilityList() {
    let listFacility = ['Tất cả dịch vụ', 'Phòng', 'Biệt thự', 'Căn hộ']
    const [pageCount,setPageCount] = useState(0)
    const [facilitiesList, setFacilitiesList] = useState([])
    // const [value,setValue] = useState('')
    const fecthApi = async () => {
        const rs = await facilities.findAll('',1)
        const pages = await facilities.getTotalPages()
        let total = Math.ceil(pages.length/6)
        setPageCount(total)
        setFacilitiesList(rs)
    }
    useEffect(() => {
        fecthApi()
    }, [])

    const [idDelete, setIdDelete] = useState(0)
    const [nameDelete, setNameDelete] = useState('')

    const getIdDelete = (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }    
    
    const handlePageClick= async(data)=>{
        let currentPage = data.selected+1
        const rs = await facilities.findAll('',currentPage)
        setFacilitiesList(rs)
    }


    // const hangdleGetFacilityType = (event)=>{
    //     setValue(event.target.value)
    // }
    return (
        <>
            {/*<div className="row mx-0" style={{ marginTop: 96 }}>*/}
            {/*    <img*/}
            {/*        className="img-fluid px-0"*/}
            {/*        style={{ height: 400 }}*/}
            {/*        src="https://cdn.azvd.asia/images/furama/draf1-2.jpg"*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <h2 className="text-center fw-bold pt-4" style={{marginTop:'96px'}}>Danh Sách Tất Cả Các Dịch Vụ</h2>
            </div>
            <div>
                <NavLink className="btn btn-dark" style={{ marginLeft: 120 }} to='/facility-create'>
                    Thêm Cơ Sở Dịch Vụ Mới
                </NavLink>
                <span className="dropdown text-center float-end" style={{ paddingRight: 115 }}>
                    <Formik
                        initialValues={{
                            name: ''
                        }}
                        onSubmit={(value) => {
                            const search = async () => {
                                if (value.name == 'Tất cả dịch vụ') {
                                    value.name = ''
                                }
                                const rs = await facilities.findAll(value.name,1)
                                setFacilitiesList(rs)
                            }
                            search()
                        }}
                    >
                        <Form>
                            <Field component="select" name="name" className="btn btn-secondary me-2">
                                {
                                    
                                    listFacility.map((facilities, index) => (
                                            <option key={index} value={facilities}>
                                                {facilities} 
                                            </option>
                                    
                                        
                                    )
                                    )
                                }
                            </Field>
                            <button type="submit" className="btn btn-light">Tìm kiếm</button>
                        </Form>
                    </Formik>

                </span>
            </div>
            <div className="row mx-0 mt-3 py-1" style={{ padding: "0 100px" }}>
                {
                    facilitiesList.map((facilities) => (
                        <div className="col-4 d-flex justify-content-center" key={facilities.id}>
                            <div className="card shadow mb-5 mt-2">
                                <img
                                    src={facilities.img}
                                    className="card-img-top w-100 h-100"
                                    alt="..."
                                />
                                <div className="card-body" style={{backgroundColor:"burlywood"}}>
                                    <h5 className="card-title">{facilities.name}</h5>
                                    <p className="card-text">Diện tích phòng: {facilities.area} </p>
                                    <NavLink to={`/facility-edit/${facilities.id}`} className="btn btn-primary"><i className="ti-pencil-alt"></i></NavLink>
                                    <button onClick={() => getIdDelete(facilities.id, facilities.name)} data-bs-toggle="modal"
                                        data-bs-target="#facilityDelete" className="btn btn-danger ms-2"><i className="ti-trash"></i></button>
                                    <NavLink to={`/facility-detail/${facilities.id}`} className="float-end btn"><i className="ti-info fs-3 fw-bold"></i></NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <ReactPaginate
                previousLabel={'Trước'}
                nextLabel={'Sau'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
                style='backgroundColor: darkgrey'
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
                    theme="dark" />
                <ModalDeleteFacility
                    id={idDelete}
                    name={nameDelete}
                    getList={() => {
                        fecthApi()
                    }}
                />
            </div>
        </>
    )
}
