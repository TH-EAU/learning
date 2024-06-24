const fs = require("fs");
const path = require("path");

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}

const writeFolderStructure = ({
  currentPath = path.join(__dirname, "../pages"),
  basePath = "/",
  folderStructure,
}) => {
  fs.readdirSync(currentPath).forEach((element, index) => {
    const fullPath = path.join(currentPath, element);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    folderStructure.children.push({
      element,
      parent: basePath,
      isDirectory,
      label: element.split(".")[0].split("-").join(" "),
      path:
        basePath.replaceAll("\\", "").replaceAll("/", "") +
        "/" +
        element.split(".")[0],
    });

    if (isDirectory) {
      const children = folderStructure.children[index];
      children.children = [];
      writeFolderStructure({
        currentPath: fullPath,
        basePath: path.join(basePath, element),
        folderStructure: children,
      });
    }

    return folderStructure;
  });
};

const generateRoutesFromStructure = ({
  folderStructure,
  imports,
  routes = "",
}) => {
  folderStructure.children.forEach((element) => {
    const parents = element.parent.split("\\");
    const prefix = parents[parents.length - 1].substring(0, 8);
    const componentName = toPascalCase(
      prefix + " " + element.element.split(".")[0]
    );
    const routePath = element.element.split(".")[0];

    routes += `<Route ${
      routePath === "index" ? "index" : `path="${routePath}"`
    } ${!element.isDirectory ? `element={<${componentName}/>}` : ""} >`;

    if (element.children) {
      routes += generateRoutesFromStructure({
        folderStructure: element,
        imports,
      });
    }

    routes += "</Route>";

    if (!element.isDirectory) {
      imports.push(
        `import ${componentName} from "@pages${
          element.parent.replaceAll("\\", "/") + "/" + element.element
        }";`
      );
    }
  });
  return routes;
};

const folderStructure = { children: [] };
const imports = [];
writeFolderStructure({ folderStructure });

const routes = generateRoutesFromStructure({ folderStructure, imports });

const output = `
import { Routes, Route } from 'react-router-dom';
${imports.join("\n")}

const DocsRoutes:React.FC = () => (
  <Routes>
    <Route path="docs">
        ${routes}
    </Route>
  </Routes>
);

export default DocsRoutes;
`;

fs.writeFileSync(path.join(__dirname, "../DocRoutes.tsx"), output);
fs.writeFileSync(
  path.join(__dirname, "../routes/processedRoutes.json"),
  JSON.stringify(folderStructure.children)
);
console.log("Routes generated successfully.");
