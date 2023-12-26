import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header/AppHeader";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/user-page/UserPage";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage.jsx";
import Price from "./components/Price/Price.jsx";
import FAQ from "./components/Faq/Faq.jsx";
import Support from "./components/support/Support.jsx";
import Policy from "./components/Policy/Policy.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import Leadership from "./components/Leadership/Leadership.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Cookies from "./components/Cookies/Cookies.jsx";
import User from "./components/User/User.jsx";
import Blog from "./pages/user-page/Blog/Blog.jsx";
import axios from "axios";
import { gapi } from "gapi-script";
import WarningAlert from "./components/warning-alert/WarningAlert.jsx";

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  const [userData, setUserData] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  const user_token = localStorage.getItem("user_token");

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '273726765193-khtt9bfjq0r3ojbktp5a9qerh56di00v.apps.googleusercontent.com',
        scope: ''
      })
    }
    gapi.load('client:auth2', start)
  }, []);

  useEffect(() => {
    if (user_token) {
      axios
        .post(
          `http://socarm/api.php?action=get_user_data&token=${user_token}`
        )
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            setUserData(res.data.user_data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const order = (amount) => {
    axios
      .post(`http://socarm/api.php?action=new_order&amount=${amount}`)
      .then((res) => {
        if(res.data.success){
          window.location.replace(res.data.location);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {showAlert && <WarningAlert />}
      <Router>
        <AppHeader
          onOpen={() => setOpenAuth(true)}
          googleAdd={() => setUserData()}
          open={openAuth}
          onClose={() => setOpenAuth(false)}
          nickname={userData.nickname}
          profile_img={userData.profile_img}
          balance={userData.balance}
        />
        <Routes>
          <Route
            path={"/*"}
            element={
              <HomePage
                openAuth={openAuth}
                onOpenAuth={() => setOpenAuth(false)}
                id={userData.id}
                onOrder={(amount) => order(amount)}
                onShowWarning={() => {
                  setShowAlert(true)
                  setTimeout(() => {
                    setShowAlert(false)
                  }, "5200")
                }}
              />
            }
          />
          <Route path={"/profile"} element={<UserPage />} />
          <Route path={"/tariff"} element={<FeedbackPage />} />
          <Route
            path={"/price"}
            element={
              <Price
                openAuth={openAuth}
                onOpenAuth={() => setOpenAuth(false)}
                onOrder={(amount) => order(amount)}
              />
            }
          />
          <Route
            path={"/faq"}
            element={
              <FAQ openAuth={openAuth} onOpenAuth={() => setOpenAuth(false)} />
            }
          />
          <Route
            path={"/support"}
            element={
              <Support
                openAuth={openAuth}
                onOpenAuth={() => setOpenAuth(false)}
              />
            }
          />
          <Route
            path={"/policy-privacy"}
            element={
              <Policy
                openAuth={openAuth}
                onOpenAuth={() => setOpenAuth(false)}
              />
            }
          />
          <Route
            path={"/how-it-works"}
            element={
              <Leadership
                openAuth={openAuth}
                onOpenAuth={() => setOpenAuth(false)}
              />
            }
          />
          <Route path={"/terms-of-use"} element={<Terms />} />
          <Route path={"/cookies"} element={<Cookies />} />
          {userData.nickname && <Route path={"/user"} element={<User data={userData}/>} />}
          <Route path={"/blog"} element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
