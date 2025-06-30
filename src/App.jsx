import { Routes, Route } from "react-router";

import Links from "./Components/Links.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import AddLink from "./pages/AddLink.jsx";


function App() {
  

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Links" element={<Links/>}/>
        <Route path="/addLink" element={<AddLink/>}/>
      </Route>
    </Routes>
  )
}

export default App
