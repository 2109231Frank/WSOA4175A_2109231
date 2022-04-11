import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import blog1 from "./Pages/blogs/blog1";
import Particles from "./Components/Background";

function App()
{

    
    return(
        <div className="App">
       

        <Navbar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/About" component = {About}/>
            <Route exact path = "/Blogs" component = {Blogs}/>
                    <Route exact path = "/blogs/blog1" component = {blog1}/>
        </Switch>
        <Footer/>
        <div className="plswork">
        <Particles/>
        </div>
        </div>
    );
    
}
export default App;

