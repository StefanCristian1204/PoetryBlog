import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Dashboard from "./assets/Pages/Dashboard.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Poem from "./assets/Pages/Poem.jsx";
import Login from "./assets/Pages/Login.jsx";
import Register from "./assets/Pages/Register.jsx";
import {useAuthContext} from "./hooks/useAuthContext.jsx";
function App() {
    const {user} = useAuthContext();
  return (
    <>
        <Routes>
            <Route path={"/dashboard"}  element={user ? <Dashboard/> : <Navigate to={"/login"}/>}></Route>
            <Route path={"/poem/:id"} element={user ? <Poem/> : <Navigate to={"/login"}/>}></Route>
            <Route path={"/login"} element={!user ? <Login/> : <Navigate to={"/dashboard"}/>}></Route>
            <Route path={"/register"} element={!user ? <Register/> : <Navigate to={"/dashboard"}/>}></Route>
        </Routes>
    </>
  )
}

export default App
