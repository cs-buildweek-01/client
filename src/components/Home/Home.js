import React, { Component } from 'react';
import NavBar from '../NavBar/Nav';
import {
  Container,
  Header,
  Button,
  Divider,
  Grid,
  Segment,
  Message
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container text fluid>
          <Message info style={{ marginTop: '100px' }}>
            <Header as='h2'>Welcome to Dino Dungeons</Header>
            <p>
              A Minmalist 2D Dinosaur Dungeon Game. We don't even know where the
              treasure is!
            </p>
            <p>If you're new Sign Up or if you're returning Login again!</p>
            <strong>
              ! YOU NEED TO BE REGISTERED IN ORDER TO PLAY OR YOU WILL SEE
              ERRORS !
            </strong>
          </Message>
          <p>
            <Segment placeholder>
              <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                  <Button content='Login' size='big'>
                    <Link to='/register'> Sign Up </Link>
                  </Button>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                  <Button content='Sign up' size='big'>
                    <Link to='/login'> Login </Link>
                  </Button>
                </Grid.Column>
              </Grid>

              <Divider vertical>Or</Divider>
            </Segment>
          </p>
        </Container>
      </>
    );
  }
}
