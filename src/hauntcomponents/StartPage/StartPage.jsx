import React from 'react';
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import classes from './StartPage.module.css'

class StartPage extends React.Component {
render() {
  return <div>
    	<head>
		<meta charset="utf-8"/>
	</head>
	<body className={classes.body_menu}>
		<ul class={classes.menu}>
					<li><NavLink to={"/me"} >Мой профиль</NavLink></li>
					<li><NavLink to={"/myTeams"} >Мои команды</NavLink></li>
					<li><NavLink to={"/findPlayer"} >Поиск игрока</NavLink></li>
					<li><NavLink to={"/topTeams"} >Топ команд</NavLink></li>
					<li><NavLink to={"/options"} >Настройки</NavLink></li>
					<li><NavLink to={"/login"} >Войти</NavLink></li>
		</ul>
	</body>
  </div>
}

}


export default StartPage;