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
import "./about.scss";

function About() {
    let navigate = useNavigate();

    return(
        <div>
		
			<HeaderDesk></HeaderDesk>
		
            <h1>Our Team</h1>

			<h2> Barret Griffin </h2>
			<h2> Siddhartha Mahajan </h2>
			<h2> Mahika Patil </h2>
            <h2> Jenny Zhong </h2>
			 
			
            
            
        </div>
    );
}

export default About;