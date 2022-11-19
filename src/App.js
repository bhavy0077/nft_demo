import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./common/Layout";
import Dashboard from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);

  return (
    <div className="App" >
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
