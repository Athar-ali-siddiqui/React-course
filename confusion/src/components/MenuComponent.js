import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

  
  // componentDidMount(){
  //   console.log("Menu's componentDidMount invoked")
  // }
  // componentDidUpdate(){
  //   console.log("Menu's componentDidupdate invoked")
  // }
  function Menu({dishes , onClick}) {
    // console.log("Menu's render invoked")
    const menu = dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-6 my-2">
          <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle tag="h3">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container mt-5">
        <div className="row">{menu}</div>
      </div>
    );
  }

export default Menu;
