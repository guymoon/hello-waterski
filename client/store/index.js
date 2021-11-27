import {createStore, applyMiddleware} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import {rootSaga, rootReducer, persistedRootReducer} from './modules/index'
import {useDispatch, useSelector} from "react-redux";
import {persistStore} from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedRootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const store = makeStore();
const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore, {debug: true});
export { store, persistor };
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;