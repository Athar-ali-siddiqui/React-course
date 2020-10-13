import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-6 my-2">
          <Card onClick={() => this.props.onClick(dish.id)}>
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
}
export default Menu;
