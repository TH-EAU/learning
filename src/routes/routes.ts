import Home from "../views/Home";
import pRoutes from "./processedRoutes.json";

const routes = {
  root: {
    path: "/",
    element: Home,
  },
  docs: pRoutes,
};

export default routes;
