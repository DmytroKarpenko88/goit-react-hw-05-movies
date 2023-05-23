import styled from '@emotion/styled';

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  padding: 16px;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};

  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
`;
