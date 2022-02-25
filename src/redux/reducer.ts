// import { ListState } from './../modules/editorList/redux/listReducer';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from '../modules/auth/redux/authReducer';
import intlReducer, { IntlState } from '../modules/intl/redux/intlReducer';
import listReducer, { ListState } from '../modules/list/redux/listReducer';
import todoReducer, { TodoState } from '../modules/todo/redux/todoReducer';

export interface AppState {
  router: RouterState;
  intl: IntlState;
  profile: AuthState;
  list: ListState;
  todo: TodoState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    intl: intlReducer,
    profile: authReducer,
    list: listReducer,
    todo: todoReducer,
  });
}
