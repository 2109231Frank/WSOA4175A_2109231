import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import bigPage from "./Pages/Home";
import Footer from "./Components/Footer";
import blog1 from "./Pages/blogs/blog1";
import blog2 from "./Pages/blogs/blog2";
import blog3 from "./Pages/blogs/blog3";
import blog4 from "./Pages/blogs/blog4";
import Particles from "./Components/Background";

function App()
{

    
    return(
        <div className="App">
       

        <Navbar/>
        <Switch>
            <Route exact path = "/" component = {bigPage}/>
                    <Route exact path = "/blogs/blog1" component = {blog1}/>
                    <Route exact path = "/blogs/blog2" component = {blog2}/>
                    <Route exact path = "/blogs/blog3" component = {blog3}/>
                    <Route exact path = "/blogs/blog4" component = {blog4}/>    
        </Switch>
        <Footer/>
        <div className="plswork">
        <Particles/>
        </div>
        </div>
    );
    
}
export default App;

