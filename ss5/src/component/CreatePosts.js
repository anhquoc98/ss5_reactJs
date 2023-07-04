import React from 'react';
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as postsService from "../service/postsService";
import {toast} from "react-toastify";

export function CreatePosts() {
    let navigate = useNavigate()

    let currentDateTime=new Date().toLocaleString();
    return (
        <div>
            <Formik initialValues={{
                id: '',
                title: '',
                content: '',
                category: '',
                updatedAt: currentDateTime


            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('input title'),
                        content: Yup.string().required('input content'),
                        category: Yup.string().required('input category'),
                    })}
                    onSubmit={async (values) => {
                        await postsService.save(values)
                        toast('create success')
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
                    <button className='btn btn-primary'> Create</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePosts;