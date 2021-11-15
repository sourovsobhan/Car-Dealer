import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Feature from "./Pages/Home/Feature/Feature";
import Services from "./Pages/Services/Services/Services";
import Review from "./Pages/Review/Review";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Details from "./Pages/Details/Details/Details";
import ManageServices from "./Pages/Services/ManageServices/ManageServices";
import DashBoard from "./Pages/Dashborad/DashBoard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/feauture">
              <Feature></Feature>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
