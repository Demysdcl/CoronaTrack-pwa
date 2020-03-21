import styled from 'styled-components';
import { $gray500 } from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const H1 = styled.h1`
  color: ${$gray500};
`;
