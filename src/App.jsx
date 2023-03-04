import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExamPage from "./components/ExamPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-loulou text-white w-full h-max min-h-[100vh] ">
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route index path="/exam" element={<ExamPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
