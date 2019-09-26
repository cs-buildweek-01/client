import React, { Component } from 'react';
import './Controls.css';

export default class Controls extends Component {
  render() {
    return (
      <div className='mainWrapper'>
        <h3>Please Choose a direction.</h3>
        <div className='controls'>
          <p
            className='controlButton'
            onClick={() => {
              this.props.move('n');
            }}
          >
            N
          </p>
          <p
            className='controlButton'
            onClick={() => {
              this.props.move('s');
            }}
          >
            S
          </p>
          <p
            className='controlButton'
            onClick={() => {
              this.props.move('e');
            }}
          >
            E
          </p>
          <p
            className='controlButton'
            onClick={() => {
              this.props.move('w');
            }}
          >
            W
          </p>
        </div>
      </div>
    );
  }
}
