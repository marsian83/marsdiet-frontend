import LandingPage from './components/landing-page/LandingPage';
import Login from './components/auth/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/auth" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
