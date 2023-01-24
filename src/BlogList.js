import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    console.log(blogs)

    return ( <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
            <p>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </Link>
            </p>
            </div>
        ))}
    </div>
    );
}
 
export default BlogList;