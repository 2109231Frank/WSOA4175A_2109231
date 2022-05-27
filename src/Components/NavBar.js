import React, { Component } from 'react';
import "../Style/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll'

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
                 
                        <div className='hiddenLinks'>
                            <Link to="top" spy={true} smooth={true} offset={20} duration={1500}>TOP</Link>
                            <Link to="blogs" spy={true} smooth={true} offset={20} duration={1500}>BLOGS</Link>
                            <Link to="wires" spy={true} smooth={true} offset={20} duration={1500}>WIREFRAMES</Link>
                        </div>
                </div>

                <div className='Right'>
                    <Link to="top" spy={true} smooth={true} offset={20} duration={1500}>TOP</Link>
                    <Link to="blogs" spy={true} smooth={true} offset={20} duration={1500}>BLOGS</Link>
                    <Link to="wires" spy={true} smooth={true} offset={20} duration={1500}>WIREFRAMES</Link>
                    <button onClick = {this.toggleNav}><MenuIcon/></button>
                </div>
            </div>
        )
    }
}