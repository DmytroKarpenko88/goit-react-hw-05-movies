import { Link, NavLink } from 'react-router-dom';
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

export const Back = styled(Link)`
  display: flex;

  height: 1.5em;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee4b;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  background: #fff;

  & > svg {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 20px;
    transition: all 0.4s ease-in;
  }

  &:hover > svg {
    font-size: 1.2em;
    transform: translateX(-15px);
  }

  &:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
  }
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
  display: flex;
  gap: 20px;
`;
