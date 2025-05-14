import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import { FoodProvider } from "./Context/FoodContex";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Map from "./Pages/Map";
import 'leaflet/dist/leaflet.css';


function App() {
  const { pathname1 } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname1]);
  return (
    <FoodProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<Map/>} />
        <Route path="/Menu" element={<MenuPage />} />
      </Routes>
    </FoodProvider>
  );
}

export default App;
