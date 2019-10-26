import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import {Table} from 'react-bootstrap'



const ModalModalExample = ({data}) => (
  <Modal trigger={<Button>View</Button>}>
    <Modal.Header>Detailed Data</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
