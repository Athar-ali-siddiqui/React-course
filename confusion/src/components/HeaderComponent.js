import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state ={
      isNavOpen : false,
    };
  }
  toggleNav(){
    this.setState({
      isNavOpen : !this.state.isNavOpen
    });
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
              <Nav navbar className="ml-auto">
                <NavItem className="m-auto">
                  <NavLink to="/home" className="nav-link">
                    <span className=" mx-1 fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink to="/menu" className="nav-link">
                    <span className=" mx-1 fa fa-list fa-lg"></span>Menu
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink to="/aboutus" className="nav-link">
                    <span className=" mx-1 fa fa-info fa-lg"></span>About us
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink to="/contactus" className="nav-link">
                    <span className=" mx-1 fa fa-address-card fa-lg"></span>Contact us
                  </NavLink>
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
      </div>
    )
  }
};
export default Header;