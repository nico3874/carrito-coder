import CartWidget from "./CartWidget";





const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid text-center ">
                <a className="navbar-brand" href="https://#">Hogar Inteligente</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link active" aria-current="page" href="https://#">Home</a>
                        <a className="nav-link" href="https://#">Iluminación</a>
                        <a className="nav-link" href="https://#">Seguridad</a>
                        <a className="nav-link" href="https://#">Asistentes</a>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>

    )
}



export default Navbar;