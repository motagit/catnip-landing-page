import './App.scss';
import Navbar from './components/pages/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/catnip-landing-page' exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;