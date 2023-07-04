import axios from "axios";

export const findByAll = async (name, typeProduct) => {
    try {
        return await axios.get(`  http://localhost:8000/product?nameProduct_like=${name}&typeProduct_like=${typeProduct}&_sort=price&_order=asc`)
    } catch (e) {
        console.log(e)
    }
}