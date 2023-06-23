import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as furamaService from './service/furamaService';
import Header from '../Header';
import Footer from '../Footer';
import {NavLink} from "react-router-dom";

function FuramaList() {
    const [furamaList, setFuramaList] = useState([]);
    const [facilityList,setFacilityList]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            let response = await furamaService.findAll();
            setFuramaList(response.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            <NavLink to='/createFurama' className='btn btn-outline-primary'  style={{display: 'flex', justifyContent: 'center', alignItems: 'center',high :'30%'}}>Thêm mới dịch vụ</NavLink>
            <div className='row ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',high :'30%'}}>
                {furamaList.map((value, index) => (
                    <div className="card m-5 col-2 d-flex" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title"><img src={value.img} alt="" className="card-img"/></h5>
                            <h6 className="card-text mb-2 text-muted card-text">{value.name}</h6>
                            <h4 className="card-text">
                                {value.facilityService}
                            </h4>
                            <NavLink href="#" className="btn btn-primary">
                                Sửa
                            </NavLink>
                            <NavLink href="#" className="btn btn-danger">
                               Xóa
                            </NavLink>
                        </div>
                    </div>
                ))}

            </div>

            <Footer/>
        </div>
    );
}

export default FuramaList;
