import {useAuthContext} from "./useAuthContext.jsx";
import {useState} from "react";
import axios from "axios";


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();
    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // const response = await axios.post("http://localhost:8080/api/auth/login",JSON.stringify(username,password))
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update the authContext
            dispatch({ type: "LOGIN", payload: json });
        }
        setIsLoading(false);
    };
    return { login, isLoading, error };
}
