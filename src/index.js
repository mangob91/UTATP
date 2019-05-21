import React from 'react';
import ReactDOM from 'react-dom';

import utatpHeader from './components/utatpHeader';

const App = () => {
  return (
    <div>
      <utatpHeader/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
