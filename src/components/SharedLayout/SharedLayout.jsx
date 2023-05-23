import { Outlet } from 'react-router-dom';
import {
  Container,
  Content,
  Header,
  Link,
  Footer,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Heading } from 'components';

const SharedLayout = () => {
  return (
    <Container>
      <Content>
        <Header>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/movies'}>Movies</Link>
          </nav>
        </Header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Content>
      <Footer>
        <Heading></Heading>
      </Footer>
    </Container>
  );
};

export default SharedLayout;
