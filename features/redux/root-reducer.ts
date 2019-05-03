import { combineReducers } from 'redux';
import { RootAction } from './root-actions';
import gender from '../gender/reducer';
import maleProducts from '../maleProducts/reducer';
import cart from '../cart/reducer';
import singleMaleProduct from '../singleMaleProduct/reducer';
import maleShirts from '../maleProductsShirts/reducer';
import maleJeans from '../maleProductsJeans/reducer';
import maleJacket from '../maleProductsJacket/reducer';
import setSingleID from '../singleID/reducer';

const reducerMap = {
  gender,
  maleProducts,
  cart,
  singleMaleProduct,
  maleShirts,
  maleJeans,
  maleJacket,
  setSingleID
};

export type RootState = { [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]> };
export const rootReducer = combineReducers<RootState, RootAction>(reducerMap);