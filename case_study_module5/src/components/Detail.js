import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as facilities from '../service/facilityService'



export default function Detail() {

    const [service, setService] = useState([])
    const [standard, setStandard] = useState([])
    const [detail, setDetail] = useState()
    const [rentTypes,setRentType] = useState([])
    useEffect(() => {
        const getService = async () => {
            const rs = await facilities.getFacilityService()
            setService(rs)
        }
        getService()
    }, [])

    useEffect(() => {
        const getRentType = async () => {
            const rs = await facilities.getFacilitiesRentType()
            setRentType(rs)
        }
        getRentType()
    }, [])
    useEffect(() => {
        const getStandard = async () => {
            const rs = await facilities.getFacilitiesStandard()
            setStandard(rs)
        }
        getStandard()
    }, [])
    let param = useParams()

    useEffect(() => {
        const detailShow = async () => {
            const rs = await facilities.findById(param.id)
            setDetail(rs)
        }
        detailShow()
    }, [param.id])

    return (
        <>
            <div className="row mx-0" style={{ marginTop: 96 }}>
                <div className="col-7 float-start" >
                    <img
                        className="box-shadow-card"
                        style={{ width: "100%" }}
                        src={detail?.img}
                        alt=""
                    />
                </div>
                <div className="col-5 float-start ps-3">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th colSpan={2} className="fs-5">
                                    {detail?.name}
                                </th>
                            </tr>
                            <tr>
                                <th style={{ width: 150 }}>Diện tích :</th>
                                <td>
                                    {detail?.area}
                                </td>
                            </tr>
                            <tr>
                                <th>Giá :</th>
                                <td>
                                    {detail?.price}
                                </td>
                            </tr>
                            {
                            detail?.rentType && 
                            <tr>
                            <th>Kiểu thuê :</th>
                            <td>
                                {
                                    rentTypes.filter((facilityRentTypes)=>(
                                        facilityRentTypes.id ==  detail?.rentType 
                                    ))[0]?.name
                                
                                }
                            </td>
                            </tr>
                            }
                            
                            <tr>
                                <th>Số lượng người :</th>
                                <td>
                                    {detail?.people}
                                </td>
                            </tr>
                            {
                                detail?.standard &&
                                <tr>
                                    <th>Tiêu chuẩn phòng:</th>
                                    <td>
                                        {
                                            standard.filter((facilityStandard) => (
                                                facilityStandard.id == detail?.standard
                                            ))[0]?.name
                                        }
                                    </td>
                                </tr>
                            }
                            {
                                detail?.description && <tr>
                                    <th>Mô tả tiện nghi :</th>
                                    <td>
                                        {detail?.description}
                                    </td>
                                </tr>
                            }
                            {
                                detail?.poolarea &&
                                <tr>
                                    <th>Diện tích hồ bơi :</th>
                                    <td>
                                        {detail?.poolarea}
                                    </td>
                                </tr>
                            }
                            {
                                detail?.numberFloors &&
                                <tr>
                                    <th>Số tầng :</th>
                                    <td>
                                        {detail?.numberFloors}
                                    </td>
                                </tr>
                            }
                            {
                                detail?.serviceFree &&
                                <tr>
                                    <th>Dịch vụ miễn phí:</th>
                                    <td>
                                        {detail?.serviceFree}
                                    </td>
                                </tr>
                            }
                            <tr>
                                <th>Dịch vụ đi kèm:</th>
                                <td>
                                    <span> {
                                        service.filter((sv) => {
                                            return detail?.facilityService.map(fs => +fs).indexOf(sv.id) >= 0
                                        }).map(v => v.name).join(', ')} </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}