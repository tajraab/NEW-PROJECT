import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./components/Pages/NewsPage";
import ExchangesPage from "./components/Pages/ExchangesPage";
import Crypto from "./components/Pages/Crypto";
import Footer from "./components/Footer/Footer";
// import LogoPage from './components/Pages/HomePage';
import HomePage from "./components/Pages/HomePage";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
