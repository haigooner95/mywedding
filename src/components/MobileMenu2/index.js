import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom'


export default class MobileMenu2 extends Component {

    state = {
        isMenuShow: false,
        isOpen: false,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
                    <div className="logo2">
                        <h2><Link to='/home'>Harry & Nancy</Link></h2>
                    </div>
                    <ul className="responsivemenu">
                        <li><p onClick={this.setIsOpen}>Home<i className="fa fa-angle-right" aria-hidden="true"></i></p></li>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                    <li><Link to='/'>Home Style 1</Link></li>
                                    <li><Link to='/home2'>Home Style 2</Link></li>
                                    <li><Link to='/home3'>Home Style 3</Link></li>
                                    <li><Link to='/home4'>Home Style 4</Link></li>
                                </CardBody>
                            </Card>
                        </Collapse>
                            <li><Link to='/home'>Couple</Link></li>
                            <li><Link to='/home'>Story</Link></li>
                            <li><Link to='/home'>People</Link></li>
                            <li><Link to='/home'>Events</Link></li>
                            <li><Link to='/home'>Gallery</Link></li>
                            <li><Link to='/home'>Rsvp</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/Blog-details'>Blog Details</Link></li>
                    </ul>
                    
                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
            </div>
        )
    }
}
