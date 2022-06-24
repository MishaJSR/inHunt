import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './MyProfile.css';
import 'materialize-css'

const MyProfile = observer(() => {

  const navigate = useNavigate();

  const { user } = useContext(Context);


  return <div>

    <div class="container mt-2r">
      <div class="row ">

        <div class="col xl4 l6 m6 s12 center-align">
          <div class="ava-img">
            <a class="no-pad" href="/me">
            <div class="wrapper-img-ava">
              <img src={user.getUser().avaImg} class="img-center-circle" alt=""/>
            </div>
            </a>

          </div>
          <div class="ava-img">
            <div class="wrapper-img-but">
              <a onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
                class="waves-effect waves-light btn mt-1vh fz-60 green my-butt blck">Сменить фото</a>
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

    <div class="container mt-2r">
      <div class="row ">

        <div class="col xl4 l6 m6 s12 center-align">
          <div class="ava-img">
            <div class="coment-block">
              <div className="container-top center-align">
                <div class="header-friends" >
                  <h5>Friends</h5>
                </div>
              </div>
              <div class="row mar-0">
                <div class="col pad-0 xl4 l4 m4 s6 ">
                  <div className="ava-img">
                    <a class="no-pad" href="/me">
                    <div className="wrapper-img-friends">
                        <img src={user.getUser().avaImg} class="round" alt=""/>
                    </div>
                    </a>
                  </div>
                </div>
                <div class="col pad-0 xl4 l4 m4 s6 ">
                  <div className="ava-img">
                    <div className="wrapper-img-friends"></div>
                  </div>
                </div>
                <div class="col pad-0 xl4 l4 m4 s6 ">
                  <div className="ava-img">
                    <div className="wrapper-img-friends"></div>
                  </div>
                </div>
                <div class="col pad-0 xl4 l4 m4 s6 ">
                  <div className="ava-img">
                    <div className="wrapper-img-friends"></div>
                  </div>
                </div>
                <div class="col pad-0 xl4 l4 m4 s6">
                <div className="ava-img">
                    <div className="wrapper-img-friends"></div>
                  </div>
                </div>
                <div class="col pad-0 xl4 l4 m4 s6">
                <div className="ava-img">
                    <div className="wrapper-img-friends"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="ava-img">
            <div class="wrapper-img-but">
              <a  onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
                class="waves-effect waves-light btn mt-1vh fz-60 green my-butt blck">Show All</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
}
)


export default MyProfile