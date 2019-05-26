import React from 'react';
import ReactDOM from 'react-dom';

import {UTATPContainer} from "./container/UTATPContainer";

const App = function() {
  return (
    <div>
      <UTATPContainer/>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
