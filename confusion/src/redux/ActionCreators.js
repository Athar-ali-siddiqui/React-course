import * as ActionTypes from './ActionTypes';
import {baseUrl } from '../shared/baseUrl';

////////////////////**************** add feedback ****************////////////////////

export const postFeedback = (firstname ,lastname,telnum, email, agree , contactType , message) => (dispatch) => {
   var newFeedback = {
      "firstname": firstname,
      "lastname": lastname,
      "telnum": telnum,
      "email": email,
      "agree": agree,
      "contactType": contactType,
      "message": message,
   };
   newFeedback.date = new Date().toISOString();
   return fetch(baseUrl + 'feedback',{
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers:{
         'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
   })
   .then(response =>{
      if (response.ok){
         return response;
      }
      else{
         var error = new Error("Error " + response.status + " :" + response.statusText)
         error.response = response;
         throw error
      }
   },error => {
      var errmess = new Error(error.message);
      throw errmess;
   })
   .then(response => response.json())
   .then(response => {console.log(response);alert("Thankyou for your feedback : " + JSON.stringify(response))})
   .catch(error => alert('Your feedback could not be posted\nError : '+error.message ))
   
}

////////////////////**************** add comment ****************////////////////////

export const addComment = (comment) => {
   // console.log("At addComment :",comment)
   return ({
   type: ActionTypes.ADD_COMMENT,
   payload:comment
   });
}

export const postComment = (dishId , rating, author , comment) => (dispatch) => {
   var newComment = {
      dishId:dishId , 
      rating:rating , 
      author:author , 
      comment:comment,
   };
   // console.log(newComment);
   newComment.date = new Date().toISOString();
   return fetch(baseUrl + 'comments' ,{
      method: 'POST',
      body:JSON.stringify(newComment),
      headers:{
         'Content-Type':'application/json'
      },
      credentials:'same-origin'
   })
   .then(response =>{
      if (response.ok){
         return response;
      }
      else{
         var error = new Error("Error " + response.status + " :" + response.statusText)
         error.response = response;
         throw error
      }
   },error => {
      var errmess = new Error(error.message);
      throw errmess;
   })
   .then(response => response.json())
   .then(response => {
                     // console.log("here at then: " ,response); 
                     dispatch(addComment(response));
                     })
   .catch(error => alert('Your comment could not be posted\nError : '+error.message ))
   
}


////////////////////**************** DISHES ****************////////////////////

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
   type:ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMsg) => ({
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
            .then(response =>{
               if (response.ok){
                  return response;
               }
               else{
                  var error = new Error("Error " + response.status + " :" + response.statusText)
                  error.response = response;
                  throw error
               }
            },error => {
               var errmess = new Error(error.message);
               throw errmess;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)))
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
            .then(response =>{
               if (response.ok){
                  return response;
               }
               else{
                  var error = new Error('Error ' + response.status + ': ' + response.statusText)
                  error.response = response;
                  throw error
               }
            },error => {
               var errmess = new Error(error.message);
               throw errmess;
            })
            .then(response => response.json())
            .then(promos => dispatch(addPromos(promos)))
            .catch(error => dispatch(promoFailed(error.message)))
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

////////////////////**************** LEADERS ****************////////////////////

export const fetchLeader = () => (dispatch) => {
   dispatch(leaderLoading(true));

   return fetch(baseUrl + 'leaders')
            .then(response =>{
               if (response.ok){
                  return response;
               }
               else{
                  var error = new Error('Error ' + response.status + ': ' + response.statusText)
                  error.response = response;
                  throw error
               }
            },error => {
               var errmess = new Error(error.message);
               throw errmess;
            })
            .then(response => response.json())
            .then(promos => dispatch(addLeader(promos)))
            .catch(error => dispatch(leaderFailed(error.message)))
};


export const leaderLoading = () => ({
   type:ActionTypes.LEADER_LOADING
});

export const leaderFailed = (errMsg) => ({
   type:ActionTypes.LEADER_FAILED,
   payload:errMsg
})

export const addLeader = (leader) => ({
   type:ActionTypes.ADD_LEADER,
   payload:leader
});











