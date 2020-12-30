import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './util/reportWebVitals';

import { Spring } from 'react-spring/renderprops';
import Main from './components/Main';

//STYLES
import 'normalize.css';
import './styles/app.css';

const App = () => (
  <Spring config={{ duration: 1000}} from={{ opacity: 0}} to={{ opacity: 1}}>
    {(props) => <Main style={props} />}
  </Spring>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
