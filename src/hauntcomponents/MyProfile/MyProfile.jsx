import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { Container } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';

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
      <div class="row">

        <div className="col xl4 l3 m2 s2 ">
          <div>
          <img src={user.avaImg} class="img-center-circle" alt="" />
          </div>
          
        </div>
        <div className="col xl8 l9 m10 s10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolores, veritatis quis ducimus neque blanditiis architecto pariatur obcaecati voluptatum odit laboriosam, quam ab error cum. Illum possimus minus velit ratione.
          A, libero nihil velit perferendis saepe non earum assumenda harum eveniet iure praesentium nostrum eos laboriosam atque esse sed. Quos nesciunt numquam beatae iste dolorum vitae molestias quisquam ipsam cumque.
          Voluptatibus, inventore? Quaerat, ullam fuga architecto nulla ratione consequuntur expedita debitis temporibus dolor adipisci voluptatibus quidem ab reprehenderit magnam laudantium atque dolore commodi iusto doloribus sapiente dicta explicabo accusamus laborum?
          Aperiam impedit sequi quas enim dolorem amet facilis itaque adipisci ipsam architecto? Maxime, dignissimos amet esse voluptatem modi officiis deleniti earum, tempora quasi ullam magni necessitatibus, aliquid consequatur illo! A.
          Aut nam saepe aspernatur! Nesciunt ullam optio dolor! Maxime corporis porro eum molestiae vero mollitia, reprehenderit nostrum optio, unde recusandae at? Possimus quas quo hic tempore consectetur ea tempora earum!
          Consequatur molestiae nisi beatae hic quam. Quae placeat cum omnis dignissimos? Modi molestias esse assumenda, accusamus facilis doloremque. Harum corporis adipisci iste dolore praesentium fugit necessitatibus iure nemo rem consectetur?
          Iusto repellat earum saepe quod fugit, quo dolorem labore expedita, sequi recusandae ducimus at laborum fuga necessitatibus libero qui? Eos nobis ea quibusdam ex fuga! Tenetur illo ipsum iure esse.</div>
        {/* <img width="40" src={user.avaImg}/> */}
      </div>
    </div>

    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
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
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
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
      </form>
    </div>
  </div>
}
)


export default MyProfile