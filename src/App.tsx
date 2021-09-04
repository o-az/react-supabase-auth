import { AuthProvider } from '@Contexts/Auth';
import { CssBaseline, GeistProvider, Text } from '@geist-ui/react';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Dashboard, Login, PrivateRoute, Signup } from './components';
import { GlobalStyle } from './globalstyle';

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  width: 100vw;
`;

export const Heading = styled.div`
  grid-row: 1;
  grid-column: 2 / 5;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: center;
  margin-bottom: 20px;
`;

export const App: React.FC = () => {
  return (
    <GeistProvider>
      <CssBaseline />
      <GlobalStyle />
      <Container>
        <Heading>
          <Text h3>
            React / Typescript / Supabase Auth
          </Text>
        </Heading>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </GeistProvider>
  );
};
