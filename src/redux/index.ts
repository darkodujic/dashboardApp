import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
