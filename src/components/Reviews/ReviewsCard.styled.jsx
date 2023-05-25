import styled from '@emotion/styled';
import { theme } from 'styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  max-width: 900px;
`;

export const Infos = styled.div`
  margin-top: 1rem;
`;

export const DateTime = styled.div`
  color: rgba(7, 63, 216, 1);
  font-size: 20px;
  font-weight: 600;
`;

export const Description = styled.div`
  margin-top: 0.4rem;
  line-height: 1.625;
  color: rgba(107, 114, 128, 1);
`;
export const Author = styled.div`
  margin-top: 1.3rem;
  font-size: 1.5rem;
  line-height: 1.25rem;
  color: ${theme.colors.dark};
`;
