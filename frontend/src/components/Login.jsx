import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

    const navigate=useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        const formData = new URLSearchParams();

        formData.append("username", username);
        formData.append("password", password);

        try {

            const response = await axios.post(

                "http://localhost:8080/login",

                formData,

                {

                    withCredentials: true,

                    headers: {

                        "Content-Type":
                            "application/x-www-form-urlencoded"

                    }

                }

            );

            console.log(response);

            alert("Login Successful");
            navigate("/");

        }

        catch(error){

            console.log(error);

            alert("Invalid Username or Password");

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Username

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        value={username}

                                        onChange={(e)=>
                                        setUsername(e.target.value)}

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <input

                                        type="password"

                                        className="form-control"

                                        value={password}

                                        onChange={(e)=>
                                        setPassword(e.target.value)}

                                    />

                                </div>

                                <button

                                    className="btn btn-primary w-100"

                                    type="submit"

                                >

                                    Login

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

            <p className="text-center mt-3">

    Don't have an account?

    <Link to="/register">
        {" "}Register
    </Link>

</p>

        </div>

    );

}

export default Login;