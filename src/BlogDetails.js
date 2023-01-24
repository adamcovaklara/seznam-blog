import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
    const [data, setData] = useState(null)

    const { id } = useParams()
    const { error, isPending, data: blog } = useFetch("http://localhost:8000/blogs/" + id, "hello", data, setData)

    const history = useHistory();
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            <p>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            <h2>Blog id: { id }</h2>
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            </p>
        </div>
      );
}
 
export default BlogDetails;