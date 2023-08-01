import {useState} from 'react';
import SideBar from './sideBar.js';

import '../CSS/sideBarCss.css';
import '../CSS/commonCss.css';


function Home(){

    return (
    <body>
        <div class="main">
           <SideBar/>

            <div class="container">
                Operating through indigenous 5G networks can be extremely useful for mission critical systems since they can leverage the already deployed modern commercial communication infrastructure for achieving mission-oriented goals. However, the operators of these mission critical systems have very little control over the interactions with devices, applications, and services outside its core trusted tactical network. This makes the tactical networks vulnerable to various types of security threats. Critical among them are the Advanced Persistent Threats (APT), which are extremely sophisticated cyber-attacks that are designed to be “low (hiding under the radar) and slow” and leverages lateral movement to gain unauthorized access to mission critical systems. This project proposes ZENIX, a suite of software tools to counter APTs in 5G thereby enabling secure operate-through functionality for tactical 5G units. It integrates ZENIX Argus, Reflexión and Sentinel on an edge enabled platform. At the heart of ZENIX Argus is a Zero-trust authorization and access control system that continuously monitors the interactions, access, and behavior of various entities in the entire stack of 5G networks to dynamically control authorization and access to as well as out of devices, users, applications, and services in the trusted network.
            </div>
        </div>
    </body>

    );
}

export default Home;