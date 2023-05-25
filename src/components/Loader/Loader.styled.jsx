import styled from '@emotion/styled';

export const Circle = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid #e74c3c;
  position: relative;
  animation: load 2s linear infinite;

  &::before,
  &::after {
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
  }

  &::before {
    border-top: 5px solid #e67e22;
    transform: rotate(120deg);
  }

  &::after {
    border-top: 5px solid #3498db;
    transform: rotate(240deg);
  }

  & span {
    position: absolute;
    font-size: small;
    width: 100px;
    height: 100px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    animation: a2 2s linear infinite;
  }

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes a2 {
    to {
      transform: rotate(-360deg);
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 96px;
  width: 96px;
  animation: rotate_3922 1.2s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);

  & span {
    position: absolute;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
  }

  & span:nth-of-type(1) {
    filter: blur(5px);
  }

  & span:nth-of-type(2) {
    filter: blur(10px);
  }

  & span:nth-of-type(3) {
    filter: blur(25px);
  }

  & span:nth-of-type(4) {
    filter: blur(50px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background-color: #fff;
    border: solid 5px #ffffff;
    border-radius: 50%;
  }

  @keyframes rotate_3922 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
