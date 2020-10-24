import React from 'react';
import {Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum : '',
            email: '',
            agree: '',           
            contactType:'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum : false,
                email: false,                
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
        
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event){
        console.log("Current state is :" + JSON.stringify(this.state))
        alert("Current state is :" + JSON.stringify(this.state))
        event.preventDefault();
    }
    handleBlur(event){
        const name = event.target.name
        this.setState({
            touched:{...this.state.touched , [name] : true }
        })
    } 
    validate(firstname, lastname, telnum, email) {

        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        console.log(this.state)
        // console.log(email.split(''),email.split('').filter((x) => x==='@').length)
        // console.log(email.search('.com') == email.length - 4)
        if (this.state.touched.firstname && firstname.length < 3){
            errors.firstname = 'First Name should be >= 3 characters';}
        if (this.state.touched.lastname && lastname.length < 3){
            errors.lastname = 'Last Name should be >= 3 characters';}
        if (this.state.touched.telnum && telnum.split('').filter((x)=> x=='0'?x:parseInt(x)).length != telnum.length){
            errors.telnum = 'Tel. Number should contain only numbers';}
        if(this.state.touched.email  ){
            if(email.split('').filter((str) => str === '@').length != 1 || email.search('.com') != email.length - 4){
                errors.email = 'Email should contain a @ and .com';
            }
        }

        return errors;
    }
    render() {
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" id="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleInputChange} onBlur={this.handleBlur} valid={errors.firstname === ''} invalid={errors.firstname !== ''}  />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Lastname</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" id="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleInputChange} onBlur={this.handleBlur} valid={errors.lastname === ''} invalid={errors.lastname !== ''}/>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telnum" id="telnum" placeholder="Contact no." value={this.state.telnum} onChange={this.handleInputChange} onBlur={this.handleBlur} valid={errors.telnum === ''} invalid={errors.telnum !== ''}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="Email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} onBlur={this.handleBlur} valid={errors.email === ''} invalid={errors.email !== ''} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6 ,offset:2}} >
                                    <FormGroup check>
                                        <Label check >
                                            <Input type='checkbox'  name='agree' checked={this.state.agree} onChange={this.handleInputChange}/>{' '}
                                            <strong><p>May we contact you?</p></strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3 ,offset:1}} >
                                    <Input type="select" name="contactType" onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='message' md={2} >Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} rows='12' onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10 ,offset:2}} >
                                    <Button color='primary' type='submit'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
        console.log("after")
    }
}
export default Contact;