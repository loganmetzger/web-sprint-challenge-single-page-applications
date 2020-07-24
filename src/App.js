import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
// import OrderList from './OrderList'
import Complete from './Complete'

const initialFormValues = {
  name: '',
  size: '',
  pineapple: false,
  salami: false,
  anchovies: false,
  cheese: false
}

const App = () => {
  const [form, setForm] = useState(initialFormValues)

  const handleChange = (e) => {
    e.target.type === "checkbox"
      ? setForm({...form, [e.target.name]: e.target.checked})
      : setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Nav />
      <Switch>
        <Route>
          <Form handleChange={handleChange} form={form} path="/form" />
        </Route>
        <Route>
          <Complete path="/complete" />
        </Route>
      </Switch>
    </>
  );
};
export default App;
