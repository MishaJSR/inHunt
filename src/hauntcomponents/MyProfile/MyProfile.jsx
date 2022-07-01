import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import './MyProfile.css';
import 'materialize-css'
import coment from '../../icons/coment.png'

const MyProfile = observer(() => {

  const navigate = useNavigate();

  const { user } = useContext(Context);

  const [friends, setFriends] = useState(user.getProfile().profile.friends.slice(0, 4));

  const [posts, setPosts] = useState(user.getProfile().profile.posts);

  const [gifts, setgifts] = useState(user.getProfile().profile.gifts);

  const [isGiftsOld, setisGifts] = useState(user.getProfile().profile.isGiftsOld);

  const [isLikeClicked, setisLikeClicked] = useState(false)

  useEffect (() => {
    console.log(posts);
  }, [])






  return <div class="bg-grey">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

    <div class="container bg-white pt-1r">
      <div class="row row-bot">

        <div class="col xl2 l4 m4 s4 center-align">
          <div class="ava-img">
            <a class="no-pad" href="/me">
              <div class="wrapper-img-ava">
                <img src={user.getProfile().avaImg} class="img-center-circle" alt="" />
              </div>
            </a>

          </div>
          <div class="ava-img">
            <div class="wrapper-img-but">
              <a onClick={() => user.setNewAva("https://st.depositphotos.com/1703013/1328/i/450/depositphotos_13286310-stock-photo-bird-hunting-silhouette.jpg")}
                class="waves-effect waves-light btn mt-1vh fz-60 green my-butt blck">Change photo</a>
            </div>
          </div>

        </div>

        <div className="col xl8 l8 m8 s8 or-1-mb left-align ">
          <h3 class="h-0">{user.getProfile().profile.lastName} {user.getProfile().profile.lastSurname}</h3>
          <h6>{user.getProfile().profile.lastStatus}</h6>
          {/* <h6>{user.getProfile().lastAbout}</h6> */}
        </div>
        <div>
        </div>
      </div>

      <div class="row ">
        <div class="col xl2 l4 m4 s4 center-align hide-on-s">
          <div class="ava-img">
            <div class="coment-block">
              <div className="container-top center-align">
                <div class="header-friends" >
                  <h5>Friends</h5>
                </div>
              </div>
              <div class="row mar-0">
                {friends.map((el) =>
                  <div>
                    <div >
                      <div class="col pad-0 xl6 l6 m6 xm s4  ">
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
        <div class="show-more-s">
          <div class="col xl2 l4 m4 s4">
            <div class="collection ">
              <a href="/me/friends" class="collection-item green-text"><span class="span-0 badge black-text ">{friends.length}</span>Friends</a>
              <a onClick={() => user.setisGiftsOld(true)} href="/me/gifts" class="collection-item green-text"><span class={isGiftsOld ? "badge span-gitf" : "new badge span-gitf"}>{gifts.length}</span>Gifts</a>
            </div>
          </div>
        </div>



        <div class="col xl9 l8 m8 s8">
          
        {posts.map((el) =>
          <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row col-row-0">
            <div className="row mb-1rem col-row-0 ">
              <div class="col s2 imgPost">
                <img src={user.getProfile().avaImg} alt="" class="circle responsive-img" />
              </div>
              <div className="col s8">
                <h6 class="black-text">
                {user.getProfileInfo(el.id_adder).profile.lastName}
                </h6>
              </div>
            </div>
            <div class="col s12 justify-text no-pad">
              <span class="black-text">
                  {el.text}
              </span>
            </div>
            <div class="col mt-1r s12 m4 l3 xl2 left no-pad">
              <span>{el.likes} </span>
              <a class="hover-w no-pad" href="me">
              <i class="material-icons tiny">star</i>
              <span class="mr-1r"> Nice</span>
              </a>
            </div>
            <div class="col mt-1r s12 m5 l3 xl3 left no-pad">
              <span>{el.comments} </span><i class="material-icons tiny">sms</i><span> Comments</span>
            </div>
          </div>
        </div>
                )}


        </div>


      </div>
    </div>


  </div>
}
)


export default MyProfile

