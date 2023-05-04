// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// // import reduxLogger from 'redux-logger';
// import reduxPromise from 'redux-promise';
// import reduxThunk from 'redux-thunk';



// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.render-target'));


// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './components/app';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.querySelector('.render-target')
// );

import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './components/app';
import { store } from './store'
import { Provider } from 'react-redux'
import './i18n';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(
<React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
</React.StrictMode>);

// // During an update, there is no need to pass the container again
// root.render(<App name="Saeloun testimonials" />);


// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )