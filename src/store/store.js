import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootModule from '../modules/rootModule';

const middleare = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleare);

const store = createStore(rootModule, enhancer);

export default store;
