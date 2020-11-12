import React from "react";
import {Loading} from './LoadingComponent';
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from 'react-router-dom';
import {baseUrl } from '../shared/baseUrl';

  // componentDidMount(){
  //   console.log("Menu's componentDidMount invoked")
  // }
  // componentDidUpdate(){
  //   console.log("Menu's componentDidupdate invoked")
  // }
  function Menu({ isLoading, errMsg, dishes }) {
    // console.log("Menu's render invoked")
    if(isLoading){
      return(
        <div className="container">
          <div className="row">
            <Loading/>
          </div>
        </div>
      )
    }
    else if (errMsg){
       return(
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{errMsg}</h4>
            </div>
          </div>
        </div>
      )
    }
    else{
      const menu = dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-6 my-2">
          <Card >
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                  <CardTitle tag="h3">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });
      return (
        <div className="container">
          <div className="row ">
           <Breadcrumb>
              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
           </Breadcrumb>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <h2>Menu</h2>
              <hr/>
            </div>
          
            {menu}
            
          </div>
        </div>
      );
    }
  }

export default Menu;
