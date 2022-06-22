import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './MyProfile.css';

const MyProfile = observer(() => {

  let saveChanges = () => {
    user.setUserInfo();
  }

  let onNameChange = () => {
    let textOnChange = rFristName.current.value;
    user.setName(textOnChange);
    user.isNameChange() ? user.setFieldIsChanged(true) : user.setFieldIsChanged(false);
    console.log(user.isNameChange())
  }

  let onStatusChange = () => {
    let textOnChange = rStatus.current.value;
    user.setStatus(textOnChange);
    user.isStatusChange() ? user.setFieldIsChanged(true) : user.setFieldIsChanged(false);
  }

  let onSurnameChange = () => {
    let textOnChange = rLastName.current.value;
    user.setSurname(textOnChange);
    user.isSurnameChange() ? user.setFieldIsChanged(true) : user.setFieldIsChanged(false);
  }

  let onEmailChange = () => {
    let textOnChange = rEmail.current.value;
    user.setEmail(textOnChange);
    user.isEmailChange() ? user.setFieldIsChanged(true) : user.setFieldIsChanged(false);
  }

  const navigate = useNavigate();

  const { user } = useContext(Context);

  let rFristName = React.createRef();
  let rLastName = React.createRef();
  let rStatus = React.createRef();
  let rChangePass = React.createRef();
  let rRepeatPass = React.createRef();
  let rEmail = React.createRef();
  
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
            <h2>{user.getUser().name} {user.getUser().surname}</h2>
          </div>
          <div>
            <h5>{user.getUser().status}</h5>
          </div>
          <div>{user.getUser().about}</div>
        </div>
      </div>
    </div>

    <div className="container mt-2r">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" value={user.getUser().name} onChange={onNameChange} ref={rFristName} />
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" value={user.getUser().surname} onChange={onSurnameChange} ref={rLastName} />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" value={user.getUser().status} onChange={onStatusChange} ref={rStatus} />
            </div>
            <div class="input-field col s6">
              <input id="email" type="email" class="validate" value={user.getUser().email} onChange={onEmailChange} ref={rEmail} />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" ref={rChangePass} />
              <label for="password">Change Password</label>
            </div>
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" ref={rRepeatPass} />
              <label for="password">Repeat Password</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <a  class={user.getProfile().fieldIsChanged  ? "waves-effect waves-light btn mt-1vh fz-70 green" : "waves-effect waves-light btn mt-1vh fz-70 grey disabled"} onClick={() => saveChanges()}>Save Changes</a>
              {/* добавить в онклик запись ласт неймов и тд*/}
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
}
)


export default MyProfile