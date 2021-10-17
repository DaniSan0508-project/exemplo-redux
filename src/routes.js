import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

export const Routes = () =>{
    return(
    <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Reservas} path="/reservas" exact/>
    </Switch>
    )
}