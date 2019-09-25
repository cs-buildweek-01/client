import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import auth from '../../util/index';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Nav';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password1: '',
      password2: '',
      loading: false
    };
  }

  handleChange = e => {
    console.log([e.target.name]);
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const credss = {
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2
    };

    this.setState({
      loading: true
    });

    axios
      .post(`${auth.api}/api/registration/`, credss)
      .then(res => {
        localStorage.setItem('key', res.data.key);
        console.log(res.data.key);
        this.setState({
          username: '',
          password1: '',
          password2: '',
          loading: false
        });

        this.props.history.push(`/game`);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <>
        <NavBar />

        <Grid
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
              Register an account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  name='username'
                  type='text'
                  placeholder='Username'
                  onChange={this.handleInput}
                  value={this.state.username}
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type='password'
                  name='password1'
                  onChange={this.handleInput}
                  value={this.state.password1}
                  placeholder='Password'
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type='password'
                  name='password1'
                  onChange={this.handleInput}
                  value={this.state.password2}
                  placeholder='Password'
                />

                <Button
                  onClick={this.handleSubmit}
                  color='teal'
                  fluid
                  size='large'
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Have an account? <Link to='/login'>Sign In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
