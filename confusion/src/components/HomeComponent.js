import React from 'react';
import { Card , CardBody ,CardText ,CardTitle ,CardSubtitle ,CardImg} from 'reactstrap';

function RenderCard({item}){
  console.log(item)
  // item = item.item
  return(
    <Card>
      <CardImg src={item.image} alt={item.name}/>
      <CardBody>
      <CardTitle tag="h3">{item.name}</CardTitle>
      {item.designation ? <CardSubtitle tag="h5">{item.designation}</CardSubtitle>:null}
      <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

function Home(props) {
  console.log(props)
  return(
    <div className="container">
      <div className="row my-2">
        <div className="col-12 col-md-4">
          <RenderCard item={props.dish}/>
        </div>
        <div className="col-12 col-md-4">
          <RenderCard item={props.promotion}/>
        </div>
        <div className="col-12 col-md-4">
          <RenderCard item={props.leader}/>
        </div>
      </div>
    </div>
  )
  
}

export default Home;