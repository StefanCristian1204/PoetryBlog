import {useAuthContext} from "./useAuthContext.jsx";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = () => {
        // remove user from stoarage
        localStorage.removeItem("user");

        // remove global value with dispatch
        dispatch({ type: "LOGOUT" });
    };
    return { logout };
};
