import React from 'react';

function ContractCreate(props) {
    return (
        <div>
            <div style={{ marginTop: 96, backgroundColor: "rgb(232, 235, 219)" }}>
                <div className="row mx-0">
                    <div className="col-6">
                        <div className="text-center fw-bold">
                            <h2>Thêm Mới Hợp Đồng</h2>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <form action="">
                                <table className="" style={{ width: 500 }}>
                                    <tbody>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Mã hợp đồng:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập mã hợp đồng"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Ngày bắt đầu:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập ngày bắt đầu"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Ngày kết thúc:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập ngày kết thúc"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Số tiền cọc trước:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Nhập số tiền cọc trước"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <th>
                                            <label className="fs-5" htmlFor="">
                                                Tổng số tiền thanh toán:{" "}
                                            </label>
                                        </th>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control "
                                                name=""
                                                placeholder="Nhập tổng số tiền thanh toán"
                                            />
                                        </td>
                                    </tr>
                                    <tr style={{ height: 120 }}>
                                        <td>
                                            <button className="btn btn-primary float-end">
                                                Xác nhận
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
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

        </div>
    );
}

export default ContractCreate;