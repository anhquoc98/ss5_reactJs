import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as serviceProduct from "../service/serviceProduct";
import {useNavigate} from "react-router-dom";
import * as serviceDonHang from "../service/serviceDonHang";
import * as Yup from "yup";

function Create() {
    let navigate = useNavigate()
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await serviceProduct.findByAll()
            setListProduct(rs.data)
        }
        list()
    }, [])
    return (
        <div>
            <h1>Thêm mới đơn hàng</h1>
            <Formik initialValues={{

                codeDonHang: '',
                date: '',
                quantity: '',
                productId: 2,
                sum: '1',
                typeProduct: ''
            }
            }
                    validationSchema={Yup.object({
                        codeDonHang: Yup.string().required('nhập mã đơn hàng'),
                        date: Yup.string().required('nhập ngày đơn hàng'),
                        quantity: Yup.number().required('nhập ngày đơn hàng').min(0, 'nhập lớn hơn 0')
                    })} onSubmit={async (values) => {
                await serviceDonHang.save(values)
                console.log(values);
                alert("Thêm mới thành công")
                navigate('/')
            }


            }>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="codeDonHang" className="form-label">Mã đơn hàng</label>
                        <Field type="text" className="form-control" name='codeDonHang'
                        />
                        <ErrorMessage name='codeDonHang' style={{color: 'red'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Ngày</label>
                        <Field type="date" className="form-control" name='date'
                        />
                        <ErrorMessage name='date' style={{color: 'red'}}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">số lượng</label>
                        <Field type="text" className="form-control" name='quantity'
                        />
                        <ErrorMessage name='quantity' style={{color: 'red'}}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="productId" className="form-label">sản phẩm</label>
                        <Field component='select' name='productId'>
                            {listProduct.map((value, index) => (
                                <option key={index} value={value.idProduct}>
                                    {value.nameProduct}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <button>
                        Thêm mới
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default Create;