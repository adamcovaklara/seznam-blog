import { useHistory } from "react-router-dom";
import BlogList from './BlogList';
import PageList from './PagesList';
import useFetch from './useFetch';
import { useState } from "react";
import logo from './medium.png';
import krasty from './Krasty/PNG/Krasty_01.png';

const Home = () => {
    const [name, setName] = useState('Powered by Klara Soft © 2022');
    const [data, setData] = useState(null)
    const [pages_, setPages] = useState(null)
    const title = `Share your stories with others!`;
  
    const { error, isPending, data: blogs } = useFetch("http://localhost:8000/blogs", name, data, setData)
    const { error_pages, isPending_pages, data: pages } = useFetch("http://localhost:8100/pages", name, pages_, setPages)

    const handleClick = () =>{
        setName('Go brrrr'); 
        <div className="krasty"><img src={krasty} width={300} height="auto" /></div>
    }

    const history = useHistory();
    const handleDelete = (id) => {
        console.log("handle delete " + id)
        //const newBlogs = blogs.filter(blog => blog.id !== id)
        //setData(newBlogs)
        fetch("http://localhost:8000/blogs/" + id, {
          method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="home">
          <p>
            <div className="medium"><img src={logo} width={300} height="auto" /></div>
            {error && <div>{ error }</div>}
            <h1>{title}</h1>
            <p>{ name }</p>
            <button onClick={handleClick} style={{
                    marginTop: '10px',
                    color: "white",
                    backgroundColor: '#ff6d00',
                    borderRadius: '8px'
                }}>Click me</button>
            {error_pages && <div>{ error_pages }</div>}
            {pages && <PageList pages={pages} title="All pages"/>}
            { isPending_pages && <div>Loading...</div>}
            <br/><br/><br/>{blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Ivo')} handleDelete={handleDelete} title="Trending blogs"/>}
            { isPending && <div>Loading...</div>}
            <button onClick={() => setName('pepega')}style={{
                    marginBottom: '10px',
                    color: "white",
                    backgroundColor: '#ff6d00',
                    borderRadius: '8px'
                }}>Dont click here</button>
            <p>{ name }</p>
            <br/>
          </p>
        </div>
      );

 }

export default Home;