import Auth from "./components/auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./components/Home";

function App() {

  return (
    <div>
      <Router basename="/">
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth" element={<Auth />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
