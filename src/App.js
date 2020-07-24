import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import axios from 'axios'
import OrderList from './OrderList'
import Complete from './Complete'
import * as yup from 'yup'

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
  const [errors, setErrors] = useState(initialFormValues)
  const [disable, setDisable] = useState(true)
  let history = useHistory()

  useEffect(() => {
    formSchema.isValid(form)
      .then(valid => setDisable(!valid))
  }, [form])

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Must be 4 characters long")
      .required("Name is required"),
  })

  // const validateForm = (e) => {
  //   yup
  //     .reach(formSchema, e.target.name)
  //     .validate(
  //       e.target
  //     )
  // }

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
            disable={disable}
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
