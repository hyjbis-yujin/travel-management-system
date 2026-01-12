import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Employees from "./pages/employees";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/packages" element={<>여행관리</>} />
            <Route path="/employees" element={<>직원관리</>} />
            <Route path="/customers" element={<>유저관리</>} />
            <Route path="/tasks" element={<>업무관리</>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
