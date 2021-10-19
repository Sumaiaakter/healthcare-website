import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

import Home from './Pages/Home/Home/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Home/Services/Services';
import About from './Pages/Home/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Academics from './Pages/Home/Academics/Academics';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          {/* <Footer></Footer> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/academic">
              <Academics></Academics>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
