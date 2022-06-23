import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../..';

const Options = observer(() => {

  const { user } = useContext(Context);

  let rFristName = React.createRef();
  let rLastName = React.createRef();
  let rStatus = React.createRef();
  let rChangePass = React.createRef();
  let rRepeatPass = React.createRef();
  let rEmail = React.createRef();

  let saveChanges = () => {
    user.setUserInfo(rFristName.current.value, rLastName.current.value, rStatus.current.value, rEmail.current.value);

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

  return <div>
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
              <a  class={user.getProfile().fieldIsChanged  ? "waves-effect waves-light btn mt-1vh fz-70 green" : "waves-effect waves-light btn mt-1vh fz-70 grey disabled"} onClick={saveChanges}>Save Changes</a>
              {/* добавить в онклик запись ласт неймов и тд*/}
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

})


export default Options;