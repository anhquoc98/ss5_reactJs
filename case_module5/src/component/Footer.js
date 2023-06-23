export default function Footer() {
    return (
        <footer className="container-fluid p-0" style={{ position: "relative" }}>
            <div
                className="text-white text-center text-lg-start"
                style={{ background: "#8f972587" }}
            >
                <div className="container p-4">
                    <div className="row mt-4 mx-0">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h4
                                className="text-uppercase mb-4"
                                style={{
                                    color: "#cbbe73",
                                    fontWeight: "bold",
                                    fontFamily: "Al Nile"
                                }}
                            >
                                Liên Hệ
                            </h4>
                            <p>
                                103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn,
                                Tp. Đà Nẵng, Việt Nam 7.0 km từ Sân bay Quốc tế Đà Nẵng
                            </p>
                            <p>
                                Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666 Email:
                                reservation@furamavietnam.com www.furamavietnam.com
                            </p>
                            <div className="mt-4">
                                <a>
                                    <i className="ti-facebook fs-4 btn btn-dark" />
                                </a>
                                <a>
                                    <i className="ti-youtube fs-4 btn btn-dark" />
                                </a>
                                <a>
                                    <i className="ti-twitter fs-4 btn btn-dark" />
                                </a>
                                <a>
                                    <i className="ti-instagram fs-4 btn btn-dark" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h4
                                className="text-uppercase mb-4 pb-1"
                                style={{
                                    color: "#cbbe73",
                                    fontWeight: "bold",
                                    fontFamily: "Al Nile"
                                }}
                            >
                                Email
                            </h4>
                            <div className="form-outline form-white mb-4">
                                <input
                                    type="text"
                                    id="formControlLg"
                                    className="form-control form-control-lg"
                                    placeholder="Địa chỉ Email..."
                                />
                            </div>
                            <ul className="fa-ul">
                                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home" />
                  </span>
                                    <a href="" className="ms-2 text-footer">
                                        Giá công bố
                                    </a>
                                </li>
                                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope" />
                  </span>
                                    <a href="" className="ms-2 text-footer">
                                        Tuyển dụng
                                    </a>
                                </li>
                                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone" />
                  </span>
                                    <a href="" className="ms-2 text-footer">
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h4
                                className="text-uppercase mb-4 "
                                style={{
                                    color: "#cbbe73",
                                    fontWeight: "bold",
                                    fontFamily: "Al Nile"
                                }}
                            >
                                Giờ Mở Cửa
                            </h4>
                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                <tr>
                                    <td>T2 - T5:</td>
                                    <td>6:00 - 22:00</td>
                                </tr>
                                <tr>
                                    <td>T6 - CN:</td>
                                    <td>6:00 - 24:00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <img
                                style={{ marginTop: "-120px", marginLeft: 835 }}
                                src="https://furamavietnam.com/wp-content/uploads/2019/02/Ariyana-Tourism-Complex-02-2.png"
                                alt="Ariyana Tourism Complex"
                                width="500px;"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023
                    <a className="text-white" href="https://codegym.vn/">
                        codegym.vn
                    </a>
                </div>
            </div>
        </footer>

    )
}