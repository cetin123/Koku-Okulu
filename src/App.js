import React, {PropTypes,ScrollView} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Anasayfa from "./assets/Pages/Anasayfa";
import BizKimiz from "./assets/Pages/BizKimiz";
import Keşfet from "./assets/Pages/Keşfet";
import Navbar from "./assets/Pages/Navbar";
import Sidebar from "./assets/Pages/Sidebar";
import Login from "./assets/Pages/Login";
import Footer from "./assets/Pages/Footer";
import Signup from "./assets/Pages/Signup";
function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
        
          <Route path="/" exact component={Anasayfa} />
          <Route path="/BizKimiz" component={BizKimiz} />
          <Route path="/Keşfet" component={Keşfet} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
         
        </Switch>
        <Footer />
      </Router>
    </>

  );
}
export default App;
// You can think of these components as "pages"
// in your app.
