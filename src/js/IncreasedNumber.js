import React from 'react';

class IncreasedNumber extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <p>
          число, умноженное на 2: {this.props.number * 2}
        </p>
      );
    }
   }

   export default IncreasedNumber;