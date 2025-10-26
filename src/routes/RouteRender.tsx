import { Route, Routes } from "react-router-dom";
import { Routes as Config } from "../constants/Routes";

const RouteRender: React.FC = () => {
  return (
    <Routes>
      {Config.map((route) => {
        const Component = route.component;
        return (
          <Route key={route.path} path={route.path} element={<Component />} />
        );
      })}
    </Routes>
  );
};

export default RouteRender;
