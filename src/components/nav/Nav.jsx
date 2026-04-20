import "./Nav.css";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className="nav-data1">
            <h1> 🎬 Movie Wood</h1>
            <div className="nav-data2">
                <Link to="/">Home</Link>
                <Link to="/movie">Movies</Link>


            </div>

        </div>
    )
}


export default Navbar;