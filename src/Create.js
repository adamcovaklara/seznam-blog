import { useState } from "react";
import { useHistory } from "react-router-dom";
import krasty1 from './Krasty/PNG/Krasty_01.png';
import krasty2 from './Krasty/PNG/Krasty_02.png';
import krasty3 from './Krasty/PNG/Krasty_03.png';
import krasty4 from './Krasty/PNG/Krasty_04.png';
import krasty5 from './Krasty/PNG/Krasty_05.png';
import krasty6 from './Krasty/PNG/Krasty_06.png';
import krasty7 from './Krasty/PNG/Krasty_07.png';
import krasty8 from './Krasty/PNG/Krasty_08.png';
import krasty9 from './Krasty/PNG/Krasty_09.png';

const krastys = [ krasty1, krasty2, krasty3, krasty4, krasty5, krasty6, krasty7, krasty8, krasty9 ]

const Create = () => {
    const [title, setTitle] = useState('whats it gonna be about?');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ivo');
    const [isPending, setIsPending] = useState(false);
    const [dogo, setDogo] = useState(krastys[0])
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setIsPending(true);

        console.log(blog)
        setTimeout(() => {fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })}, 1000)
    }

    return ( 
        <div className="create">
            <p>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Ivo">Ivo</option>
                    <option value="Seznamak">Seznamak</option>
                </select>
                { !isPending && <button>Add blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
            <div className="krasty"><p><img src={dogo} width={300} height="auto" /></p>
            <button onClick={() => setDogo(krastys[Math.floor(Math.random()*krastys.length)])}>Change dogo</button></div></p>
        </div>
     );
}
 
export default Create;