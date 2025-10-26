import { Route, Routes } from "react-router-dom";
import { Routes as Config } from "../constants/Routes";
import ProtectedRoute from "./Protected";

const RouteRender: React.FC = () => {
  return (
    <Routes>
      {Config.map((route) => {
        const Component = route.component;
        if (route.protected) {
          return (
            <Route element={<ProtectedRoute />}>
              <Route path={route.path} element={<Component />} />
            </Route>
          );
        } else {
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          );
        }
      })}
    </Routes>
  );
};

export default RouteRender;
