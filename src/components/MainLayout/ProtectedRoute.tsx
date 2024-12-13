import { useAppSelector } from "@/Redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const token = useAppSelector((state) => state.auth.token);
    const role = useAppSelector((state) => state.auth.user?.role) ||'';
    const location = useLocation();

    console.log("Token:", token);
    console.log("Role:", role);  

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    if (!allowedRoles.includes(role)) {
        console.log("Role not allowed:", role); 
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};


export default ProtectedRoute;
