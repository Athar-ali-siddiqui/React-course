import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
  console.log(dish)
  return (
    <div className="col-12 col-md-6 ">
      <Card >
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
    </div>
  );
}
function RenderComment({comments}) {
    console.log(comments)
    const comment = comments.map((cmt) => {
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
    <div className="col-12 col-md-6 ">
      <h3>Comments</h3>
      {comment}
    </div>
  );
  
}
function DishDetail({dish ,comments}) {
  return (
    <div className="container">
      <div className="row ">
         <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
         </Breadcrumb>
      </div>
      <h3 className="my-1">{dish.name}</h3>
      <div className="row my-2">
        <RenderDish dish={dish} />
        <RenderComment comments={comments} />
      </div>
    </div>
  );
}

export default DishDetail;
