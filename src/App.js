import LandingPage from './components/landing-page/LandingPage';
import Auth from './components/auth/Auth'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/auth/" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
