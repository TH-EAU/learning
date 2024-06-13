import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import AttIntro from "./documents/architecture-trois-tiers/AttIntro.mdx";

const DocRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="docs">
        <Route path="architecture-trois-tiers">
          <Route path="introduction" element={<AttIntro />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default DocRoutes;
