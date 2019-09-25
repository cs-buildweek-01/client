import axios from 'axios';
import React, { Component } from 'react';
import auth from '../../util/index';
import Controls from '../Controls/Controls';
import Room from '../Room/Room';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      name: '',
      title: '',
      players: [],
      description: '',
      error_msg: ''
    };
  }
  move = direction => {
    auth
      .axiosWithAuth()
      .post(`${auth.api}/api/adv/move`, { direction })
      .then(({ data: { title, description, players, error_msg } }) => {
        console.log(title, players, description);
        error_msg
          ? this.setState({
              title,
              description,
              players: [...players],
              error_msg
            })
          : this.setState({
              title,
              description,
              players: [...players],
              error_msg
            });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='gameWrapper'>
        <Controls move={this.move} />
      </div>
    );
  }
}
