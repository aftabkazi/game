import React from "react"
import "./App.css"

import { useNavigate } from "react-router-dom"
export const Home = () => {

    const nevigate = useNavigate();
    return (
        <div className="home">
            <h1 className="homeheading">Common let's play Stone Paper Scissor</h1>
            <button className="Buttona" onClick={() => nevigate('player')}> Player Vs Computer</button>
            <button  className="Buttonb" onClick={() => nevigate('computer')}> Computer Vs Computer</button>
        </div>
    )
}