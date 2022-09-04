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
import HeaderDesk from "./Components/HeaderDesk";


function About() {
    let navigate = useNavigate();

    return(
        <div>
		
			<HeaderDesk></HeaderDesk>
		
            <h1>Our Team</h1>

           
            
			 
			
            
            
        </div>
    );
}

export default About;