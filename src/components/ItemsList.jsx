import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { useItems } from '../hooks/useItems';
import { RootContext } from '../context/RootContext';
import Tilt from 'react-parallax-tilt';


const ItemsList = () => {
    const { items, loading, error } = useItems();
    const { query } = useContext(RootContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(20);
    const { categoriaSeleccionada, rarezaSeleccionada } = useContext(RootContext);
    useEffect(() => {
        if (!items.length) return;
        if (!query) {
            if (categoriaSeleccionada && rarezaSeleccionada) {
                setFilteredItems(
                    items.filter(item =>
                        item.categoria.name === categoriaSeleccionada &&
                        item.rareza.name === rarezaSeleccionada
                    )
                );
                return;
            }
            else if (categoriaSeleccionada) {
                setFilteredItems(
                    items.filter(item =>
                        item.categoria.name === categoriaSeleccionada
                    )
                );
                return;
            }
            else if (rarezaSeleccionada) {
                setFilteredItems(
                    items.filter(item =>
                        item.rareza.name === rarezaSeleccionada
                    )
                );
                return;
            }
            else {
                setFilteredItems(items);
            }
        } else {
            setFilteredItems(
                items.filter(item =>
                    item.name.toLowerCase().startsWith(
                        query.toLowerCase())
                )
            );
        }
    }, [query, items, categoriaSeleccionada, rarezaSeleccionada]);

    const getDegradado = (rareza_id) => {
        switch (rareza_id) {
            case 1:
                return '';
            case 2:
                return 'linear-gradient(to top, rgba(43, 226, 250, 0.5), rgba(0, 0, 0, 0.044))';
            case 3:
                return 'linear-gradient(to top, rgba(42, 42, 253, 0.5), rgba(0, 0, 0, 0.044))';
            case 4:
                return 'linear-gradient(to top, rgba(255, 255, 0, 0.5), rgba(0, 0, 0, 0.044))';
            case 5:
                return 'linear-gradient(to top, rgba(220, 130, 12, 0.73), rgba(0, 0, 0, 0.044))';
            case 6:
                return 'linear-gradient(to top, rgba(197, 222, 3, 0.57), rgba(0, 0, 0, 0.044))';
            case 7:
                return 'linear-gradient(to top, rgba(162, 0, 255, 0.5), rgba(0, 0, 0, 0.044))';
            case 8:
                return 'linear-gradient(to top, rgba(51, 135, 200, 0.5), rgba(0, 0, 0, 0.044))';
            case 9:
                return 'linear-gradient(to top, rgba(29, 222, 49, 0.58), rgba(0, 0, 0, 0.044))';
            default:
                return '';
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!items.length) return <div>No hay datos</div>;

    return (
        <>
            <div className="mt-4 text-center">
                <h3>Categoría: {categoriaSeleccionada ? categoriaSeleccionada : 'Todas'}</h3>
                <h3>Rareza: {rarezaSeleccionada ? rarezaSeleccionada : 'Todas'}</h3>
            </div>
            <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center align-items-center">
                {filteredItems.slice(0, itemsToShow).map((item, index) => (
                    <div
                        key={item.id}
                        className="col-lg-3 col-md-4 col-sm-6"
                    >
                        <Tilt glareEnable={true}>

                            <div className="border p-2 text-center rounded-3 text-white bg-black position-relative" style={{ overflow: 'hidden' }}>
                                <img src={item.img} alt={item.name} className="img-fluid d-block mx-auto" width={200} height={200} />
                                <h4>{item.name}</h4>
                                <h5>{item.rareza.name}</h5>
                                <h6>{item.min_value} - {item.max_value}</h6>

                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                                    style={{
                                        background: getDegradado(item.rareza.id),
                                    }}
                                >
                                </div>
                            </div>
                        </Tilt>

                    </div>
                ))}
            </div>

            {
                itemsToShow < filteredItems.length && (
                    <div className="text-center my-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => setItemsToShow(itemsToShow + 20)}
                        >
                            Cargar más
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default ItemsList;