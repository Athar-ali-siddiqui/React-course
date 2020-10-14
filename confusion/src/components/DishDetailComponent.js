import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";


  function RenderDish({dish}) {
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
  function RenderComment({dish}) {
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
  function DishDetail(props) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComment dish={props.dish} />
        </div>
      </div>
    );
  }

export default DishDetail;
