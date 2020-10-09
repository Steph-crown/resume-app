import React, { Component } from 'react'
import './../css/Nav.css'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
    }

    handleClick() {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    render() {
        var contDisp =  {
             display: this.state.isMenuOpen ? "flex" : "none",
            animationName: this.state.isMenuOpen ? 'content' : "close-content",
            animationDuration: '1s'
        }
        var menuDisp = {
            display: this.state.isMenuOpen ? "none" : "block",
        }
        return (
            <nav>
                 <div>
                    <h2>Steph <span>Resume</span></h2>
                </div>
                
                <div 
                    className="menu" 
                    id='lg-none'
                    onClick={() => this.handleClick()}
                    style={menuDisp}
                >
                    <div></div>
                    <div></div>
                </div>
                
                <div className="menu-content" id='lg-none' style={contDisp}>
                    <p onClick={()=>this.handleClick()}> &times; </p>
                    <div className="middle">
                        <a href="#" className="link">Home</a>
                        <a href="#" className="link">Get Started</a>
                        <a href="#" className="link">My Dashboard</a>
                        <a href="#" className="link">Help</a>
                    </div>
                    <div className="end">
                        <a href="#" className="link ">Sign Up</a>
                        <a href="#" className="link ">Log In</a>
                    </div>
                </div>

                {/* <div className="menu-lg-content " id='lg-flex'> */}
                    
                    <div className="middle-lg " id='lg-flex'>
                        <a href="#" className="link">Home</a>
                        <a href="#" className="link">Get Started</a>
                        <a href="#" className="link">My Dashboard</a>
                        <a href="#" className="link">Help</a>
                    </div>
                    <div className="end-lg " id='lg-flex'>
                        <a href="#" className="link signup">Sign Up</a>
                        <a href="#" className="link login">Log In</a>
                    </div>
                {/* </div> */}
            </nav>
        )
    }
}
