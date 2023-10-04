import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Protected, Public, Admin } from "./middleware/route";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import ApplyDoctor from "./pages/ApplyDoctor";
import Error from "./pages/Error";
import AboutABHA from "./pages/AboutABHA/AboutABHA";
import AboutPMJAY from "./pages/AboutPMJAY/AboutPMJAY";
import Abha from "./pages/Abha/Abha";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/Abha" element={<Abha />} />
          <Route path="/AboutABHA" element={<AboutABHA />} />
          <Route path="/AboutPMJAY" element={<AboutPMJAY />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route
            path="/appointments"
            element={
              <Protected>
                <Appointments />
              </Protected>
            }
          />
          <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="/applyfordoctor"
            element={
              <Protected>
                <ApplyDoctor />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/doctors"
            element={
              <Admin>
                <Dashboard type={"doctors"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Protected>
                <Dashboard type={"appointments"} />
              </Protected>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Protected>
                <Dashboard type={"applications"} />
              </Protected>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
