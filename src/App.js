import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import blog1 from "./Pages/blogs/blog1";
import blog2 from "./Pages/blogs/blog2";
import blog3 from "./Pages/blogs/blog3";
import blog4 from "./Pages/blogs/blog4";
import blog5 from "./Pages/blogs/blog5";
import blog6 from "./Pages/blogs/blog6";
import blog7 from "./Pages/blogs/blog7";
import blog8 from "./Pages/blogs/blog8";
import blog9 from "./Pages/blogs/blog9";
import blog10 from "./Pages/blogs/blog10";
import blog11 from "./Pages/blogs/blog11";
import Particles from "./Components/Background";
import FriendBox from "./Components/FriendsWindow";

function App()
{

    
    return(
        <div className="App">
       

        <Navbar/>
        <FriendBox/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
                    <Route exact path = "/blogs/blog1" component = {blog1}/>
                    <Route exact path = "/blogs/blog2" component = {blog2}/>
                    <Route exact path = "/blogs/blog3" component = {blog3}/>
                    <Route exact path = "/blogs/blog4" component = {blog4}/>
                    <Route exact path = "/blogs/blog5" component = {blog5}/>
                    <Route exact path = "/blogs/blog6" component = {blog6}/>
                    <Route exact path = "/blogs/blog7" component = {blog7}/> 
                    <Route exact path = "/blogs/blog8" component = {blog8}/>
                    <Route exact path = "/blogs/blog9" component = {blog9}/>
                    <Route exact path = "/blogs/blog10" component = {blog10}/>
                    <Route exact path = "/blogs/blog11" component = {blog11}/>    
        </Switch>
        <Footer/>
        <div className="plswork">
        <Particles/>
        </div>
        </div>
    );
    
};
export default App;

