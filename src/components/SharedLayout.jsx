import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/movies'}>Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
