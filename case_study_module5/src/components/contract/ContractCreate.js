import * as facilitiesLists from '../../service/facilityService'
import * as customer from '../../service/customerService'
import * as contractsList from '../../service/contractService'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner';
export default function ContractCreate() {

    let navigate = useNavigate()
    const [facilitiesList, setFacilitiesList] = useState()
    const [customerList, setCustomerList] = useState()
    useEffect(() => {
        const getFacilitiesList = async () => {
            const rs = await facilitiesLists.getTotalPages()
            setFacilitiesList(rs)
        }
        getFacilitiesList()
    }, [])

    useEffect(() => {
        const getCustomerList = async () => {
            const rs = await customer.getTotalPage()
            setCustomerList(rs)
        }
        getCustomerList()
    }, [])
    if(!facilitiesList){
        return null
    }
    if(!customerList){
        return null
    }
    return (
        <>{console.log(facilitiesList[0]?.id)}
            <Formik initialValues={{
                contractCode: '',
                customerInfo: customerList[0]?.id,
                facilityInfo: facilitiesList[0]?.id,
                dateStart: '',
                dateEnd: '',
                price: '',
                totalPrice: ''
            } 
        }
        
            
                validationSchema={Yup.object(
                    {
                        contractCode: Yup.string().required('Không được bỏ trống').matches(/^SV-[0-9]{4}$/,'MHĐ phải đúng định dạng VD: SV-XXXX (X là chữ số)'),
                        dateStart: Yup.string().required('Không được bỏ trống'),
                        dateEnd: Yup.string().required('Không được bỏ trống'),
                        price: Yup.string().required('Không được bỏ trống').matches(/^[1-9]\d*$/,'Số tiền phải là số nguyên dương'),
                        totalPrice: Yup.string().required('Không được bỏ trống').matches(/^[1-9]\d*$/,'Số tiền phải là số nguyên dương'),
                    }
                )}  
                onSubmit={(value,{ setSubmitting })=>{
                    const createContract = async()=>{
                        await contractsList.save(value)
                        setSubmitting(false)
                        toast("Thêm mới thành công")
                        navigate("/contract-list")
                    }
                    createContract()
                }}
            >
                
                    {
                      ({ isSubmitting })  =>(
                        <Form>
                        <div style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
                        <div className="row mx-0">
                            <div className="col-6">
                                <div className="text-center fw-bold">
                                    <h2>Thêm Mới Hợp Đồng</h2>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <table className="" style={{ width: 500 }}>
                                        <tbody>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Mã hợp đồng:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="contractCode"
                                                        placeholder="Nhập mã hợp đồng"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th><ErrorMessage name="contractCode" className="text-danger" component="span" /></th>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Tên khách hàng:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field component="select" name="customerInfo" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                        {
                                                            customerList.map((customers) => (
                                                                <>
                                                                    <option value={customers.id}>{customers.name}</option>
                                                                </>
                                                            ))
                                                        }
                                                    </Field>
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Tên cơ sở dịch vụ:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field component="select" name="facilityInfo" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                        {
                                                            facilitiesList.map((facilities) => (
                                                                <>
                                                                    <option value={facilities.id}>{facilities.name}</option>
                                                                </>
                                                            ))
                                                        }
                                                    </Field>
                                                </td>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Ngày bắt đầu:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="date"
                                                        className="form-control"
                                                        name="dateStart"
                                                        placeholder="Nhập ngày bắt đầu"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th><ErrorMessage name="dateStart" className="text-danger" component="span" /></th>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Ngày kết thúc:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="date"
                                                        className="form-control"
                                                        name="dateEnd"
                                                        placeholder="Nhập ngày kết thúc"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th><ErrorMessage name="dateEnd" className="text-danger" component="span" /></th>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Số tiền cọc trước:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        placeholder="Nhập số tiền cọc trước"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th><ErrorMessage name="price" className="text-danger" component="span" /></th>
                                            </tr>
                                            <tr style={{ height: 60 }}>
                                                <th>
                                                    <label className="fs-5" htmlFor="">
                                                        Tổng số tiền thanh toán:
                                                    </label>
                                                </th>
                                                <td>
                                                    <Field
                                                        type="text"
                                                        className="form-control "
                                                        name="totalPrice"
                                                        placeholder="Nhập tổng số tiền thanh toán"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th><ErrorMessage name="totalPrice" className="text-danger" component="span" /></th>
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
                                              /> :
                                              <tr style={{ height: 120 }}>
                                              <td>
                                                  <button className="btn btn-primary float-end">
                                                      Xác nhận
                                                  </button>
                                              </td>
                                          </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-6 p-0">
                                <img
                                    className="w-100 h-100 "
                                    src="https://cungbandulich.net/wp-content/uploads/2022/06/uu-dai-diem-den-mua-he-tu-furama-resort-da-nang-1.jpg"
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