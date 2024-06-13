import Home from "./views/Home";
import AttIntro from "./documents/architecture-trois-tiers/AttIntro.mdx"
import { FaArchway } from "react-icons/fa";


const routes = {
  root : {
    path: "/",
    element: Home
  },
  docs :{
    path: "docs",
    childrens : [
        {
          path : "architecture-trois-tiers",
          label: "Architecture trois tiers",
          icon: FaArchway,
          childrens : [
            {
              path: "introduction",
              label : "Introduction",
              element : AttIntro,
              icon: FaArchway,
            }
          ]
        }
    ]
  }
}

export default routes;


