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

function Home() {
    let navigate = useNavigate();

    return(
        <div>
            <h1>Home Page</h1>

            <div>
                <Link to="/test">Firebase crud tutorial</Link>
            </div>
            
            <div>
                <h4>Pages in Testing:</h4>
            </div>
            
        </div>
    );
}

export default Home;