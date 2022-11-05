import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/search' element={<Search />} />
          
          {/* <Route path='/signup' element={<SignUp />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
