import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import VerificationEmailSent from "./pages/VerificationEmailSent";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification-sent" element={<VerificationEmailSent />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App;
