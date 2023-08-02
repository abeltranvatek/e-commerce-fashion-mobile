import {combineReducers} from 'redux';
import authorizeReducer from '~features/auth/redux/auth.reducer';

const rootReducer = combineReducers({
  authorizeReducer: authorizeReducer,
});
export default rootReducer;
