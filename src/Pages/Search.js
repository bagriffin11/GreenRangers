

//Home page can be for someone to log into to. 

import {Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
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



function Search() {
    let navigate = useNavigate();
    const [zipCode, setZipCode] = useState("");

    const [zipCodes, setZipCodes] = useState({});
    const [response, setResponse] = useState(false);

    const searched = async () => {
        setResponse(true);
    };

    useEffect(() => {            
        const apikey = "5HWN21OEYZWOCCMBEQ49"
        const zipApi = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=" + zipCode + "&minimumradius=0&maximumradius=10&country=ALL&key=" + apikey;
        const getUserSS = async () => {
            
               const zips = await fetch(zipApi);
            const zipresp = await zips.json();
            console.log(zipresp);
            setZipCodes(zipresp); 
            
        };
        if (response === true){
            getUserSS();
        }
      },[response]);

    return(
        <div>
		<HeaderDesk></HeaderDesk>
            <h1>Search Page</h1>
            
            <div className="pages">
				<br></br>
            </div>
            <div>
       
       <h3> Enter your zip code: </h3>
            <input
        onChange={(event) => {
            setZipCode(event.target.value);
        }}
      />

<button onClick={searched}>Look up</button>

      <h3>{zipCode} .. 
      {response === true  ? <div> <p>true  </p></div>:<p></p> }</h3>
      <div>
      
      </div>
        </div>
			
        </div>
    );
}

export default Search;