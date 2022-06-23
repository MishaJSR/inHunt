import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './MyProfile.css';

const MyProfile = observer(() => {

  const navigate = useNavigate();

  const { user } = useContext(Context);

  
  return <div>

    <div class="container mt-2r">
      <div class="row ">

        <div class="col xl4 l6 m6 s12 center-align">
          <div class="ava-img">
            <div class="wrapper-img">
              <img src={user.getUser().avaImg} class="img-center-circle" alt="" />
            </div>
          </div>
          <div class="ava-img">
          <div class="wrapper-img-but"> 
                <a onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
                  class="waves-effect waves-light btn mt-1vh fz-60 green">Сменить фото</a>
              </div>
          </div>

        </div>

        <div className="col xl8 l6 m6 s12">
          <div>
            <h2>{user.getProfile().lastName} {user.getProfile().lastSurname}</h2>
          </div>
          <div>
            <h5>{user.getProfile().lastStatus}</h5>
          </div>
          <div>{user.getProfile().lastAbout}</div>
        </div>
      </div>
    </div>

  </div>
}
)


export default MyProfile