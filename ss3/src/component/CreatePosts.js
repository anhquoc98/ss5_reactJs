import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as postsService from "../service/postsService";
import * as Yup from "yup";

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
                        alert('thêm mới thành công')
                        navigate('/')
                    }
                    }>
                <Form>
                    <div>
                        <label>Title</label>
                        <Field type='text' name='title'/>
                        <ErrorMessage name='title'/>
                    </div>
                    <div>
                        <label>category</label>
                        <Field type='text' name='category'/>
                        <ErrorMessage name='category'/>
                    </div>
                    <div>
                        <label>content</label>
                        <Field type='text' name='content'/>
                        <ErrorMessage name='content'/>
                    </div>
                    <button type='submit'>Create</button>
                </Form>

            </Formik>
        </div>
    );
}

export default CreatePosts;