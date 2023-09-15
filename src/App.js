import "./App.css";
import Home from "./pages/Home/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
