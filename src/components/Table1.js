import React from 'react'
import Table from 'react-bootstrap/Table';

const Table1 = () => {
  return (
    <div style={{width:"80%"}}>
      <Table striped bordered hover style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pavan</td>
          <td>Reddy</td>
          <td>@PavanReddy</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ravindra</td>
          <td>Biradar</td>
          <td>@Rbiradar</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Manju</td>
          <td>Br</td>
          <td>@Manju</td>
        </tr>
        <tr>
          <td>4</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Table1
