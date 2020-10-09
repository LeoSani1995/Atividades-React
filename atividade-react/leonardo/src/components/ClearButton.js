import React, { Component } from 'react';
import './ClearButton.css'

class ClearButton extends Component {
   
    
  render() {
    return (
     <div className="clear-button">
        {this.props.children}
        onClick={() => this.props.handleClear()}
     </div>
    );
  }
}

  export default ClearButton;
