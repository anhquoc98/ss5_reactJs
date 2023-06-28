import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import * as postsService from "../service/postsService";

function DetailPosts(props) {
    let param = useParams();

    const [postById, setPostById] = useState(null)
    useEffect(() => {
        const update = async () => {
            let rs = await postsService.searchById(param.id)
            console.log(rs.data)
            setPostById(rs.data)
        }
        update()
    }, [param.id]);
    if (!postById) {
        return null
    }
    return (
        <div>
            <NavLink to='/' className='btn btn-primary'>List</NavLink>
            <table className='table table-primary'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>{postById.id}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>category</th>
                    <th>{postById.category}</th>
                </tr>
                <tr>
                    <th>title</th>
                    <th>{postById.title}</th>
                </tr>
                <tr>
                    <th>content</th>
                    <th>{postById.content}</th>
                </tr>
                <tr>
                    <th>slug</th>
                    <th>{postById.slug}</th>
                </tr>
                <tr>
                    <th>time</th>
                    <th>{postById.updatedAt}</th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DetailPosts;