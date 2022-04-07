import React, { Component } from 'react';
import Icon from "../Images/MainIcon.jpg";
import {Link} from "react-router-dom";
import "../Style/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';

export default class Navbar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            showLinks: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav()
    {
        this.setState(changeState => ({
            showLinks: !changeState.showLinks
        }));
    }

    render()
    {
        return(
            <div className='navbar'>
                <div className='Left' id = {this.state.showLinks ? "open" : "close"}>
                    <img src={Icon}/>
                        <div className='hiddenLinks'>
                            <Link to = "/">HOME</Link>
                            <Link to = "/About">ABOUT</Link>
                            <Link to = "/Blogs">BLOGS</Link>
                            <Link to = "/Wireframe">WIREFRAME</Link>
                        </div>
                </div>

                <div className='Right'>
                    <Link to = "/">HOME</Link>
                    <Link to = "/About">ABOUT</Link>
                    <Link to = "/Blogs">BLOGS</Link>
                    <Link to = "/Wireframe">WIREFRAME</Link>
                    <button onClick = {this.toggleNav}><MenuIcon/></button>
                </div>
            </div>
        )
    }
}