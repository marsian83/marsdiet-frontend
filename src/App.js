import Auth from "./components/auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./components/Home";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(()=>{
    axios.get("/protected").then(results=>{console.log(results.data)})
  },[])
  return (
    <div>
      <Router basename="/">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
