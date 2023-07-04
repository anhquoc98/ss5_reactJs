import React, {useEffect, useState} from 'react';
import * as serviceDonHang from "../service/serviceDonHang";
import * as serviceProduct from "../service/serviceProduct";
import * as serviceProductType from "../service/serviceProductType";
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";

function List() {
    const [listProduct, setListProduct] = useState([])
    const [listDonHang, setListDonHang] = useState([])

    useEffect(() => {
        const list = async () => {
            let rs = await serviceDonHang.findByAll()
            setListDonHang(rs.data)
        }
        list()
    }, [])


    useEffect(() => {
        const list = async () => {
            let rs = await serviceProduct.findByAll()
            setListProduct(rs.data)
        }
        list()
    }, [])
    const [idDelete, setIdDelete] = useState(null)
    const [codeDelete, setCodeDelete] = useState(null)

    function getDelete(id, codeDonHang) {
        setIdDelete(id)
        setCodeDelete(codeDonHang)
    }


    async function handelDelete() {
        await serviceDonHang.remove(idDelete)
        let rs = await serviceDonHang.findByAll()
        setListDonHang(rs.data)
    }

    return (
        <div>
            <h1>Danh sách đơn Hàng</h1>
            <Formik initialValues={{
                productId: '',
                date: ''
            }
            } onSubmit={(values) => {

                const findByProduct = async () => {
                    values.productId = parseInt(values.productId)
                    console.log(values)
                    let rs = await serviceDonHang.findByProduct(values.productId)
                    setListDonHang(rs)
                }
                findByProduct()
            }
            }>
                <Form>
                    <Field component='select' name='productId'>
                        {listProduct.map((values, index) => (
                            <option key={index} value={values.idProduct}>
                                {values.nameProduct}
                            </option>
                        ))}
                    </Field>
                    <Field type='date' name='date'/>
                    <button type='search'>Tìm kiếm</button>
                </Form>
            </Formik>
            <NavLink to='/create' className='btn btn-primary'>Thêm mới</NavLink>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá(usd)</th>
                    <th scope="col">Loại sản phẩm</th>
                    <th scope="col">Ngày mua</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng tiền(usd)</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    listDonHang?.map((value, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.codeOrder}</td>
                            <td>{value.product.nameProduct}</td>
                            <td>{value.product.price}</td>
                            <td>{value.product.typeProduct}</td>
                            <td>{value.date}</td>
                            <td>{value.quantity}</td>
                            <td>{value.quantity * value.product.price}</td>
                            <td>
                                <NavLink to={`/edit/${value.id}`} className='btn btn-primary'>Sửa</NavLink>

                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getDelete(value.id, value.codeDonHang)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                }
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
                            Xóa {codeDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                                    onClick={() => handelDelete()}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;