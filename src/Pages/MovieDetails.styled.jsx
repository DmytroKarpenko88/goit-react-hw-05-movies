import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orange;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
