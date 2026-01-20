import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useRarezas = () => {
    const [rareza, setRareza] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRarezas = async () => {
            try {
                const snap = await getDocs(collection(db, "rareza"));
                setRareza(
                    snap.docs.map(doc => doc.data())
                );
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRarezas();
    }, []);

    return { rareza, loading, error };
};
