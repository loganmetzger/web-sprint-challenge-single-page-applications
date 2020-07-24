import React from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'


const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route>
          <Form path="/form" />
        </Route>
        <Route>
          <
        </Route>
      </Switch>
    </>
  );
};
export default App;
