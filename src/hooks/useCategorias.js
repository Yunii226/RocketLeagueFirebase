import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const snap = await getDocs(collection(db, "categorias"));
                setCategorias(
                    snap.docs.map(doc => doc.data())
                );
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategorias();
    }, []);

    return { categorias, loading, error };
};
