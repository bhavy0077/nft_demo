import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./common/Layout";
import Dashboard from "./components";
import Details from "./components/Details";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="error" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
