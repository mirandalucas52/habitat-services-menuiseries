import "./App.css";
import Home from "./pages/Home/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import HeaderMobile from "./layout/HeaderMobile";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <HeaderMobile />
            <Routes>
                <Route
                    path="/habitat-services-menuiseries/"
                    element={<Home />}
                />
                <Route
                    path="/habitat-services-menuiseries/about/"
                    element={<AboutPage />}
                />
                <Route
                    path="/habitat-services-menuiseries/services/"
                    element={<ServicesPage />}
                />
                <Route
                    path="/habitat-services-menuiseries/news/"
                    element={<NewsPage />}
                />
                <Route
                    path="/habitat-services-menuiseries/contact/"
                    element={<ContactPage />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
