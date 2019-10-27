import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    Select,
    Container
  } from 'semantic-ui-react'

class MedicalEncounters extends Component {

    render() {
        
        return (
            <Container>
            <h4> Medical Encounters </h4>
            <Form> 
            <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>
        </Form>
        </Container> 
        );
    }

}

export default MedicalEncounters