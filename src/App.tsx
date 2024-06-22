import { useEffect } from "react";
import DocRoutes from "./DocRoutes";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <MainLayout>
      <DocRoutes />
    </MainLayout>
  );
}

export default App;
