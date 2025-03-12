import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceRequestForm from "./ServiceRequestForm";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service-request" element={<ServiceRequestForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
