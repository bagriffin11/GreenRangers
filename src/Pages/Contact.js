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
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./contact.scss";

function Contact() {
    let navigate = useNavigate();

    return(
        <div>
			<HeaderDesk></HeaderDesk>
            <h1>Contact Us</h1>

            <div className="github-link">
			<a href="https://github.com/bagriffin11/GreenRangers"> 
	
			<FontAwesomeIcon icon={faGithub}  /> 
				
			</a>
			</div>
			<div className="testing">
                <h4>Pages in Testing:</h4>
                
            </div>
            
        </div>
    );
}

export default Contact;