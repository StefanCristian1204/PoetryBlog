import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Dashboard from "./assets/Pages/Dashboard.jsx";
import {Route, Routes} from "react-router-dom";
import Poem from "./assets/Pages/Poem.jsx";
import Login from "./assets/Pages/Login.jsx";
import Register from "./assets/Pages/Register.jsx";
function App() {
  return (
    <>
        <Routes>
            <Route path={"/dashboard"}  element={<Dashboard/>}></Route>
            <Route path={"/poem/:id"} element={<Poem/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/register"} element={<Register/>}></Route>
        </Routes>
    </>
  )
}

export default App
