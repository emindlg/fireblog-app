import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import MyNavbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
        <MyNavbar />
        <Routes>

            <Route path="/" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/NewBlog" element={<NewBlog />}/>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/UpdateBlog" element={<UpdateBlog />} />

        </Routes>
    </Router>
  )
}

export default AppRouter