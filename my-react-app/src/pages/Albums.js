import { useState , useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {EssaiContext} from "./Users"
export function Albums (){
    const items=useContext(EssaiContext);
    console.log(items)
    return(<div>ALBUMS</div>)
}