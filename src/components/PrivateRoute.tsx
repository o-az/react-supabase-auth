import { useAuth } from '@Contexts/Auth';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

//type ComponentType = React.ReactNode
export const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
};
