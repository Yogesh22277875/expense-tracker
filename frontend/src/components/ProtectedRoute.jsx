import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkLogin } from "../services/AuthService";

function ProtectedRoute({ children }) {

    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        async function verify() {

            const status = await checkLogin();

            setLoggedIn(status);
            setLoading(false);

        }

        verify();

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!loggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;