import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Nav,
  Row,
} from 'reactstrap';

const Apoimentform = () => {
  return (
   <div className='page-content'>
    {/* <Container> */}
<div className="table-responsive">
  <div className="container mt-5">
    <table className="table table-striped table-hover text-center table-custom">
      <thead>
        <tr>
          <th>From Name</th>
          <th>Date</th>
          <th>To</th>
          <th>From Email</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>No entries found</td>
          <td>No entries found</td>
          <td>No entries found</td>
          <td>No entries found</td>
          <td>No entries found</td>
          <td>No entries found</td>
          <td>No entries found</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


{/* </Container> */}
</div>

  )
}

export default Apoimentform



