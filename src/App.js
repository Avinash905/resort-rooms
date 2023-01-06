import "./styles/common.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import RoomData from "./pages/RoomData";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/resort-rooms" element={<Home />} />
        <Route path="/resort-rooms/rooms" element={<Rooms />} />
        <Route path="/resort-rooms/room/:id" element={<RoomData />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
