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

  let screenWidth = window.screen.width;

  let frMass = user.getProfile().friends;//посмотреть реакцию на изменение ширины экрана через getElementById

  if ((screenWidth <= 670) && (screenWidth >= 600)) frMass = frMass.slice(0,4);
  if (screenWidth < 600) frMass = frMass.slice(0,3);




  return <div class="bg-grey">

    <div class="container bg-white pt-1r">
      <div class="row row-rev row-bot">

        <div class="col xl4 l6 m6 s12 center-align">
          <div class="ava-img">
            <a class="no-pad" href="/me">
              <div class="wrapper-img-ava">
                <img src={user.getUser().avaImg} class="img-center-circle" alt="" />
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

        <div className="col xl8 l6 m6 s12 or-1-mb">
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

    <div class="container bg-white">
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
                {}
                {frMass.map((el) =>
                  <div>
                    <div >
                      <div  class="col pad-0 xl4 l4 m4 xm s4  ">
                        <div className="ava-img">
                          <a class="no-pad a-img" href={"/profiles/" + el.id}>
                            <div className="wrapper-img-friends">
                              <img src={el.ava} class="round" alt="" />
                            </div>
                          </a>
                        </div>
                        <p class="p-0">{el.name}</p>
                        <p class="p-0">{el.surname}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
          <div class="ava-img">
            <div class="wrapper-img-but">
              <a onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
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