import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });

    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            await axios.post(
                "http://localhost:8080/register",
                user,
                {
                    withCredentials: true
                }
            );

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    }

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Register
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={user.username}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                >
                                    Register
                                </button>

                            </form>

                            <p className="text-center mt-3">

                                Already have an account?

                                <Link to="/login">
                                    {" "}Login
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;