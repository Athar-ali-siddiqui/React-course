import React from 'react';
import {Breadcrumb, BreadcrumbItem, Label, Col, Button, Row } from "reactstrap";
import { LocalForm, Errors, Control } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        console.log("Current state is :" + JSON.stringify(values))
        alert("Current state is :" + JSON.stringify(values))
    }
    
    
    render() {
       
        return(
            <div className="container">
                <div className="row ">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                  </Breadcrumb>
                 </div>
                <div className="row row-content">
                    <div className="col-12 ">
                       <h2>Contact Us</h2>
                       <hr/>
                    </div>
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" className="form-control" name="firstname" id="firstname" placeholder="Firstname" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Lastname</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" className="form-control" name="lastname" id="lastname" placeholder="Lastname" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" className="form-control" name="telnum" id="telnum" placeholder="Contact no." />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" className="form-control" name="email" id="email" placeholder="Email"  />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6 ,offset:2}} >
                                    <div className="form-check">
                                        <Label check >
                                            <Control.checkbox model=".agree" className="form-check-input" type='checkbox'  name='agree' />{' '}
                                            <strong><p>May we contact you?</p></strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3 ,offset:1}} >
                                    <Control.select model="contactType" className="form-control" name="contactType" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for='message' md={2} >Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' className="form-control" name="message" rows="12" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10 ,offset:2}} >
                                    <Button color='primary' type='submit'>Send Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;