import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Employees from "./pages/employees";
import Packages from "./pages/packages";
import Customers from "./pages/customers";
import Tasks from "./pages/tasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
