import axios from "axios";

export const findByAll = async () => {
    try {
        return await axios.get(`http://localhost:8080/api/product`)
    }catch (e){
        console.log(e)
    }
}