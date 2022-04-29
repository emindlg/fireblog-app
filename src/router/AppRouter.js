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
import { useState } from "react";
import { AddBlog } from "../utils/function";

const initialValues = {title:"", imgUrl:"", content:"" }

const AppRouter = () => {

  const [info, setInfo] = useState(initialValues)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateBlog(info)
    }
    else {AddBlog(info)}
  }

  const updateHandler =(id, title, imgUrl, content ) => {
    setInfo({id, title, imgUrl, content });
  }

  return (
    <Router>
        <MyNavbar />
        <Routes>

            <Route path="/" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/NewBlog" element={<NewBlog info={info} setInfo={setInfo} handleSubmit={handleSubmit} />}/>
            <Route path="/UpdateBlog" element={<UpdateBlog updateHandler={updateHandler}/>} />

        </Routes>
    </Router>
  )
}

export default AppRouter;