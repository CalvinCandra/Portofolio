import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
