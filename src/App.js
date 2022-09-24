import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/events/:id" element={<EventPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
