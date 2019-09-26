import axios from 'axios';
import React, { Component } from 'react';
import auth from '../../util/index';
import Controls from '../Controls/Controls';
import Room from '../Room/Room';
import styled from 'styled-components';
import {
  FlexibleXYPlot,
  LineSeries,
  MarkSeries,
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import 'react-vis/dist/style.css';
const StyledMap = styled.div`
  marginleft: 10%;
  width: 66%;
  height: 100%;
  flex: 1;
  padding: 3rem 3rem 3rem 3rem;
  position: relative;
  stroke-width: 1;
`;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      name: '',
      title: '',
      currentRoom: '',
      PlayerRoom: '',
      players: [],
      rooms: [],
      description: '',
      error_msg: '',
      x: 0,
      y: 11
    };
  }
  move = direction => {
    auth
      .axiosWithAuth()
      .post(`${auth.api}/api/adv/move`, { direction })
      .then(({ data: { title, description, players, error_msg, x, y } }) => {
        this.setState({
          title,
          description,
          players: [...players],
          error_msg,
          x,
          y
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getInfo = () => {
    return auth
      .axiosWithAuth()
      .get(`${auth.api}/api/adv/init`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  drawMap = () => {
    return auth
      .axiosWithAuth()
      .get(`${auth.api}/api/adv/draw_map`)
      .then(res => {
        return res.data.rooms;
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    Promise.all([this.drawMap(), this.getInfo()]).then(values => {
      console.log(values);
      this.setState({
        rooms: values[0],
        uuid: values[1].uuid,
        name: values[1].name,
        title: values[1].name,
        currentRoom: values[1].currentRoom,
        PlayerRoom: values[1].PlayerRoom,
        players: values[1].players,
        description: values[1].description,
        error_msg: values[1].error_msg,
        x: 0,
        y: 11
      });
    });
    // this.drawMap().then(res => {
    //   this.getInfo();
    // });
  }

  dotColor = roomName => {
    let room = this.state.rooms.find(room => room.name === roomName);
    return room;
  };

  // let n = {room.n_to}
  // let s = {room.s_to}
  // let e = {room.e_to}
  // let w = {room.w_to}

  // let links = Object.assign(n,s,e,w)

  render() {
    console.log(this.state.x, this.state.y);
    console.log('currenroom:', this.state);
    let coords = [];
    let links = [];
    // console.log('%%%%%%', links);

    //Loop through each room in the room_data object

    let rooms = this.state.rooms;
    // console.log('rooms:', rooms);

    for (let room of rooms) {
      //console.log('&&&&&&&&&&', room.n_to);
      let n = room.n_to;
      let s = room.s_to;
      let e = room.e_to;
      let w = room.w_to;
      //console.log('is it W:', w);

      let adjacentRooms = { n, s, e, w };
      //console.log('**********', adjacentRooms);

      //Set data equal to the first element (x, y coords)

      //in each room of the room_data object

      // console.log(data, coords);

      coords.push({ x: room.x, y: room.y });
      for (let adjacentRoom in adjacentRooms) {
        let id = adjacentRooms[adjacentRoom]
          ? adjacentRooms[adjacentRoom]
          : null;
        if (id === null) {
          // console.log('it is undefined');
        } else {
          // console.log('linkedddddd', id);
          let linkedRoom = rooms.find(x => x.id === id);
          //console.log('linked room', linkedRoom);
          links.push([
            { x: room.x, y: room.y },
            { x: linkedRoom.x, y: linkedRoom.y }
          ]);
        }
      }
    }

    //console.log('linkkkk', links);
    console.log(this.state.x, this.state.y);
    return (
      <>
        <StyledMap>
          <FlexibleXYPlot width={600} height={600}>
            {links.map(link => (
              <LineSeries
                strokeWidth='1'
                color='black'
                data={link}
                key={Math.random(1000)}
              />
            ))}
            <MarkSeries
              strokeWidth={3}
              opacity='1'
              size='3'
              data={coords}
              style={{ cursor: 'pointer' }}
            />
            <MarkSeries
              strokeWidth={3}
              opacity='1'
              size='3'
              color='orange'
              data={[{ x: this.state.x, y: this.state.y }]}
              style={{ cursor: 'pointer' }}
            />
          </FlexibleXYPlot>
          <div className='gameWrapper'>
            <Controls move={this.move} />
          </div>
        </StyledMap>
      </>
    );
  }
}
