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

function Contact() {
    let navigate = useNavigate();

    return(
        <div>
			<HeaderDesk></HeaderDesk>
            <h1>Contact Us</h1>

            <div>
                <h4>Pages in Testing:</h4>
                
            </div>
            
        </div>
    );
}

export default Contact;