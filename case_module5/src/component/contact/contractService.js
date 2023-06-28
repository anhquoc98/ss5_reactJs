import axios from "axios";

export const findByName = async(value,currentPage)=>{
    try {
        return (await axios.get(`http://localhost:8080/contractList?contractCode_like=${value}&_page=${currentPage}&_limit=5&_sort=id&_order=desc`)).data
    } catch (error) {
        console.log(error);
    }
}
export const getTotalPages = async()=>{
    try {
        return (await axios.get(`http://localhost:8080/contractList`)).data
    } catch (error) {
        console.log(error);
    }
}
export const save = async(contract)=>{
    try {
        await axios.post(`http://localhost:8080/contractList`,{ ...contract })
    } catch (error) {
        console.log(error)
    }
}
export const remove = async(id)=>{
    try {
        await axios.delete(`http://localhost:8080/contractList/${id}`)
    } catch (error) {
        console.log(error)
    }
}