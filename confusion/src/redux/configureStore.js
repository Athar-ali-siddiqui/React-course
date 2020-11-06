import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Dishes } from './dishes';
import { InitialFeedback } from './form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const state = createStore(
    combineReducers({
      dishes : Dishes,
      comments : Comments,
      leaders : Leaders,
      promotions : Promotions,
      ...createForms({
        feedback : InitialFeedback
      })
    }),
    applyMiddleware( thunk , logger )
  );
  return state;
};