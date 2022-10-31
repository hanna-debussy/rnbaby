import {combineReducers} from 'redux';
import userSlice from '../slices';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;