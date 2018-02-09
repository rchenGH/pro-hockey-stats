import React from 'react';
import FormStyle from './signinform.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function SignInForm({...props}) {
  const {onSubmit =() => {}} = props
    const handleSubmit = event => {
      event.preventDefault();
      const {currentTarget} = event;
      const formData = new FormData(currentTarget)
  
      onSubmit({
        email: formData.get('email'),
        password: formData.get('password')

      })
    }

    return (
      <div className="sign-in-div">
      <Form onSubmit= {handleSubmit} className="sign-in-form">
        <p>SIGN IN</p>
        <hr></hr>
        <FormGroup className="row">
          <Input type="text" id="email" name="email" placeholder="EMAIL"/>
        </FormGroup>
        <FormGroup className="row">
          <Input type="password" id="password" name="password" placeholder="PASSWORD"/>
        </FormGroup>
        <FormGroup className="row">
          <Button type='submit' id="form-submit">SUBMIT</Button>
        </FormGroup>
      </Form>
    </div>
    )

}

export {SignInForm}
