import DocRoutes from "./DocRoutes";
import MainLayout from "./components/MainLayout";
import "./mdx-theme.css";

function App() {
  return (
    <MainLayout>
      <DocRoutes />
    </MainLayout>
  );
}

export default App;
