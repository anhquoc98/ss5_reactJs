import React, {useState} from 'react';
import {posts} from "../data/posts";

function ListPosts() {
    const [useList, setUseList] = useState(posts);

    return (
        <div>
            <table className='table table-primary'>
                <thead className='table-danger'>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>category</th>
                    <th>time</th>
                </tr>
                </thead>
                <tbody>
                {useList.map((value,index)=>(
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{value.title}</td>
                        <td>{value.category}</td>
                        <td>{value.updatedAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListPosts;