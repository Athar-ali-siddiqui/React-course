import React from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from './AboutComponent';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { postComment , fetchDishes , fetchComments , fetchPromos , fetchLeader } from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapDispatchToProps = dispatch => ({
  postComment : (dishId , rating, author , comment) => dispatch(postComment(dishId , rating, author , comment)),
  fetchDishes : () => {dispatch(fetchDishes())},
  resetFeedback : () => {dispatch(actions.reset('feedback'))},
  fetchComments : () => {dispatch(fetchComments())},
  fetchPromos : () => {dispatch(fetchPromos())},
  fetchLeader : () => {dispatch(fetchLeader())},
});

const mapStateToProps = state => {
  return{
    dishes : state.dishes ,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders,
  }
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchLeader();
    this.props.fetchComments();
    this.props.fetchDishes();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0] } 
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMsg={this.props.dishes.errMsg}
        leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0] } 
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMsg={this.props.leaders.errMsg}
        promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0] }
        promoLoading={this.props.promotions.isLoading}
        promoErrMsg={this.props.promotions.errMsg}/>
      )
    };
    const DishWithId =  ({match})  =>  {
      // console.log(parseInt(match.params.dishId,10))
      // console.log("comments :", this.props.comments.comments ,"dishes: ", this.props.dishes.dishes,"promotions: ", this.props.promotions.promotions);
      return(
        <DishDetail 
        dish={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMsg={this.props.dishes.errMsg}
        comments={this.props.comments.comments.filter((cmt)=>cmt.dishId === parseInt(match.params.dishId,10))} 
        postComment={this.props.postComment}/>
      )
    };
    return (
      <div >
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu isLoading={this.props.dishes.isLoading} errMsg={this.props.dishes.errMsg} dishes={this.props.dishes.dishes}/>} />
              <Route  path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedback={this.props.resetFeedback}/> } />
              <Route exact path="/aboutus" component={ () => <About isLoading={this.props.leaders.isLoading} errMsg={this.props.leaders.errMsg} leaders={this.props.leaders.leaders}/>} />
              <Redirect to="/home"/>
            </Switch>

          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
