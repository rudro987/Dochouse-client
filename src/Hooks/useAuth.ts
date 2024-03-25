import { useContext } from "react";
import { AuthContext } from "../Pages/Providers/AuthProvider";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}