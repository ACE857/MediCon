import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import DropdownExampleSelection from '../Dropdown/dropdown';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const list = ["Admin", "Hospital","Patient","Pharma"  ];

class LoginForm extends Component {

  render() {
return (


  <div> 
  <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src="https://img.icons8.com/plasticine/100/000000/login-rounded-right.png" /> Log-in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            
          />

          <DropdownExampleSelection lst={list} />  <br />

        </Segment>
      </Form>
      <Link to="/dashboard"> 
          <Button color='teal' fluid size='large'>
            Login
          </Button>
          </Link>
    </Grid.Column>
  </Grid>
  

  </div>
  );
  }
}

export default LoginForm
