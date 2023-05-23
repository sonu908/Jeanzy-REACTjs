import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Allitemsmenu from "./components/Allitemsmenu";
import Forher from "./components/Forher";
function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Allitemsmenu />} />
          <Route path="Forher" element={<Forher/>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
