import React from 'react';
import {welcomeMessage} from '../lib/constant';

const ALT_MESSAGE = 'Austin Tennis Players Logo';

const UTATPHeader = function() {

  return (
    <div>
      <img src={require('../lib/image/utatp_logo.png')} alt={ALT_MESSAGE}/>
      <h3>{welcomeMessage}</h3>
    </div>
  );
};

export default UTATPHeader;
