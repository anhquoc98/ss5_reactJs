import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import * as postsService from "../service/postsService";

function DetailPosts(props) {
    let param = useParams();

    const [searchById, setSearchById] = useState(null)
    useEffect(() => {
        const update = async () => {
            let rs = await postsService.searchById(param.id)
            console.log(rs.data)
            setSearchById(rs.data)
        }
        update()
    }, [param.id]);
    if (!searchById) {
        return null
    }
    return (
        <div>
            <NavLink to='/' className='btn btn-primary'>List</NavLink>
            <table className='table table-primary'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>{searchById.id}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>category</th>
                    <th>{searchById.category}</th>
                </tr>
                <tr>
                    <th>title</th>
                    <th>{searchById.title}</th>
                </tr>
                <tr>
                    <th>content</th>
                    <th>{searchById.content}</th>
                </tr>
                <tr>
                    <th>slug</th>
                    <th>{searchById.slug}</th>
                </tr>
                <tr>
                    <th>time</th>
                    <th>{searchById.updatedAt}</th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DetailPosts;