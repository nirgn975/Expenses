import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

 import * as fromTransaction from './transaction';
 import * as fromTransactionMonth from './transaction-month';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  transaction: fromTransaction.State;
  transactionMonth: fromTransactionMonth.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  transaction: fromTransaction.reducer,
  transactionMonth: fromTransactionMonth.reducer,
};

/**
 * Layout Reducers
 */
export const getTransactionState = createFeatureSelector<fromTransaction.State>('transaction');
export const getTransactionMonthState = createFeatureSelector<fromTransactionMonth.State>('transactionMonth');
