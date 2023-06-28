import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as furamaService from './service/furamaService';
import Header from '../Header';
import Footer from '../Footer';
import {NavLink} from "react-router-dom";

function FuramaList() {
    const [furamaList, setFuramaList] = useState([]);
    const [facilityList, setFacilityList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let response = await furamaService.findAll();
            setFuramaList(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const listType = async () => {
            let rs =await furamaService.getFacilitiesType()
            setFacilityList(rs.data)
        }
        listType()
    })

    return (
        <div>
            <Header/>
            <div style={{position:'fixed', marginTop:'2%',marginLeft:'15%'}}>
                <label htmlFor="" ><b>Tìm kiếm:</b></label>
                <input type="text" className='form-text'/>
            </div>
            <div style={{textAlignLast:'right',marginRight:'5%', marginTop:'2%'}}>
                <NavLink to='/createFurama' className='btn btn-primary' style={{textAlignLast:"left"}}
                >Thêm mới
                dịch vụ</NavLink>
            </div>
            <div className='row'
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', high: '30%',backGround: 'aquamarine', textAlignLast:'center'}}>
                {furamaList.map((value, index) => (
                    <div className="card m-5 col-2 d-flex" style={{width: '18rem',backGround: 'aquamarine'}}>
                        <div className="card-body">
                            <h5 className="card-title"><img src={value.img} alt="" className="card-img"/></h5>
                            <h6 className="card-text mb-2 text-muted card-text">{value.name}</h6>
                            <h4 className="card-text">
                                {
                                    facilityList.filter(fl=>fl.id == value.facilitiesType)[0]?.name
                                }
                            </h4>
                            <NavLink to="/editFurama" className="btn btn-primary m-2" >
                                Sửa
                            </NavLink>
                            <button className="btn btn-danger">
                                Xóa
                            </button>
                        </div>
                    </div>
                ))}

            </div>

            <Footer/>
        </div>
    );
}

export default FuramaList;
