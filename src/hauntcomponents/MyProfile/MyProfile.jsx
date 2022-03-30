import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const MyProfile = observer( () => {


  const navigate = useNavigate();

  const {user} = useContext(Context)


  return <div>
    
    <Container fixed>
      <div><h1>{user.Myuser.email}</h1></div>
      <div><h2>{user.Myuser.nick}</h2></div>
      <div><h3>{user.Myuser.type}</h3></div>
    </Container>
	  
  </div>
}
)


export default MyProfile