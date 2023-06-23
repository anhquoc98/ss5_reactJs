import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as postsService from "../service/postsService";
import * as Yup from "yup";
import slugify from "slugify";

export function CreatePosts() {
    let navigate = useNavigate();
    const currentDateTime = new Date().toLocaleString();
    return (
        <div>
            <h1>Create</h1>
            <Formik initialValues={{
                title: '',
                category: '',
                content: '',
                // slug: slugify(title, {lower: true, strict: true}),
                updatedAt: currentDateTime
            }
            }
                    validationSchema={Yup.object({
                        title: Yup.string().required('input title'),
                        category: Yup.string().required('input category'),
                        content: Yup.string().required('input content')
                    })}
                    onSubmit={async (values) => {
                        await postsService.save(values)
                        alert('update thành công')
                        navigate('/')
                    }
                    }>
                <Form>
                    <div  className="mb-3">
                        <label>Title</label>
                        <Field className="form-control" type='text' name='title'/>
                        <ErrorMessage name='title'/>
                    </div>
                    <div className="mb-3">
                        <label>category</label>
                        <Field type='text' className="form-control" name='category'/>
                        <ErrorMessage name='category' className='text-danger'/>
                    </div>
                    <div className="mb-3">
                        <label>content</label>
                        <Field type='text' className="form-control" name='content'/>
                        <ErrorMessage name='content'/>
                    </div>
                    <button type='submit'>Create</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePosts;