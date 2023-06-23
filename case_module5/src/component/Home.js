import Header from "./Header";
import Footer from "./Footer";


export default function Home() {
    return (
        <>
            <Header/>
            <div >
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                        <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                    </div>
                    {/* The slideshow/carousel */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://phulong.com/UploadFiles/Images/LLN_PV_14_BeachPool.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600 }}
                            />
                            <div className="carousel-caption">
                                <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                                <h2 className="text-slide text-start">
                                    TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
                                </h2>
                                <h2 className="text-slide text-start">
                                    MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
                                </h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://cdn.azvd.asia/images/furama/draf2-m2.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600 }}
                            />
                            <div className="carousel-caption">
                                <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                                <h2 className="text-slide text-start">
                                    TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
                                </h2>
                                <h2 className="text-slide text-start">
                                    MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
                                </h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://seaproperty.vn/wp-content/uploads/2023/04/Melia-HoTram-The-Hamptons-2.jpg"
                                alt=""
                                className="d-block"
                                style={{ width: "100%", height: 600 }}
                            />
                            <div className="carousel-caption">
                                <h2 className="text-slide text-start">KHU NGHỈ DƯỠNG ẨM THỰC </h2>
                                <h2 className="text-slide text-start">
                                    TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG{" "}
                                </h2>
                                <h2 className="text-slide text-start">
                                    MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI{" "}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>
            <div className="row mx-0 px-0 container">
                <div className="row mx-0 mt-5 mb-5 ms-5">
                    <div className="col-4">
                        <h3 style={{ color: "#cbbe73", marginTop: 70 }}>
                            KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ
                            DƯỠNG ẨM THỰC TẠI VIỆT NAM.
                        </h3>
                    </div>
                    <div className="col-4">
                        <img
                            className="w-100 h-100 shadow"
                            src="https://file4.batdongsan.com.vn/2020/04/24/hmcVYWuR/20200424143929-0bb9.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-4">
                        <h3 style={{ color: "#cbbe73", marginTop: 30, textAlign: "center" }}>
                            CÁC LOẠI PHÒNG
                        </h3>
                        <p>
                            Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền thống
                            Việt Nam kết hợp với phong cách Pháp, 2 tòa nhà 4 tầng có hướng nhìn ra
                            biển, nhìn ra hồ bơi trong xanh và những khu vườn nhiệt đới xanh tươi mát.
                            Ngoài ra, khu nghỉ dưỡng Furama còn cung cấp các liệu pháp spa, phòng xông
                            hơi ướt, phòng xông hơi khô, dịch vụ mát-xa cạnh hồ bơi, các dịch vụ thể
                            thao dưới nước và các lớp tập yoga và Thái Cực Quyền trên bãi biển.
                        </p>
                    </div>
                </div>

                <div className="row mx-0">

                    <div className="row container mx-0 px-5 mt-3">
                        <div className="col-6">
                            <img className="w-100 h-100 shadow" src="https://furamavietnam.com/wp-content/uploads/2018/07/CULIRARY.jpg" />
                        </div>
                        <div className="col-6 mt-2">
                            <h2 style={{ color: "#cbbe73", textAlign: "center" }}>ẨM THỰC</h2>
                            <h5 style={{
                                lineHeight: 2,
                                paddingTop: 30
                            }}>
                                Trải nghiệm ẩm thực tại Khu nghỉ có sự pha trộn độc đáo các món ăn truyền thống Việt Nam với nhiều những hương vị ẩm thực châu Á
                                , Ý và châu Âu cùng các món bò nhập khẩu thượng hạng tại đa dạng các nhà hàng, quầy bar đẳng cấp được bao quanh bởi một khu vườn nhiệt đới hay hướng mình ra biển, đón những hơi thở mát mẻ thổi về từ biển đông...
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="row mx-0 mt-5">
                    <div className="row container mx-0 px-5 mt-5">
                        <div className="col-6 mt-2">
                            <h2 style={{ color: "#cbbe73", textAlign: "center" }}>GIẢI TRÍ</h2>
                            <h5 style={{
                                lineHeight: 2,
                                paddingTop: 30
                            }}>
                                Biến kỳ nghỉ dưỡng năng động hơn bằng cách tham gia các hoạt động thể thao trên nước từ chèo thuyền catamaran, lướt ván buồm, chèo thuyền trên biển, lướt vát, đi xe đạp nước, trượt nước, lướt ván, chuối, dù lượn và đa dạng các hoạt động.
                            </h5>
                        </div>
                        <div className="col-6">
                            <img className="w-100 h-100 shadow" src="https://furamavietnam.com/wp-content/uploads/2018/07/RECREATION.jpg"  />
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}