import { NavLink } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as customerList from '../../service/customerService'
import { useEffect, useState } from "react";
import ModalDeleteCustomer from "./ModalDeleteCustomer";
import ReactPaginate from "react-paginate";

export default function CustomerList() {
  const [customerTypeList, setCustomerTypeList] = useState([])
  let[count, setCount] = useState(1)
  useEffect(() => {
    const fetchApi = async () => {
      const rs = await customerList.customerTypeList()
      setCustomerTypeList(rs)
    }
    fetchApi()
  }, [])

    const [pageCount,setPageCount] = useState(0)


    const [customers, setCustomers] = useState([])
  const findAll = async () => {
    const rs = await customerList.findByName("",1)
    setCustomers(rs)
    const dt = await customerList.getTotalPage()
    let total = Math.ceil(dt.length/5)
    setPageCount(total)
  }

  useEffect(() => {
    findAll()
  }, [])

  const [deleteId, setDeleteId] = useState(0)
  const [deleteName, setDeleteName] = useState("")
  const getPropsCustomer = (id, name) => {
    setDeleteId(id)
    setDeleteName(name)
  }


  const handlePageClick = async(page)=>{
    let currentPage = page.selected+1
        const rs = await customerList.findByName('',currentPage)
        setCustomers(rs)
        setCount(currentPage*5-4)
  }
  
  return (
    <>
      {/*<div className="row mx-0" style={{ marginTop: 96 }}>*/}
      {/*  <img*/}
      {/*    className="img-fluid px-0"*/}
      {/*    style={{ height: 400 }}*/}
      {/*    src="https://blog.topcv.vn/wp-content/uploads/2017/11/ks.jpg"*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</div>*/}
      <div style={{marginTop:'96px'}}>
        <h2 className="text-center fw-bold pt-4 m-5" >
          Danh Sách Tất Cả Các Khách Hàng
        </h2>
      </div>
      <div className="container">
      <div className="row-0 px-0 ">
      <div className="col-6 float-start">
        <NavLink className="ms-5 btn btn-dark" to='/customer-create'>Thêm Khách Hàng Mới</NavLink>
      </div>
      <div className="col-6 float-start">
        <Formik initialValues={{
          name: ""
        }}
          onSubmit={(value) => {
            const search = async () => {
              const rs = await customerList.findByName(value.name)
              if (rs == "") {
                document.getElementById("empty").innerHTML = `Không Tìm Thấy Tên ${value.name}`
              } else {
                document.getElementById("empty").innerHTML = ``
              }
              setCustomers(rs)
            }
            search()
          }}
        >
          <Form>
            <div className="form-group float-end w-75" style={{
             paddingLeft:80
            }}>
              <i className="ti-search ti-search1" /><Field type="text"
                className="form-control d-inline float-start me-3 rounded-pill" style={{
                  width: 250,
                  paddingLeft:35
                }} name="name" aria-describedby="helpId" placeholder="Tìm kiếm..." />
              <button type="submit" className="btn btn-secondary float-start rounded-pill">Tìm kiếm</button>
            </div>
          </Form>
        </Formik>
      </div>

      </div>
      
      <div className="row mx-0 mt-3 px-5 py-1">
        <table className="table table-warning" style={customers == '' ? { display: 'none' } : {}}>
          <thead className="table-primary">
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Số CMND</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Loại khách</th>
              <th>Địa chỉ</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, index) => (
                <tr key={index}>
                  <td scope="row">{count++}</td>
                  <td>{customer.name}</td>
                  <td>{customer.dateOfBirth}</td>
                  <td>{customer.gender == 1 ? 'Nam' : customer.gender == 0 ? 'Nữ' : 'LGBT'}</td>
                  <td>{customer.cmnd}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customerTypeList.filter(customerId => (
                    customerId.id == customer.customerType
                  ))[0]?.name}</td>
                  <td>{customer.address}</td>
                  <td>
                    <NavLink className="btn btn-info" to={`/customer-edit/${customer.id}`}><i className="ti-pencil-alt" /></NavLink>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => getPropsCustomer(customer.id, customer.name)}
                    >
                      <i className="ti-trash" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <ReactPaginate
        previousLabel={'Trước'}
        nextLabel={'Sau'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        activeClassName="active"
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
        
        <div><h4 id="empty" className="text-danger text-center"></h4></div>
      </div>
      </div>
      <ModalDeleteCustomer
          id={deleteId}
          name={deleteName}
          getList={
            () => {
              findAll()
            }
          }
        />
    </>
  )
}
