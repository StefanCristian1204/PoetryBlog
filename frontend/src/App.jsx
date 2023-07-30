import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Dashboard from "./assets/Pages/Dashboard.jsx";
import {Route, Routes} from "react-router-dom";
import Poem from "./assets/Pages/Poem.jsx";
function App() {
  return (
    <>
        <Routes>
            <Route path={"/dashboard"}  element={<Dashboard/>}></Route>
            <Route path={"/poem/:id"} element={<Poem/>}></Route>
        </Routes>
    </>
  )
}

export default App
