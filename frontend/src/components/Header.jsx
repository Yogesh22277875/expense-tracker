import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/AuthService";

function Header() {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            await logout();

            alert("Logout Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Logout Failed");

        }

    };

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Expense Tracker
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/addExpense">
                        Add Expense
                    </Link>

                    <button
                        className="btn btn-danger ms-3"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    );
}

export default Header;