import React from 'react';
import {Loading} from './LoadingComponent'
import { Card , CardBody ,CardText ,CardTitle ,CardSubtitle ,CardImg} from 'reactstrap';
import {baseUrl } from '../shared/baseUrl';

function RenderCard({ item , isLoading , errMsg }){
    console.log(item,isLoading,errMsg);
  if(isLoading){
    return(
      <Loading/>
    )
  }
  else if (errMsg){
    return(
      <h4>{errMsg}</h4>
    )
  }
  else{
    return(
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name}/>
        <CardBody>
        <CardTitle tag="h3">{item.name}</CardTitle>
        {item.designation ? <CardSubtitle tag="h5">{item.designation}</CardSubtitle>:null}
        <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    )
  };
}

function Home(props) {
  console.log(props)
  return(
    <div className="container">
      <div className="row my-2">
        <div className="col-12 mt-4">
          <h2>Home</h2>
          <hr/>
        </div>
        <div className="col-12 col-md-4">
          <RenderCard item={props.dish} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg}/>
        </div>
        <div className="col-12 col-md-4">
          <RenderCard item={props.promotion} isLoading={props.promoLoading} errMsg={props.promoErrMsg}/>
        </div>
        <div className="col-12 col-md-4">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )
  
}

export default Home;