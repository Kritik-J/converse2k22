import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";
import EventPage from "./pages/EventPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/event/:id" element={<EventPage />}></Route>
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
