import Header from './components/Header';
import Home from "./components/Home";
import Footer from './components/Footer';
import ReservationPage from "./components/ReservationPage";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reservation-page" element={<ReservationPage/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;