import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import AuthLayout from '../pages/layouts/Auth';
import HorizontalLayout from '../pages/layouts/Horizontal';
import Main from '../pages/Main';

const Layout = ({ children }) => {
  // if (props.isLogin) {
  //   return <HorizontalLayout {...props} />;
  // }
  return <AuthLayout children={children} />;
};

const Routes = (props) => {
  return (
    <>
      <BrowserRouter>
        <Layout {...props}>
          <Switch>
            <Route component={Main} path="/" exact />
            <Route component={Login} path="/login" />
            <Route component={Logout} path="/logout" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Routes;
