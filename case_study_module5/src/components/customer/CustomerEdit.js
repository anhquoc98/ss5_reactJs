import { ErrorMessage, Field, Form, Formik } from "formik";
import * as customerList from '../../service/customerService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  * as Yup from 'yup' 
import { Oval } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CustomerEdit() {

  let navigate = useNavigate()
  const [customerTypeList, setCustomerTypeList] = useState([])
  useEffect(()=>{
    const fetchApi = async()=>{
      const rs = await customerList.customerTypeList()
      setCustomerTypeList(rs)
    }
    fetchApi()
  },[])

  let param = useParams()
  const [detail, setDetail] = useState()
  useEffect(()=>{
    const fetchApi = async()=>{
      const rs = await customerList.findById(param.id)
      setDetail(rs)
    }
    fetchApi()
  },[param.id])

  if(!detail){
    return null
  }

  return (
    <>
      <Formik initialValues={{
        id:detail?.id,
        name:detail?.name,
        gender:detail?.gender,
        dateOfBirth:detail?.dateOfBirth,
        cmnd:detail?.cmnd,
        phone:detail?.phone,
        email:detail?.email,
        customerType: detail?.customerType,
        address: detail?.address
      }}
        onSubmit={(values, { setSubmitting }) => {
          const edit = async () => {
            await customerList.update(values)
            setSubmitting(false)
            toast("Chỉnh Sửa Thành Công")
            navigate('/customer-list')
          }
          edit()
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Không được bỏ trống').matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/,'Tên phải đúng định dạng VD: Nguyễn Văn A'),
          gender: Yup.string().required('Không được bỏ trống'),
          dateOfBirth: Yup.string().required('Không được bỏ trống'),
          cmnd: Yup.string().required('Không được bỏ trống')
          .matches(/^[0-9]{9}$/,'Số CMND phải đúng 9 số'),
          phone: Yup.string().required('Không được bỏ trống')
          .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'SĐT phải đúng định dạng VD: 0905.XXX.XXX'),
          email: Yup.string().required('Không được bỏ trống')
          .email('Nhập đúng định dạng Email'),
          address: Yup.string().required('Không được bỏ trống'),
        })}
      >
        {
          ({ isSubmitting }) => (
            <Form>
              <div style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
                <div className="row mx-0">
                  <div className="col-6">
                    <div className="text-center fw-bold">
                      <h2>Thêm Mới Khách Hàng</h2>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <table className="" style={{ width: 500 }}>
                        <tbody>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Họ và tên:
                              </label>
                            </th>
                            <td>
                              <Field
                                type="text"
                                className="form-control "
                                name="name"
                                placeholder="Nhập họ và tên"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="name" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Giới tính:
                              </label>
                            </th>
                            <td>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="inlineRadio1" 
                                  value='1'
                                  />
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                  Nam
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="inlineRadio2" 
                                  value='0'
                                  />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                  Nữ
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="inlineRadio3" 
                                  value='2'
                                  />
                                <label className="form-check-label" htmlFor="inlineRadio3">
                                  LGTB
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="gender" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                              Ngày sinh:
                              </label>
                            </th>
                            <td>
                              <Field
                                type="date"
                                className="form-control"
                                name="dateOfBirth"
                                placeholder="Nhập giới tính"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="dateOfBirth" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Số CMND:
                              </label>
                            </th>
                            <td>
                              <Field
                                type="text"
                                className="form-control"
                                name="cmnd"
                                placeholder="Nhập số CMND"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="cmnd" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Số điện thoại:
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
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="phone" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Email:
                              </label>
                            </th>
                            <td>
                              <Field
                                type="text"
                                className="form-control "
                                name="email"
                                placeholder="Nhập email"
                              />
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="email" className="text-danger" component="span" /></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="floatingSelect">
                                Loại khách:
                              </label>
                            </th>
                            <td>
                              <Field component="select" name="customerType" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                {
                                  customerTypeList.map((customerType) => (
                                      <option value={customerType.id}>{customerType.name}</option>
                                  ))
                                }
                              </Field>
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            </tr>
                          <tr style={{ height: 60 }}>
                            <th>
                              <label className="fs-5" htmlFor="">
                                Địa chỉ:
                              </label>
                            </th>
                            <td>
                              <Field
                                type="text"
                                className="form-control "
                                name="address"
                                placeholder="Nhập địa chỉ"
                                component='textarea'
                              />
                            </td>
                          </tr>
                          <tr>
                            <th></th>
                            <th><ErrorMessage name="address" className="text-danger" component="span" /></th>
                            </tr>
                          {
                            isSubmitting ? <Oval
                              height={80}
                              width={40}
                              color="grey"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel='oval-loading'
                              secondaryColor="grey"
                              strokeWidth={2}
                              strokeWidthSecondary={2}  
                            /> : <tr style={{ height: 120 }}>
                              <td />
                              <td>
                                <button className="btn btn-primary float-start">
                                  Xác nhận
                                </button>
                              </td>
                            </tr>
                          }

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-6 px-0">
                    <img
                      className="w-100 h-100 "
                      src="https://dsa.org.vn/wp-content/uploads/2020/07/Du-kh%C3%A1ch-ngh%E1%BB%89-ch%C3%A2n-t%E1%BA%A1i-Furama-resort-Danang-ch%E1%BB%9D-nh%E1%BA%ADn-ph%C3%B2ng.-1024x699.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

            </Form>
          )
        }

      </Formik>
    </>
  )
}
