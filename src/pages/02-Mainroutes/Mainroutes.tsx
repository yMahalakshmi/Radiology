import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../00-Header/Header";
import Footer from "../01-Footer/Footer";
import Home from "../../Components/00-Home/Home";
import Functional from "../03-Functional/Functional";
import Teleradiology from "../04-Teleradiology/Teleradiology";
// import Terms from "../03_Terms/Terms";
// import Privacy from "../04_Privacy/Privacy";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/functional" element={<Functional />} />
          <Route path="/teleradiology" element={<Teleradiology />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
