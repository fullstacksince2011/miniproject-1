import React, { useState } from 'react';
import { HashRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import './App.scss';

import 'antd/dist/antd.css';
import routes from './config/routes';

function App() {


  return (
    <>
      <HashRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
