import React, { Component } from 'react';
import "../Style/Friend.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import { friendResponses } from '../Helpers/FriendResponses';


export default class FriendBox extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            boxClicked: false
        };
        // this.onClickFunction = this.onClickFunction.bind(this);
        this.toggleFriend = this.toggleFriend.bind(this);
        // this.changeText = this.changeText.bind(this);
    }

    // onClickFunction(){
        toggleFriend()
            {
                this.setState(changeState => ({
                    boxClicked: !changeState.boxClicked
                }));
            };
// toggleFriend();
//         function changeText()
//             {
//                 var randomResponse = friendResponses[Math.floor(Math.random()*friendResponses.length)]
//                 return(randomResponse)
//             };
// changeText();
    // };
   
    render()
    {
        return(
            
            <div className='friendsContainer'>

                <div className = 'notClicked' id = {this.state.boxClicked ? "open" : "close"}>
                    <div className='inheritContent'><p className='boxTitle'>MESSAGES</p>
                    <button className = "openButton" onClick = {this.toggleFriend}><ArrowDownwardIcon/></button>
                    </div>
                </div>
            
                 
                      
                <div className='clicked'  id = {this.state.boxClicked ? "open" : "close"}>
                    <div className='hiddenContent'>
                        <button className = "closeButton" onClick = {this.toggleFriend}><ArrowUpwardIcon/></button>
                        <p className='boxText'>Overloaded...</p>
                    </div>
                </div>
            </div>
        );
    };
};