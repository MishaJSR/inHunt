import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthComponent from "../hauntcomponents/Auth/AuthComponent";
import FindPlayers from "../hauntcomponents/FindPlayers/FindPlayers";
import MyProfile from "../hauntcomponents/MyProfile/MyProfile";
import MyTeams from "../hauntcomponents/MyTeams/MyTeams";
import NoFond from "../hauntcomponents/NotFound/NotFound";
import Options from "../hauntcomponents/Options/Options";
import Registrate from "../hauntcomponents/Registrate/Registrate";
import StartPage from "../hauntcomponents/StartPage/StartPage";
import TopTeams from "../hauntcomponents/TopTeams/TopTeams";
import {Context} from "../index"

const AppRoutes = observer(() => 
{
    const { user } = useContext(Context)

    return user.isAuth ? (
        <Routes>
            <Route path="/login" element={<AuthComponent />} />
            <Route path="/registration" element={<Registrate />} />
            <Route path="/me" element={<MyProfile />} />
            <Route path="/myTeams" element={<MyTeams />} />
            <Route path="/findPlayer" element={<FindPlayers />} />
            <Route path="/topTeams" element={<TopTeams />} />
            <Route path="/options" element={<Options />} />
            <Route path="*" element={<NoFond />} />
        </Routes>
    ) :         
    <Routes>
    <Route path="/login" element={<AuthComponent />} />
    <Route path="/registration" element={<Registrate />} />
    <Route path="*" element={<StartPage/>} />
</Routes>
}) 

export default AppRoutes