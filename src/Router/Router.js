import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../ShareModules/Navbar/Navbar";
import Footer from "../ShareModules/Footer/Footer";
import { check_token } from "../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Editproduct from "../Components/Products/Editproduct";

const Home = lazy(() => import("../Components/Home/Home"));
const About = lazy(() => import("../Components/About/About"));
const Contact = lazy(() => import("../Components/Contact/Contact"));
const Login = lazy(() => import("../Components/Login/Login"));
const Register = lazy(() => import("../Components/Register/Register"));
const Addproduct = lazy(() => import("../Components/Products/Addproduct"));
const Showproduct = lazy(() => import("../Components/Products/Showproduct"));
const Profile = lazy(() => import("../Components/Profile/Profile"));

export default function Rout() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authentication.isLogin);

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  const PrivateRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/login" />;
  };

  const publicRoutes = [
    { path: "/register", Component: <Register /> },
    { path: "/login", Component: <Login /> },
  ];

  const privateRoutes = [
    { path: "/", Component: <Home /> },
    { path: "/about", Component: <About /> },
    { path: "/contact", Component: <Contact /> },
    { path: "/addpost", Component: <Addproduct /> },
    { path: "/showpost", Component: <Showproduct /> },
    { path: "/profile", Component: <Profile /> },
    { path: "/detail/:id", Component: <Editproduct /> },
  ];

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Router>
        <Navbar />
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.Component} />
          ))}
          {privateRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute>{route.Component}</PrivateRoute>}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}
