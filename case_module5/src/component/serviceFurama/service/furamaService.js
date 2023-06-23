import axios from 'axios';
export const findAll = async(value,currentPage) =>{
    try {

        const rs=(await axios.get(`http://localhost:8080/furamaList?`));
        console.log(rs)
        return rs
    } catch (error) {
        console.log(error)
    }
}
export const getTotalPages = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/facilitiesList`)).data
    } catch (error) {
        console.log(error)
    }
}
export const save = async(facility)=>{
    try {
        await axios.post('http://localhost:8080/facilitiesList',{ ...facility })
    } catch (error) {

    }
}
export const findById = async(id) =>{
    try {
        return (await axios.get(`http://localhost:8080/facilitiesList/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const update = async(facility)=>{
    try {
        await axios.put(`http://localhost:8080/facilitiesList/${facility.id}`,{ ...facility })
    } catch (error) {

    }
}

export const remove = async(id) =>{
    try {
        await axios.delete(`http://localhost:8080/facilitiesList/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const getFacilitiesType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilitiesType'))
    } catch (error) {
        console.log(error)
    }
}
export const getFacilitiesStandard = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityStandard'))
    } catch (error) {
        console.log(error)
    }
}

export const getFacilitiesRentType = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityRentType'))
    } catch (error) {
        console.log(error)
    }
}

export const getFacilityService = async() =>{
    try {
        return (await axios.get('http://localhost:8080/facilityService'))
    } catch (error) {
        console.log(error)
    }
}