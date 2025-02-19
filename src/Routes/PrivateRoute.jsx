import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    if(loading){
        return <p>Loading.....</p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
    return children;
};

export default PrivateRoute;