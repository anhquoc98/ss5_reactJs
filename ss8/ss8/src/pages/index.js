import {deletePost, getAllPost, getPostById} from "./data/data";
import Link from "next/link";
import {useState} from "react";


export default function Home() {
  const [post, setPost] = useState();
  const getData = async (id) => {
    setPost(await getPostById(id))
  }
  const handleDelete = async () => {
    await deletePost(post.id)
    alert("Delete post complete !!!")
  }
  return (
      <div className={"container-fluid"}>
        <h1 className={"d-flex justify-content-center my-3"}>List Posts</h1>
        <Link href={'/components/postCreate/create'} className={"btn btn-primary float-end mx-5 mb-4"}>Create</Link>
        <table className={"table table-bordered text-center"}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {
            getAllPost().map((post, index) => (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>
                    <Link className={"text-decoration-none"}
                          href={`/components/postDetail/${encodeURIComponent(post.id)}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.category}</td>
                  <td>{post.updatedAt}</td>
                  <td>
                    <Link href={`/components/postEdit/${encodeURIComponent(post.id)}`} className="btn btn-primary mx-3">Edit</Link>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={()=> getData(post.id)}
                    >
                      Delete
                    </button>

                   {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal"*/}
                   {/*         data-bs-target="#exampleModal">*/}
                   {/*   Launch demo modal*/}
                   {/* </button> */}
                  </td>
                </tr>
            ))
          }
          </tbody>
        </table>
        <>
          {/* Modal */}
          <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete Post
                  </h5>
                  <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                  />
                </div>
                <div className="modal-body">Do you want delete <span
                    className={"text-danger"}>{post?.title}</span>?
                </div>
                <div className="modal-footer">
                  <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" onClick={() => handleDelete()} className="btn btn-danger"
                          data-bs-dismiss="modal">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

      </div>
  )
}