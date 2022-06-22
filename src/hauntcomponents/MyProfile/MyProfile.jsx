import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './MyProfile.css';

const MyProfile = observer(() => {


  const navigate = useNavigate();

  const { user } = useContext(Context)


  return <div>

    {/* <Container fixed>
      <div><h1>{user.Myuser.email}</h1></div>
      <div><h2>{user.Myuser.nick}</h2></div>
      <div><h3>{user.Myuser.type}</h3></div>
    </Container> */}
    <div class="container mt-2r">
      <div class="row ">

        <div class="col xl4 l6 m6 s12 center-align">
          <div class="ava-img">
            <div class="wrapper-img">
              <img src={user.avaImg} class="img-center-circle" alt="" />

            </div>
            <div>
                <a onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
                  class="waves-effect waves-light btn mt-1vh fz-60 green">Сменить фото</a>
              </div>
          </div>

        </div>

        <div className="col xl8 l6 m6 s12">
          <div>
            <h2>{user.name} {user.surname}</h2>
          </div>
          <div>
            <h5>{user.status}</h5>
          </div>
          <div>{user.about}</div>
        </div>
      </div>
    </div>

    <div className="container mt-2r">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
              <label for="disabled">Disabled</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" />
              <label for="password">Change Password</label>
            </div>
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" />
              <label for="password">Repeat Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">New Mail</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              This is an inline input field:
              <div class="input-field inline">
                <input id="email_inline" type="email" class="validate" />
                <label for="email_inline">Email</label>
                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <a class="waves-effect waves-light btn mt-1vh fz-70 green" onClick={() => user.setNewAva()}>Save Changes</a>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
}
)


export default MyProfile