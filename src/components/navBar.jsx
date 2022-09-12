import { Link, useParams } from "react-router-dom";
import CartWidget from "./CartWidget";





const Navbar = () => {
    const {categoryFilter} = useParams()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid text-center ">
                <Link to={'/'}>
                    <h1 className="navbar-brand">Hogar Inteligente</h1>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link to={"/"}>
                            <h2 className="nav-link active" aria-current="page">Home</h2>
                        </Link>
                        <Link to={`category/asistentes`}>
                            <h2 className="nav-link">Asistentes</h2>
                        </Link>
                        <Link to={`category/iluminacion`}>
                            <h2 className="nav-link">Iluminación</h2>
                        </Link>
                        <Link to={`category/seguridad`}>
                            <h2 className="nav-link">Seguridad</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>

    )
}



export default Navbar;