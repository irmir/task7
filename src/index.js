import React from 'react';
import ReactDOM from 'react-dom';
import Number from './js/Number'
import IncreasedNumber from './js/IncreasedNumber';

const number = 8;

const App = (props) => {

  return (
    <div>

      <Number number={number}/>

      <IncreasedNumber number={number} />
 
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));
