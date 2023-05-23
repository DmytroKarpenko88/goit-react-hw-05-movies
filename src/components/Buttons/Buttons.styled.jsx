import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  display: block;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
  background: none;
  color: white;
  position: relative;
  outline: none;
  border: none;
  height: 50px;
  width: 190px;
  font-size: 14px;
  z-index: 2;
  transition: 0.01s 0.23s ease-out all;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: #303030;
    z-index: -1;
    transition: 0.3s ease-in all;
  }

  &:after {
    content: '';
    position: absolute;
    left: -5%;
    top: 5%;
    height: 90%;
    width: 5%;
    background: white;
    transition: 0.4s 0.02s ease-in all;
  }

  &:hover {
    cursor: pointer;
    color: transparent;
  }

  &:hover:before {
    left: 120%;
    width: 25%;
  }

  &:hover:after {
    left: 100%;
    width: 70%;
  }

  &:hover > .icon-right.after:after {
    left: -80px;
    color: white;
    transition: 0.2s 0.2s ease all;
  }

  &:hover > .icon-right.after:before {
    left: -104px;
    top: 14px;
    opacity: 0.2;
    color: white;
  }

  .icon-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  .icon-right:after {
    font-family: 'FontAwesome';
    content: '→';
    font-size: 24px;
    display: inline-block;
    position: relative;
    top: 26px;
    transform: translate3D(0, -55%, 0);
  }

  .icon-right.after:after {
    left: -250px;
    color: black;
    transition: 0.15s 0.25s ease left, 0.5s 0.05s ease color;
  }

  .icon-right.after:before {
    content: '';
    position: absolute;
    left: -230px;
    top: 14px;
    opacity: 0;
    transition: 0.2s ease-in all;
  }

  .signature {
    position: fixed;
    font-family: sans-serif;
    font-weight: 100;
    bottom: 10px;
    left: 0;
    letter-spacing: 4px;
    font-size: 10px;
    width: 100%;
    text-align: center;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
