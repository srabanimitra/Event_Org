
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/events" element={<h1>Events Page</h1>} />
        <Route path="/featured" element={<h1>Featured Page</h1>} />
        <Route path="/admin" element={<h1>Admin Login Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/sponsor" element={<h1>Sponsor Page</h1>} />
        <Route path="/gallery" element={<h1>Gallery Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
