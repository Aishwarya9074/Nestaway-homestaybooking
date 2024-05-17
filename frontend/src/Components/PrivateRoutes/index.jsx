import { checkrole, isAuthenticated } from "../../utils";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute=({role})=>{
    return isAuthenticated()&checkrole(role)?<Outlet/>:<Navigate to="/user/login"/>

}
export default PrivateRoute;