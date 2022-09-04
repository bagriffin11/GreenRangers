
//Landing page for the website. Create a header bar for info, about, contact, etc.

import {Link, useNavigate} from "react-router-dom"
import { useState, useLayoutEffect } from "react";
import { db, auth, provider } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore";

import {createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut } from "firebase/auth";
import "./landing.scss";
import Button from '@mui/material/Button';
import HeaderDesk from "./Components/HeaderDesk";

import Box from '@mui/material/Box';

function Landing() {
    let navigate = useNavigate();
	
	
    return(
        <div>
		
			<HeaderDesk></HeaderDesk>
			
            <h1>Urban Hotspot Map</h1>
			
			<div>
			<p class="message" id="intro"> An interactive map of major cities showing areas with major heat disparities. This data can be used to suggest places where more trees can be planted to help grow the urban tree canopy and reduce carbon levels.
			</p>
			</div>
			<div className="btncontainer">
			
			
			<Button variant="contained" href="/map" size="large">Open Map</Button>
           
			
			
            </div>
            
            
        </div>
    );
}

export default Landing;