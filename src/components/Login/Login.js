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
import { Link } from 'react-router-dom';
import auth from '../../util/index';
import NavBar from '../NavBar/Nav';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password1: '',
      loading: false
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const creds = {
      username: this.state.username,
      password: this.state.password1
    };

    this.setState({
      loading: true
    });

    axios
      .post(`${auth.api}/api/login/`, creds)
      .then(res => {
        localStorage.setItem('key', res.data.key);
        this.setState({
          username: '',
          password1: '',
          loading: false
        });

        this.props.history.push(`/game`);
      })
      .catch(err => {
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
              Log-in to your account
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

                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Need an account? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
