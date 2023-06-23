import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as postsService from "../service/postsService";

export function EditPosts() {
    let navigate = useNavigate();
    let param=useParams();

    const [searchById,setSearchById]=useState(null)
    useEffect( ()=>{
        const update=async ()=>{
            let rs= await postsService.searchById(param.id)
            console.log(rs.data)
            setSearchById(rs.data)
        }
        update()
    },[param.id]);
    if (!searchById) {
        return null
    }

    return (
        <div>
            <Formik initialValues={{
                id:searchById.id,
                title: searchById.title,
                content: searchById.content,
                category: searchById.category,
                updatedAt: searchById.updatedAt


            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('input title'),
                        content: Yup.string().required('input content'),
                        category: Yup.string().required('input category'),
                    })}
                    onSubmit={async (values) => {
                        await postsService.save(values)
                        alert('update success')
                        navigate('/')
                    }
                    }>
                <Form>
                    <div className='mb-3'>
                        <label htmlFor="content">content</label>
                        <Field type="text" name='content' className='form-control'/>
                        <ErrorMessage name='content' className='err'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="title">title</label>
                        <Field type="text" name='title' className='form-control'/>
                        <ErrorMessage name='title' className='err'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="category">category</label>
                        <Field type="text" name='category' className='form-control'/>
                        <ErrorMessage name='category' className='err'/>
                    </div>
                    <button className='btn btn-primary'> Update</button>
                </Form>
            </Formik>
        </div>
    );
}



export default EditPosts;