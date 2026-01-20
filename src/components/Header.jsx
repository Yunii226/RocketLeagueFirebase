import React, { useContext } from "react";
import logo from "../assets/z2e6qkaekcb11.webp";
import { RootContext } from "../context/RootContext";


const CATEGORIAS = [
    "Car",
    "Decal",
    "Paint",
    "Wheel",
    "Boost",
    "Topper",
    "Antenna",
    "Goal Explosion",
    "Trail"
];

const RAREZAS = [
    "Base",
    "Sport",
    "Luxury",
    "Deluxe",
    "Import",
    "Exotic",
    "Black Market",
    "Special",
    "Premium"
];


const Header = () => {
    const {
        setQuery,
        setCategoriaSeleccionada,
        setRarezaSeleccionada
    } = useContext(RootContext);

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">

                    <div className="d-flex align-items-center">
                        <span className="navbar-brand">RLAPI</span>
                        <img src={logo} alt="RL Logo" width="40" />
                    </div>

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link"
                                onClick={() => {
                                    setCategoriaSeleccionada(null);
                                    setRarezaSeleccionada(null);
                                }}
                            >
                                Todos
                            </button>
                        </li>

                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle btn btn-link"
                                data-bs-toggle="dropdown"
                            >
                                Categorías
                            </button>
                            <div className="dropdown-menu">
                                {CATEGORIAS.map(cat => (
                                    <button
                                        key={cat}
                                        className="dropdown-item"
                                        onClick={() =>
                                            setCategoriaSeleccionada(cat)
                                        }
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle btn btn-link"
                                data-bs-toggle="dropdown"
                            >
                                Rarezas
                            </button>
                            <div className="dropdown-menu">
                                {RAREZAS.map(r => (
                                    <button
                                        key={r}
                                        className="dropdown-item"
                                        onClick={() =>
                                            setRarezaSeleccionada(r)
                                        }
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </li>
                    </ul>

                    <input
                        className="form-control w-25"
                        type="text"
                        placeholder="Buscar"
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
