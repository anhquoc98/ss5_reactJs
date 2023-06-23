import axios from "axios";

export const findByAll = async () => {
    try {
        return await axios.get(` http://localhost:8080/posts`)
    } catch (e) {
        console.log(e)
    }
}

export const save = async (posts) => {
    try {
        return await axios.post(` http://localhost:8080/posts`,{...posts})
    } catch (e) {
        console.log(e)
    }
}

export const searchById = async (id) => {
    try {
        return await axios.get(` http://localhost:8080/posts/${id}`);
    } catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        return await axios.delete(` http://localhost:8080/posts/${id}`);
    } catch (e) {
        console.log(e)
    }
}