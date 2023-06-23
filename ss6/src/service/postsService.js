import axios from "axios";

export const findByAll = async () => {
    try {
        return await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
    }catch (e){
        console.log(e)
    }
}

export const save = async (posts) => {
    try {
        return await axios.post(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`,{...posts})
    }catch (e){
        console.log(e)
    }
}