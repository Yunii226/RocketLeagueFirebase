import { useState, useEffect } from 'react';
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import ItemDetail from './ItemsList';

const ItemDetail = () => {
    const { data, loading, error } = useFetch("http://localhost/rlapi/items");

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || !data.items) return <div>No hay datos</div>;

    const items = data.items; // Aquí estaba el problema principal

    return (
        <div className="row align-items-center justify-content-center mt-4">
            {items.map((item, index) => (
                <div 
                    key={item.id}
                    className="col-lg-3 col-md-4 col-sm-6 border p-2 m-2 text-center rounded-3 text-white bg-black position-relative"
                    style={{ overflow: 'hidden' }}
                >
                    <img src={item.img} alt={item.name} className="img-fluid d-block mx-auto" />
                    <h4>{item.name}</h4>
                    <h5>{item.category_id}</h5>
                    <h6>{item.min_value} - {item.max_value}</h6>

                    <div 
                        className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                        style={{ 
                            background: 'linear-gradient(to top, rgba(252, 128, 46, 0.5), rgba(0, 0, 0, 0.044))',
                            pointerEvents: 'none'
                        }}
                    >
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemDetail;