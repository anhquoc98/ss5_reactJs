import axios from "axios";
export const findByName = async(value,currentPage)=>{
    try {
        return (await axios.get(`http://localhost:8080/customerList?name_like=${value}&_page=${currentPage}&_limit=5&_sort=id&_order=desc`)).data
    } catch (error) {
        console.log(error);
    }
}
export const getTotalPage = async()=>{
    try {
        return (await axios.get(`http://localhost:8080/customerList`)).data
    } catch (error) {
        console.log(error);
    }
}

export const save = async(customer)=>{
    try {
        await axios.post(`http://localhost:8080/customerList`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}

export const update = async(customer)=>{
    try {
        await axios.put(`http://localhost:8080/customerList/${customer.id}`,{ ...customer })
    } catch (error) {
        console.log(error);
    }
}
export const findById = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/customerList/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id)=>{
    try {
         await axios.delete(`http://localhost:8080/customerList/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const customerTypeList = async()=>{
    try {
        return (await axios.get(`http://localhost:8080/customerTypeList`)).data
    } catch (error) {
        console.log(error);
    }
}