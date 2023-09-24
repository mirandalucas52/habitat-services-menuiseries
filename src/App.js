import "./App.css";
import Home from "./pages/Home/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
