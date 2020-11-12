import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";
import {baseUrl } from '../shared/baseUrl';


export const addComment = (dishId , rating, author , comment) =>({
   type: ActionTypes.ADD_COMMENT,
   payload: {
      dishId:dishId , 
      rating:rating , 
      author:author , 
      comment:comment,
   }
});


////////////////////**************** DISHES ****************////////////////////

export const fetchDishes = () => (dispatch) => {
   dispatch(dishLoading(true));

   return fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
};

export const dishLoading = () => ({
   type:ActionTypes.DISHES_LOADING
});

export const dishFailed = (errMsg) => ({
   type:ActionTypes.DISHES_FAILED,
   payload:errMsg
})

export const addDishes = (dishes) => ({
   type:ActionTypes.ADD_DISHES,
   payload:dishes
});

////////////////////**************** COMMENTS ****************////////////////////

export const fetchComments = () => (dispatch) => {

   return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
};

export const addComments = (comments) => ({
   type:ActionTypes.ADD_COMMENTS,
   payload:comments
});;

export const commentsFailed = (errMsg) => ({
   type:ActionTypes.COMMENTS_FAILED,
   payload:errMsg
})

////////////////////**************** PROMOS ****************////////////////////

export const fetchPromos = () => (dispatch) => {
   dispatch(promoLoading(true));

   return fetch(baseUrl + 'promotions')
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
};

export const promoLoading = () => ({
   type:ActionTypes.PROMOS_LOADING
});

export const promoFailed = (errMsg) => ({
   type:ActionTypes.PROMOS_FAILED,
   payload:errMsg
})

export const addPromos = (promos) => ({
   type:ActionTypes.ADD_PROMOS,
   payload:promos
});















