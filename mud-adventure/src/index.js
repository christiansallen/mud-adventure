import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./registration/SignUpContainer";

import './index.css'

const App = () => (
  <div>
    <SignUpContainer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
