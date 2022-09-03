
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

function Landing() {
    let navigate = useNavigate();

    return(
        <div>
            <h1>Landing Page</h1>

            <div>
                <Link to="/">Go to the home</Link>
            </div>
            
            <div>
                <h4>Pages in Testing:</h4>
                
            </div>
            
        </div>
    );
}

export default Landing;