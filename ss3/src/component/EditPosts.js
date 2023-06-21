import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import * as postsService from "../service/postsService";
import * as Yup from "yup";

export function EditPosts() {

    let navigate = useNavigate();

    let param = useParams()
    const [seachById, setSeachById] = useState(null)

    useEffect(() => {
        const getId = async () => {
            let rs = await postsService.findById(param.id)
            setSeachById(rs.data)
            console.log(rs)
        }
        getId()
    }, [param.id])
    if (!seachById) {
        return null
    }

    return (
        <div>
            <h1>Edit</h1>
            <Formik initialValues={{
                id: seachById.id,
                title: seachById.title,
                content: seachById.content,
                category: seachById.category,
                updatedAt: seachById.updatedAt,
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('input title'),
                        category: Yup.string().required('input category'),
                        content: Yup.string().required('input content')
                    })}
                    onSubmit={async (values) => {
                        await postsService.update(values)
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
                    <button type='submit'>Edit</button>
                </Form>

            </Formik>
        </div>
    );
}

export default EditPosts;