import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Logo } from './SharedLayout.styled';

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
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
