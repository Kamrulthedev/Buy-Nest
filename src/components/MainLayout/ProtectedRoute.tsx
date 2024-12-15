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


    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};


export default ProtectedRoute;
