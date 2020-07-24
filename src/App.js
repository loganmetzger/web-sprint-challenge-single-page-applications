import React from "react";
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import OrderList from './OrderList'


const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route>
          <Form path="/form" />
        </Route>
        <Route>
          <OrderList path="/" />
        </Route>
      </Switch>
    </>
  );
};
export default App;
