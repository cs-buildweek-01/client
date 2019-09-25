import React, { Component } from 'react';
import axios from 'axios';
import './Controls.css';
import auth from '../../util/index';

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='mainWrapper'>
        <h3>Please Choose a direction.</h3>
        <div class='controls'>
          <p
            onClick={() => {
              this.props.move('n');
            }}
          >
            N
          </p>
          <p
            onClick={() => {
              this.props.move('s');
            }}
          >
            S
          </p>
          <p
            onClick={() => {
              this.props.move('e');
            }}
          >
            E
          </p>
          <p
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
