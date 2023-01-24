import { Link } from 'react-router-dom'

const Navbar = () => {
    const link = "http://www.seznam.cz";
    return (
        <nav className="navbar">
            <a href={link}>Seznam homepage</a>
            <h1>Seznam Blog</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#ff6d00',
                    borderRadius: '8px'
                }}>new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;