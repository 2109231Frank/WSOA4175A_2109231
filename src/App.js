import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";

function App()
{
    return(
        <div className="App">
        <Navbar/>

        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/About" component = {About}/>
            <Route exact path = "/Blogs" component = {Blogs}/>
        </Switch>
        <Footer/>
        </div>
    );
    
}
export default App;

