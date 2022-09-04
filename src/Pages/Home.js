

//Home page can be for someone to log into to. 

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
import "./home.scss"

import {createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut } from "firebase/auth";
import HeaderDesk from "./Components/HeaderDesk";


function Home() {
    let navigate = useNavigate();

    return(
        <div>
		<HeaderDesk></HeaderDesk>
            <h1>Welcome to the Green Rangers EcoHacks 2022 Site</h1>

            <div className="firebase-link">
                <Link to="/test">Firebase crud test</Link>
            </div>
            
            <div className="pages">
                <h4>Pages in Testing:</h4>
                <Link to="/landing">Go to landing page</Link>
				<br></br>
				<Link to="/about">Go to about page
				</Link>

            </div>
			
        </div>
    );
}

export default Home;