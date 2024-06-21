import AttIndex from "../pages/architecture-trois-tiers/index.mdx";
import AttIntroduction from "../pages/architecture-trois-tiers/introduction.mdx";
import GitIndex from "../pages/git/index.mdx";
import GitIntro from "../pages/git/introduction.mdx";
import GitFirstSteps from "../pages/git/first-steps.mdx";
import GitProjectGestion from "../pages/git/project-gestion-with-git.mdx";
import GitIntermediates from "../pages/git/project-gestion-with-git.mdx";
import GitAdvanced from "../pages/git/advanced-concepts.mdx";

import { RiSpaceShipFill } from "react-icons/ri";
import { IoMdGitMerge } from "react-icons/io";

export const docsRoute = [
  {
    label: "Architecture trois tiers",
    path: "architecture-trois-tiers",
    element: AttIndex,
    icon: RiSpaceShipFill,
    children: [
      {
        label: "Introduction",
        path: "introduction",
        element: AttIntroduction,
      },
    ],
  },
  {
    label: "Git",
    path: "git",
    element: GitIndex,
    icon: IoMdGitMerge,
    children: [
      {
        label: "Introduction",
        path: "introduction",
        element: GitIntro,
      },
      {
        label: "Premiers pas avec Git",
        path: "premiers-pas-avec-git",
        element: GitFirstSteps,
      },
      {
        label: "Gestion de projet avec Git",
        path: "project-gestion-with-git",
        element: GitProjectGestion,
      },
      {
        label: "Concepts Intermédiaires",
        path: "intermediates-concept",
        element: GitIntermediates,
      },
      {
        label: "Concepts Avancés",
        path: "advanced-concepts",
        element: GitAdvanced,
      },
    ],
  },
];
