import { Button, Card, Col, Collapse, Layout, Row, Typography, Form, Input } from 'antd';
import Grid from '@material-ui/core/Grid';

import logo from './Assets/usmq.png';
import aet from './Assets/aet.png';
import humana from './Assets/humana.png';
import kra from './Assets/kra.png';
import uhs from './Assets/uhs.png';

import heroImg from './Assets/couple.png';
// import aig from './Assets/aig.png';
import all from './Assets/all.png';

import connectImg from './Assets/img/connection.png';
import whatImg from './Assets/img/car.jpeg';
import quote from './Assets/img/quote.png';
import canvas from './Assets/img/canvas.png';
import minutes from './Assets/img/2minutes.png';
import best from './Assets/img/best.png';
import budget from './Assets/img/budget.png';
import { ReactComponent as YourSvg } from './Assets/img/svg_2.svg';
import { ArrowRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import './landing.css';
import { useHistory } from 'react-router-dom';
import React, { Component } from 'react';
import { Content, Header } from 'antd/lib/layout/layout';
import {Link} from "react-router-dom"; 
import {Redirect} from "react-router-dom"; 
import {withRouter } from "react-router-dom";

class Landing extends Component {
    

    render() {
        

        return (

            <div className="landing-page">
                <Layout>
                    <Header>
                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <a>
                                    <img src={logo} width='181' alt='logo' />
                                </a>
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }} className='text-right'>
                                <Button className="callButton">
                                    <a href="">
                                        Call For A Free Quote
                                    </a>
                                </Button>
                            </Col>
                        </Row>
                    </Header>

                    <Content>
                        <div className="container3 ">
                            
                        <div className="inputField">
                        <div className='text'>
                                <h1 className='lPHeading text-center'>
                                Compare Multiple Medicare Insurance Quotes 
                                </h1>

                                <p className="pText"> Explore your health options beyond the Medicare Part A and Part B offered by the government. Select a personalized healthcare plan that is a perfect fit for you and the family. Get a Medicare quote today and lower your overall medical costs. </p>
                            </div>
                            <div className="input">
                            <Input className="inputArea" autoFocus={true} placeholder="Enter Your Zipcode">
                            
                            </Input>
<Link to="/step2">

                            <Button htmlType="button" className="button">
                                Get My Free Quote
                            </Button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Landing