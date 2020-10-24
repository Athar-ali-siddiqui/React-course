import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal , ModalHeader, ModalBody,Button,Form,Input,FormGroup,Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    
    this.state ={
      isNavOpen : false,
      isModalOpen : false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
  }
  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen,
     
    });
  };
  toggleModal(){
    this.setState({
      isModalOpen : !this.state.isModalOpen,
    })
  };
  handleLogin(event){
    this.toggleModal();
    alert("Name : " +this.username.value+"  Password : "+this.password.value+ "  Remember : "+this.remember.checked )
    event.preventDefault();
  }
  render() {
    return(
      <div>
        <Navbar dark expand="md">
          <div className="container">
          <NavbarBrand className="mr-auto" href="/" tag="h2">
          <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
          </NavbarBrand>
          <NavbarToggler className='ml-auto' onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar >
              <Nav navbar className="m-auto">
                <NavItem className="mx-2">
                  <NavLink to="/home" className="nav-link">
                    <span className=" mx-1 fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem className="mx-2">
                  <NavLink to="/menu" className="nav-link">
                    <span className=" mx-1 fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem className="mx-2">
                  <NavLink to="/aboutus" className="nav-link">
                    <span className=" mx-1 fa fa-info fa-lg"></span>About us
                  </NavLink>
                </NavItem>
                <NavItem className="mx-2">
                  <NavLink to="/contactus" className="nav-link">
                    <span className=" mx-1 fa fa-address-card fa-lg"></span>Contact us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem>
                  <Button outlined onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>LogIn</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-md-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='username' >Username</Label>
                <Input id='username' name='username' type='text' innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='passward' >Passward</Label>
                <Input id='passward' name='passward' type='password' innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check htmlFor='remember' ><Input id='remember' name='remember' type='checkbox' innerRef={(input) => this.remember = input} />Remember me ?</Label>
              </FormGroup>
              <FormGroup className='mt-2'>
                <Button color='primary' type='submit' value='submit'>Login</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
};
export default Header;