import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as serviceWorker from './serviceWorker';

// window.__PRELOADED_STATE__ = getAuth();
document.title = "My Toons";
ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
