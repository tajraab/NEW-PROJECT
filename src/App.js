import Header from "./components/Header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from './components/Pages/NewsPage';
import ExchangesPage from './components/Pages/ExchangesPage';
import Crypto from './components/Pages/Crypto';
// import LogoPage from './components/Pages/HomePage';
import HomePage from './components/Pages/HomePage';
// import Card from './components/Card/Card';
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
