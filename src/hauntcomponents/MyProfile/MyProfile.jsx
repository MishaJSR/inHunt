import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const MyProfile = observer( () => {


  const navigate = useNavigate();

  const {user} = useContext(Context)

  useEffect( () => {
    !user._isAuth && navigate("/login")
});

  return <div>
    
    <Container fixed>
    <h1>sd</h1>
    </Container>
	  
  </div>
}
)


export default MyProfile