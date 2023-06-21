import axios from "axios";

export const findByAll = async () => {
    try {
        return axios.get(`http://localhost:8080/posts`)
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        return axios.delete(`http://localhost:8080/posts/${id}`)
    } catch (e) {
        console.log(e)
    }
}

export const save = async (posts) => {
    try {
        return axios.post(`http://localhost:8080/posts`, {...posts})
    } catch (e) {
        console.log(e)
    }
}

export const findById =async (id) =>{
    try {
        return  await axios.get(`http://localhost:8080/posts/${id}`);
    }catch (e){
        console.log(e)
    }
}

export const update=async (posts)=>{
    try {
        await axios.put(`http://localhost:8080/posts/${posts.id}`, {...posts})
    }catch (e){
        console.log(e)
    }
}