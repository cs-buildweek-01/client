import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/favicon.ico'
            style={{ marginRight: '1.5em' }}
          />
          Dino Dungeons
        </Menu.Item>
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/game'>Game</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
