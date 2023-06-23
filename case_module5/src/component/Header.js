
// import {NavLink} from "react-router-dom";

import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <>
            <header>
                <nav className="header-fixed">
                    <div
                        style={{ backgroundColor: "#8f972587" }}
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom"
                    >
                        <a
                            href="#"
                            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                            style={{ marginRight: "-220px" }}
                        >
                            <img
                                width="40px"
                                style={{ marginLeft: 100 }}
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png"
                                alt=""
                            />
                        </a>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <NavLink
                                    to='/'
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Khách sạn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Khuyến mãi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="nav-link fs-5 px-4 fw-bold text-dark text-hover"
                                >
                                    Hỗ trợ
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle fs-5 px-4 fw-bold text-dark text-hover"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Quản lí
                                </a>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#fffafa" }}>
                                    <li>
                                        <NavLink className="dropdown-item" to='/listService'>
                                            Dịch vụ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to='/customer'>
                                            Khách hàng
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" to='/contract-list'>
                                            Hợp đồng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="col-md-3 ps-5">
                            <button type="button" className="btn btn-outline-dark me-2 shadow">
                                Đăng nhập
                            </button>
                            <button
                                type="button"
                                className=" btn btn-dark shadow rigister-hover ms-2"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}