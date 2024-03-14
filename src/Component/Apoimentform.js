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
  <div classname="page-content">
    
  <div>
    <form action="/action_page.php">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>
      <input type="submit" defaultValue="Submit" />
    </form>
  </div>
</div>


  )
}

export default Apoimentform



