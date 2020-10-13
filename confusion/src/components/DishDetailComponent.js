import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";
class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  renderDish(dish) {
    console.log(dish);
    if (dish === null || dish === undefined){
      return <div></div>
    }
    else{
      return (
      <Card className="col-12 col-md-6">
        <CardImg
          top
          width="100%"
          src={dish.image}
          alt={dish.name}
          className="p-0"
        />
        <CardBody>
          <CardTitle tag="h3">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
    }   
  }
  renderComment(dish) {
    console.log(dish);
    if (dish === null || dish === undefined){
      return <div></div>
    }
    else{
      const comment = dish.comments.map((cmt) => {
      return (
        <div key={cmt.id}>
          <p>{cmt.comment}</p>
          <p>
            --{cmt.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(cmt.date)))}
          </p>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-6 my-2">
        <h3>Comments</h3>
        {comment}
      </div>
    );
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComment(this.props.dish)}
        </div>
      </div>
    );
  }
}
export default DishDetail;
