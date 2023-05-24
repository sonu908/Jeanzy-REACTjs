import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Allitemsmenu from "./components/Allitemsmenu";
import Forher from "./components/Forher";
import Forhim from "./components/Forhim";
import View from "./components/View";
import Viewwomen from "./components/Viewwomen";

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Allitemsmenu />} />
          <Route path="Forher" element={<Forher />} />
          <Route path="Forhim" element={<Forhim />} />
          <Route path="/Viewjean/:id" element={<View />} />
          <Route path="/Viewwomen/:id" element={<Viewwomen />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
