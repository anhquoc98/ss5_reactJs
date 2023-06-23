import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import * as postsService from "../service/postsService";
import * as Yup from "yup";

export function EditPosts() {

    let navigate = useNavigate();

    let param = useParams()
    const [searchById, setSearchById] = useState(null)

    useEffect(() => {
        const getId = async () => {
            let rs = await postsService.findById(param.id)
            setSearchById(rs.data)
            console.log(rs)
        }
        getId()
    }, [param.id])
    if (!searchById) {
        return null
    }
    return (
        <div>
            <h1>Edit</h1>
            <Formik initialValues={{
                id: searchById.id,
                title: searchById.title,
                content: searchById.content,
                category: searchById.category,
                updatedAt: searchById.updatedAt,
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required('input title'),
                        category: Yup.string().required('input category'),
                        content: Yup.string().required('input content')
                    })}
                    onSubmit={async (values) => {
                        await postsService.update(values)
                        alert('update success')
                        navigate('/')
                    }
                    }>
                <Form>
                    <div className="mb-3">
                        <label>Title</label>
                        <Field  className="form-control" type='text' name='title'/>
                        <ErrorMessage name='title'/>
                    </div>
                    <div className="mb-3">
                        <label>category</label>
                        <Field className="form-control" type='text' name='category'/>
                        <ErrorMessage name='category'/>
                    </div>
                    <div className="mb-3">
                        <label>content</label>
                        <Field  className="form-control" type='text' name='content'/>
                        <ErrorMessage name='content'/>
                    </div>
                    <button type='submit'>Edit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EditPosts;