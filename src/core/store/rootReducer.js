
import { combineReducers } from 'redux';
import authorizeReducer from '~features/auth/redux/auth.reducer';
import navigationReducer from '../../features/navigation/stack/redux/reducer';

const rootReducer = combineReducers({
  authorizeReducer: authorizeReducer,
  navigationReducer: navigationReducer,
});
export default rootReducer;
