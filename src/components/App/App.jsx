import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
import GalleryPage from "../../pages/GalleryPage/GalleryPage";
import JobsPage from "../../pages/JobsPage/JobsPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import AppBar from "../AppBar/AppBar";

export default function App() {
  return (
      <>
          <AppBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
      </>
  );
}
