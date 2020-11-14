import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'
import bride9 from '../../images/groomsmen-bridesmaid/9.jpg'
import bride10 from '../../images/groomsmen-bridesmaid/10.jpg'

import './style.css'

const People = (props) => {
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Groomsmen & Bridesmaid'}/>
                <div className="person-area-menu">
                    <div className="person-btn">
                        <Nav tabs>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Groomsman
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Bridemaids
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride1} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mr Abraham</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride2} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rohan Mithy</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride3} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lily Brown</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride4} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mr Abraham</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride5} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rohan Mithy</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride6} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lily Brown</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="Ceremony-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride5} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mr Abraham</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride6} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rohan Mithy</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride7} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lily Brown</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride8} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mr Abraham</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride9} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rohan Mithy</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride10} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                                        <li><Link to="/"><i className="fa fa-skype"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lily Brown</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        
    )
}

export default People;