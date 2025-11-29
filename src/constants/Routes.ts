import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const Routes = [
  {
    path: "/login",
    component: Login,
    protected: false,
  },
  {
    path: "/signup",
    component: Signup,
    protected: false,
  },
  {
    path: "/",
    component: Dashboard,
    protected: true,
  },
];
