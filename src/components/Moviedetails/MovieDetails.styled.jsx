import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: ${theme.colors.accent};
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

export const Section = styled.section`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid black;
`;

export const Box = styled.div`
  width: 100%;
  margin-right: 15px;
`;

export const LinkList = styled.ul`
  padding: 16px;
  display: flex;
  gap: 20px;
`;
