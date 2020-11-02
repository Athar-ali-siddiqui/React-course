import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Breadcrumb,
  BreadcrumbItem,
  Row,Col,
  Label,

} from "reactstrap";
import { LocalForm, Errors, Control } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len) ;
const minLength = (len) => (val) => val && (val.length >= len) ;
class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isModalOpen : false
    };
    this.toggleModal = this.toggleModal.bind(this)

  }
  toggleModal(){
    this.setState({
      isModalOpen : !this.state.isModalOpen
    })
  }
  handleSubmit(values){
    console.log("Current state is :" + JSON.stringify(values))
    alert("Current state is :" + JSON.stringify(values))
  }
  render(){
    return(
      <>
      <Button color='secondary' onClick={this.toggleModal}>Submit Comment</Button>
      <div className='container'>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" sm={12}>Rating</Label>
                <Col >
                  <Control.select model=".rating" className="form-control" name="rating">
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="commentName" sm={12}>Your Name</Label>
                <Col>
                  <Control.text model='.commentName' name="commentName" className="form-control" placeholder='Name' validators={{ required,minLength:minLength(3),maxLength:maxLength(15)
                  }} />
                  <Errors model='.commentName' className="text-danger small" show="touched" messages={{required: "Required",minLength:"Must have 2 characters",maxLength:"Must be less than 15 characters"
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" sm={12}>Comment</Label>
                <Col>
                  <Control.textarea model='.comment' name='comment' className='form-control' rows='10' placeholder='Comment...'/>
                </Col>
              </Row>
              <Row className='form-group'>
                <Col sm={10} >
                  <Button type='submit' color='primary'>Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
      </>
    )
  }

}

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
      <div>
        <CommentForm/>
      </div>
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
