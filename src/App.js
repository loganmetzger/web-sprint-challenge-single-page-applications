import React, { useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import axios from 'axios'
import OrderList from './OrderList'
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
  const [pizza, setPizza] = useState([])
  let history = useHistory()


  const handleChange = (e) => {
    e.persist()
    e.target.type === "checkbox"
      ? setForm({...form, [e.target.name]: e.target.checked})
      : setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users", form)
    .then((res) => {
      setPizza([res.data, ...pizza])
      setForm(initialFormValues)
      history.push('/complete')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Nav />
      <Switch>
        <Route path="/form" >
          <Form 
            handleChange={handleChange} 
            form={form} 
            handleSubmit= {handleSubmit} 
          />
        </Route>
        <Route path="/complete">
          <Complete pizza={pizza} />
        </Route>
      </Switch>
    </>
  );
};
export default App;
