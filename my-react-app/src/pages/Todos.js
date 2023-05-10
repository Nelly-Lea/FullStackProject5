import { useState , useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {EssaiContext} from "./Users"
export function Todos (){
    const items=useContext(EssaiContext);
    console.log(items)
    return(<div>TODOS</div>)
}