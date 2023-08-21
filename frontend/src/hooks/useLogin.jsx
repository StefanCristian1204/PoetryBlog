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
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                    username,
                    password
            });
            setIsLoading(false);
            setError("Username or Password not Valid");
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch({ type: "LOGIN", payload: response.data });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setError("Username or Password not Valid");
        }
        setIsLoading(false);
    };
    return { login, isLoading, error };
}
