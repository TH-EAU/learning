
import { Routes, Route } from 'react-router-dom';
import CsharpAIndex from "@pages/architecture-trois-tiers/csharp-api/index.mdx";
import ArchitecIndex from "@pages/architecture-trois-tiers/index.mdx";
import ArchitecIntroduction from "@pages/architecture-trois-tiers/introduction.mdx";
import GitAdvancedConcepts from "@pages/git/advanced-concepts.mdx";
import GitFirstSteps from "@pages/git/first-steps.mdx";
import GitIndex from "@pages/git/index.mdx";
import GitIntermediatesConcepts from "@pages/git/intermediates-concepts.mdx";
import GitIntroduction from "@pages/git/introduction.mdx";
import GitProjectGestionWithGit from "@pages/git/project-gestion-with-git.mdx";

const DocsRoutes:React.FC = () => (
  <Routes>
    <Route path="docs">
        <Route path="architecture-trois-tiers"  ><Route path="csharp-api"  ><Route index element={<CsharpAIndex/>} ></Route></Route><Route index element={<ArchitecIndex/>} ></Route><Route path="introduction" element={<ArchitecIntroduction/>} ></Route></Route><Route path="git"  ><Route path="advanced-concepts" element={<GitAdvancedConcepts/>} ></Route><Route path="first-steps" element={<GitFirstSteps/>} ></Route><Route index element={<GitIndex/>} ></Route><Route path="intermediates-concepts" element={<GitIntermediatesConcepts/>} ></Route><Route path="introduction" element={<GitIntroduction/>} ></Route><Route path="project-gestion-with-git" element={<GitProjectGestionWithGit/>} ></Route></Route>
    </Route>
  </Routes>
);

export default DocsRoutes;
