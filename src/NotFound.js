import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
            </p>
        </div>
     );
}
 
export default NotFound;