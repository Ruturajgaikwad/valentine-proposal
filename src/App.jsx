import { Routes, Route, Navigate } from "react-router-dom";
import Ask from "./pages/Ask.jsx";
import Para from "./pages/Para.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Ask />} />
      <Route path="/para" element={<Para />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}