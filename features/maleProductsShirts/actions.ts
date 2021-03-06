import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from '../maleProducts/model';

export const fetchProducts = createAction(
  'shirtsproducts/FETCH_PRODUCTS'
);

export const fetchProductsRequest = createAsyncAction(
  'shirtsproducts/FETCH_PRODUCTS_REQUESTED',
  'shirtsproducts/FETCH_PRODUCTS_SUCCEEDED',
  'shirtsproducts/FETCH_PRODUCTS_FAILED',
)<undefined, ProductItem[], Error>();