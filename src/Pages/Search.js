

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

    const [zipCodes, setZipCodes] = useState([]);
    const [response, setResponse] = useState(false);

    const searched = async () => {
        setResponse(true);
    };
    const list = zipCodes.map((zip, index) => {
        return (
          <div key={index}>
           <p>{index+1}. {zip} </p>
          </div>
        );
      }); 
    


    useEffect(() => {            
        const apikey = "5HWN21OEYZWOCCMBEQ49"
        const zipApi = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=" + zipCode + "&minimumradius=0&maximumradius=10&country=ALL&key=" + apikey;
        const getUserSS = async () => {
            
            const zips = await fetch(zipApi);
            const zipresp = await zips.json();
            console.log(zipresp);
            var sub_val = new Array(zipresp.length); 
            for (var i in zipresp) {
				var key = i;
				var val = zipresp[i];
                for (var j in val) {
					var sub_key = j;
					sub_val[j] = val[j].Code;
                    console.log(sub_val[j])
                    
                }
                
            }
            console.log(sub_val);
            setZipCodes(sub_val);

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
      {response === true  ? <div>{list} </div>:<div><p>ok</p></div>}</h3>
      <div>
      
      </div>
     
        </div>
	
        </div>
    );
}

export default Search;