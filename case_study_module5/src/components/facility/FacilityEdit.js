import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as facilitiesService from '../../service/facilityService'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup'
import { Oval } from "react-loader-spinner";



export default function FacilityEdit() {



    const [facilitiesType, setFacilitiesType] = useState([])
    const [facilityStandard, setFacilityStandard] = useState([])
    const [facilityRentType, setFacilityRentType] = useState([])
    const [facilityService, setFacilityService] = useState([])
    const [detail, setDetail] = useState()
    const [facility, setFacility] = useState()
    const params = useParams();


    // const getfacilityDetail = async () => {
    //     const rs = await facilitiesService.findById(param.id)
    //     setDetail(rs)
    //     setFacility(rs.)
    // }
    // getfacilityDetail()


    useEffect(() => {
        const getfacilityService = async () => {
            const rs = await facilitiesService.getFacilityService()
            setFacilityService(rs)
        }
        getfacilityService()
    }, [])
    useEffect(() => {
        const fetchAll = async () => {
            const [facilityTypesData, facilityDetail] = await Promise.all(
                [
                    facilitiesService.getFacilitiesType(),
                    facilitiesService.findById(params.id)
                ]
            );
            setFacilitiesType(facilityTypesData)
            setDetail(facilityDetail)
            setFacility(facilityTypesData.filter(ft => ft.id == facilityDetail.facilitiesType)[0]?.name);
        }
        fetchAll();
    }, [params.id])


    useEffect(() => {
        const getfacilityStandard = async () => {
            const rs = await facilitiesService.getFacilitiesStandard()
            setFacilityStandard(rs)
        }
        getfacilityStandard()
    }, [])



    useEffect(() => {
        const getfacilityRentType = async () => {
            const rs = await facilitiesService.getFacilitiesRentType()
            setFacilityRentType(rs)
        }
        getfacilityRentType()
    }, [])


    let navigate = useNavigate()

    if (!facilitiesType) {
        return null
    }

    if (!detail) {
        return null
    }
    return (

        <>
            <Formik initialValues={{
                id: detail?.id,
                name: detail?.name,
                area: detail?.area,
                price: detail?.price,
                rentType: detail?.rentType,
                img: detail?.img,
                people: detail?.people,
                facilitiesType: detail?.facilitiesType,
                standard: detail?.standard,
                description: detail?.description,
                poolarea: detail?.poolarea,
                numberFloors: detail?.numberFloors,
                serviceFree: detail?.serviceFree,
                facilityService: detail?.facilityService
            }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string().required('Không được bỏ trống'),
                        area: Yup.string().required('Không được bỏ trống'),
                        price: Yup.string().required('Không được bỏ trống'),
                        img: Yup.string().required('Không được bỏ trống'),
                        people: Yup.string().required('Không được bỏ trống')














                        ,
                        description: facility == 'Biệt thự' && Yup.string().required('Không được bỏ trống') || facility == 'Căn hộ' && Yup.string().required('Không được bỏ trống'),
                        poolarea: facility == 'Biệt thự' && Yup.string().required('Không được bỏ trống').matches(/^[1-9]\d*$/,'Số tầng phải là số nguyên dương'),
                        numberFloors: facility == 'Biệt thự' && Yup.string().required('Không được bỏ trống') || facility == 'Căn hộ' && Yup.string().required('Không được bỏ trống'),
                        serviceFree: facility == 'Phòng' && Yup.string().required('Không được bỏ trống'),
                    }
                )}
                onSubmit={(value, { setSubmitting }) => {
                    const edit = async () => {
                        await facilitiesService.update(value)
                        setSubmitting(false)
                        toast("Chỉnh Sửa Thành Công")
                        navigate('/facility-list')
                    }
                    edit()
                }}
            >
                {
                    ({ isSubmitting }) => (
                        <Form>
                            <div
                                className="row mx-0"
                                style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
                                <div className="col-5">
                                    {
                                        facility === 'Phòng'
                                        &&
                                        <div>
                                            <h2 className="text-center fw-bold mt-3" >Chỉnh Sửa Thông Tin Phòng</h2>
                                        </div>
                                    }

                                    {
                                        facility === 'Biệt thự'
                                        &&
                                        <div>
                                            <h2 className="text-center fw-bold mt-3">Chỉnh Sửa Thông Tin Biệt Thự</h2>
                                        </div>
                                    }
                                    {
                                        facility === 'Căn hộ'
                                        &&
                                        <div>
                                            <h2 className="text-center fw-bold mt-3">Chỉnh Sửa Thông Tin Căn Hộ</h2>
                                        </div>
                                    }

                                    <div className="dropdown text-center mt-3" style={{ paddingRight: 410 }}>
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {facility}
                                        </button>
                                        <ul className="dropdown-menu" name="facilitiesType">
                                            {
                                                facilitiesType.map((facilities, index) => (
                                                    <li key={index} name="facilitiesType">
                                                        <a name="facilitiesType" value={facilities.id} className="dropdown-item" onClick={() => {
                                                            setFacility(facilities.name)
                                                        }}>
                                                            {facilities.name}
                                                        </a>
                                                    </li>
                                                )
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <table className="" style={{ width: 500 }}>
                                            <tbody>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Tên dịch vụ:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            className="form-control "
                                                            name="name"
                                                            placeholder="Nhập tên dịch vụ"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td>
                                                        <ErrorMessage name="name" className="text-danger" component="span" />
                                                    </td>
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Loại dịch vụ:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field component="select" name="facilitiesType" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            {
                                                                facilitiesType.map((facilitiesTypes) => (
                                                                    <option  key={facilitiesTypes.id} value={facilitiesTypes.id}>{facilitiesTypes.name}</option>
                                                                ))
                                                                
                                                            }
                                                        </Field>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Diện tích sử dụng:
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
                                                <tr>
                                                    <th></th>
                                                    <ErrorMessage name="area" className="text-danger" component="span" />
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Chi phí thuê:
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
                                                <tr>
                                                    <th></th>
                                                    <ErrorMessage name="price" className="text-danger" component="span" />
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Số lượng người:
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
                                                <tr>
                                                    <th></th>
                                                    <ErrorMessage name="people" className="text-danger" component="span" />
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Kiểu thuê:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field component="select" name="rentType" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            {
                                                                facilityRentType.map((facilityRentTypes) => (
                                                                    <option key={facilityRentTypes.id} value={facilityRentTypes.id}>{facilityRentTypes.name}</option>
                                                                ))

                                                            }
                                                        </Field>
                                                    </td>
                                                </tr>
                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Hình ảnh:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            className="form-control "
                                                            name="img"
                                                            placeholder="Nhập đường link hình ảnh"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <ErrorMessage name="img" className="text-danger" component="span" />
                                                </tr>
                                                <tr style={facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                                    { height: 60 } : { display: 'none' }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Tiêu chuẩn phòng:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field component="select" name="standard" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                            {
                                                                facilityStandard.map((facilityStandards) => (
                                                                    <option key={facilityStandards.id} value={facilityStandards.id}>{facilityStandards.name}</option>
                                                                ))
                                                            }
                                                        </Field>
                                                    </td>
                                                </tr>
                                                <tr style={facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                                    { height: 60 } : { display: 'none' }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Mô tả tiện nghi khác:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            className="form-control "
                                                            name="description"
                                                            placeholder="Nhập mô tả tiện nghi khác"
                                                        />
                                                    </td>
                                                </tr>
                                                {
                                                    facility === 'Biệt thự' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="description" className="text-danger" component="span" />
                                                    </tr>
                                                }
                                                {
                                                    facility === 'Căn hộ' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="description" className="text-danger" component="span" />
                                                    </tr>
                                                }
                                                {
                                                    facility == 'Biệt thự' &&
                                                    <tr style={{ height: 60 }}>
                                                        <th>
                                                            <label className="fs-5" htmlFor="">
                                                                Diện tích hồ bơi:
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <Field
                                                                type="text"
                                                                className="form-control "
                                                                name="poolarea"
                                                                placeholder="Nhập diện tích hồ bơi"
                                                            />
                                                        </td>
                                                    </tr>
                                                }
                                                {
                                                    facility === 'Biệt thự' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="poolarea" className="text-danger" component="span" />
                                                    </tr>
                                                }
                                                <tr style={facility === 'Biệt thự' || facility === 'Căn hộ' ?
                                                    { height: 60 } : { display: 'none' }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Số tầng:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            className="form-control "
                                                            name="numberFloors"
                                                            placeholder="Nhập số tầng"
                                                        />
                                                    </td>
                                                </tr>
                                                {
                                                    facility === 'Biệt thự' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="numberFloors" className="text-danger" component="span" />
                                                    </tr>
                                                }
                                                {
                                                    facility === 'Căn hộ' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="numberFloors" className="text-danger" component="span" />
                                                    </tr>
                                                }

                                                <tr style={facility === 'Phòng' ?
                                                    { height: 60 } : { display: 'none' }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Dịch vụ miễn phí:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            className="form-control "
                                                            name="serviceFree"
                                                            placeholder="Nhập dịch vụ miễn phí đi kèm"
                                                        />
                                                    </td>
                                                </tr>
                                                {
                                                    facility === 'Phòng' &&
                                                    <tr>
                                                        <th></th>
                                                        <ErrorMessage name="serviceFree" className="text-danger" component="span" />
                                                    </tr>
                                                }

                                                <tr style={{ height: 60 }}>
                                                    <th>
                                                        <label className="fs-5" htmlFor="">
                                                            Dịch vụ đi kèm:
                                                        </label>
                                                    </th>
                                                    <td>
                                                        <Field component="select" multiple name="facilityService" className="form-select" id="floatingSelect" aria-label="Floating label select example" size={3}>
                                                            {
                                                                facilityService.map((facilityServices) => (
                                                                    <option key={facilityServices.id} value={facilityServices.id}>{facilityServices.name}</option>
                                                                ))
                                                            }
                                                        </Field>
                                                    </td>
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
                                                        <td>
                                                            <button className="btn btn-primary float-end">Xác nhận</button>
                                                        </td>
                                                    </tr>
                                                }

                                            </tbody>
                                        </table>
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
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
