import { Route, Routes } from "react-router";
import  Home from './pages/Home/home'
import Add from './pages/Add/add'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Detail from "./pages/Detail/detail";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Add" element={<Add />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
