import axios from "axios";

export const findByAll = async () => {
    try {
        return await axios.get(`http://localhost:8080/api/orders/`)
    }catch (e){
        console.log(e)
    }
}

export const findByProduct = async (product,date) => {
    try {
        return (await axios.get(`http://localhost:8080/donHang?productId_like=${product}&productId_sort=price&_order=asc`)).data
    }catch (e){
        console.log(e)
    }
}

export const save = async (order) => {
    try {
        return  await axios.post(`http://localhost:8080/api/orders`,{...order})
        console.log("oke")
    }catch (e){
        console.log("fail")
        console.log(e)
    }
}

export const orderById = async (id) => {
    try {
        return await axios.get(`http://localhost:8080/donHang/${id}`)
    }catch (e){
console.log(e)
    }
}

export const remove = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/api/orders?id=${id}`)
    }catch (e){
        console.log(e)
    }
}



export const update = async (donHang) => {
    try {
        return await axios.put(`http://localhost:8080/donHang`,{...donHang})
    }catch (e){
        console.log(e)
    }
}
