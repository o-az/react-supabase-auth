import { Card } from '@geist-ui/react';
import * as React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  grid-row: 2 / 5;
  grid-column: 2 / 5;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  width: 100%;
`;

export const FormContainer: React.FC = ({ children }) => (
  <Container>
    <Card hoverable shadow width="400px">
      {children}
    </Card>
  </Container>
);
