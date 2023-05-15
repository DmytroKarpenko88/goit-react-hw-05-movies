import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orange;
  }
`;
