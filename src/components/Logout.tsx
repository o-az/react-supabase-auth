import { useAuth } from '@App/contexts/Auth';
import { Button } from '@geist-ui/react';
import { LogOut } from '@geist-ui/react-icons';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  grid-row: 1;
  grid-column: 5;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 0 30px 0;
`;

export const Logout = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  const handleSignOut = async () => {
    await signOut();
    history.push('/login');
  };
  return (
    <Container>
      <Button
        onClick={handleSignOut}
        // TODO: loading={loading}
        shadow
        type="secondary"
        ghost
        auto
        iconRight={<LogOut />}
        // font={1}
      >
        LOG OUT
      </Button>
    </Container>
  );
};
