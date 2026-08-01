import axios from "axios";

const BASE_URL = "http://localhost:8080";

export async function checkLogin() {

    try {

        await axios.get(`${BASE_URL}/me`, {
            withCredentials: true
        });

        return true;

    } catch {

        return false;

    }

}

export async function logout() {

    return await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
            withCredentials: true
        }
    );

}