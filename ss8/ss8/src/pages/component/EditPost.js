import slugify from "slugify";
import {useEffect, useState} from "react";
import {editPost, getPostById} from "./../data/data";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useRouter} from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from 'yup';
import Link from "next/link";

const EditPost = () => {
    const date = new Date();
    const updatedAt = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    const [postData, setPostData] = useState();
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        const data = async () => {
            setPostData(await getPostById(id));
        }
        data()
    }, [id]);
    if (!postData) {
        return null;
    }
    return (
        <div className={"container-fluid row"}>
            <div className={"col-4"}/>
            <div className={"col-4"}><h1 className={"d-flex justify-content-center"}>Add New Post</h1>
                <Formik initialValues={{
                    id: postData?.id,
                    title: postData?.title,
                    category: postData?.category,
                    content: postData?.content,
                    updatedAt: updatedAt,
                    author: postData?.author,
                    authorEmail: postData?.authorEmail
                }}
                        validationSchema={
                            Yup.object({
                                title: Yup.string().required("Title is required."),
                                category: Yup.string().required("Category is required."),
                                content: Yup.string().required("Content is required."),
                                author: Yup.string().required("Author is required."),
                                authorEmail: Yup.string().required("Author email is required.")
                            })
                        }
                        onSubmit={(post) => {
                            const edit = async () => {
                                const slug = slugify(post.title, {lower: true, strict: true})
                                await editPost({...post, slug})
                                alert('Edit complete !!!')
                                console.log(await editPost({...post, slug}))
                            }
                            edit()
                        }}>
                    <Form>
                        <div>
                            <label htmlFor="title" className={"fw-bold mt-3"}>
                                Title
                            </label>
                            <Field name={"title"} id={"title"} type={"text"} className="form-control"/>
                            <ErrorMessage
                                name="title"
                                component="span"
                                className="text-danger"
                            /></div>
                        <div>
                            <label htmlFor="category" className={"fw-bold mt-3"}>
                                Category
                            </label>
                            <Field name={"category"} id={"category"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"category"} component={"span"} className={"text-danger"}/>
                        </div>
                        <div>
                            <label htmlFor="content" className={"fw-bold mt-3"}>
                                Content
                            </label>
                            <Field name={"content"} id={"content"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"content"} component={"span"} className={"text-danger"}/>
                        </div>
                        <div>
                            <label htmlFor="author" className={"fw-bold mt-3"}>
                                Author
                            </label>
                            <Field name={"author"} id={"author"} type={"text"} className="form-control"/>
                            <ErrorMessage name={"author"} component={"span"} className={"text-danger"}/>
                        </div>
                        <div>
                            <label htmlFor="authorEmail" className={"fw-bold mt-3"}>
                                Author Email
                            </label>
                            <Field name={"authorEmail"} id={"authorEmail"} type={"text"}
                                   className="form-control"/>
                            <ErrorMessage name={"authorEmail"} component={"span"} className={"text-danger"}/>
                        </div>
                        <Link href={"/"} className={"btn btn-danger ms-3 my-3 float-end"}>Back to List</Link>
                        <button type={"submit"} onClick={() => router.push('/')}
                                className="btn btn-primary mt-3 float-end">Submit
                        </button>
                    </Form>
                </Formik></div>
            <div className={"col-4"}/>
        </div>
    )
}
export default EditPost;