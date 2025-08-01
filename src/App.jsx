import { Routes, Route } from "react-router";
import { AuthProvider } from "./AuthContext";

import MainLayout from "./layouts/MainLayout.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout";

import Home from "./pages/Home.jsx";
import Links from "./pages/Links.jsx";
import AddLink from "./pages/AddLink.jsx";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
        {/* Main Layout Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
        {/* Move Links, AddLink, Logout to ProtectedLayout */}
            <Route path="/links" element={<Links />} />
            <Route path="/addLink" element={<AddLink />} />
            <Route path="/logout" element={<Logout />} />
        </Route>
        {/* Remaining routes... */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
