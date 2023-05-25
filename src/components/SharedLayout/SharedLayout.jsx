import { Outlet } from 'react-router-dom';
import {
  Container,
  Content,
  Header,
  Link,
  Footer,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Content>
      <Footer></Footer>
    </Container>
  );
};

export default SharedLayout;
