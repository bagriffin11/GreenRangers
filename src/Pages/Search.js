

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
    const [radius, setRadius] = useState("");

    const [zipCodes, setZipCodes] = useState([]);
    const [response, setResponse] = useState(false);
    const [info, setInfo] = useState([]);
    const [temps, setTemps] = useState([]);

    const searched = async () => {
        setResponse(true);
    };

    const change = async () => {
        setResponse(false);
        window.location.reload();
    };

    const list = temps.map((area, index) => {
        
        return (
          <div key={index}>
           <p>{index+1}. {area.city}({area.code}), Current Temperature: {area.temp}</p>
          </div>
        );
      }); 
    


    useEffect(() => {            
        const apikey = "5HWN21OEYZWOCCMBEQ49"
        const zipApi = "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=" + zipCode + "&minimumradius=0&maximumradius=" + radius + "&country=ALL&key=" + apikey;
		const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=";
        const apiKey1 = 'fdad2a80d990f76616860d1f3ddf303b';

        const getUserSS = async () => {
            
            const zips = await fetch(zipApi);
            const zipresp = await zips.json();

            console.log(zipresp);
            var sub_val = new Array(zipresp.length); 
            var temp = new Array(zipresp.length); 

            for (var i in zipresp) {
				var key = i;
				var val = zipresp[i];
                for (var j in val) {
					var sub_key = j;
					// sub_val[j] = val[j].Code;
                   // console.log(sub_val[j])  
                    var lat = parseFloat(val[j].Latitude)
                    var lon = parseFloat(val[j].Longitude)
                    const tem = await fetch(baseUrl + lat + "&lon=" + lon + "&appid=" + apiKey1);
                    const tem1 = await tem.json();
                    console.log(tem1);
                    temp[j] = {"city": tem1.name, "code": val[j].Code, "temp": tem1.main.temp};
                   
                }    
            }
          //  console.log(sub_val);
         //   console.log(val)
            
          //  setZipCodes(sub_val);
          temp.sort((a, b) => {
            return b.temp - a.temp;
        });
           console.log(temp);
            setTemps(temp);
            
            
        };
        if (response === true){
            getUserSS();
        }
      },[response]);

    return(
        <div>
		
            <h1>Search Page</h1>
            
            <div className="pages">
				<br></br>
            </div>
            <div>
       <h2>Discover the warmest cities around your area!</h2>
       
       <h3> Enter your zip code: </h3>
            <input
        onChange={(event) => {
            setZipCode(event.target.value);
        }}
      />
      <h3> Enter the radius: </h3>
            <input
        onChange={(event) => {
            setRadius(event.target.value);
        }}
      />
<div>
    <button onClick={searched}>Look up</button>

</div>

      <h3>{zipCode} </h3>
      {response === true  ? 
        <div>
          <button onClick={change}>new search</button>
          <h3>Warmest surronding cities (organized from warmest to coolest):</h3>
            {list} 
        </div>   
    :<div><p></p></div>
    }
      <div>
      
      </div>
     
        </div>
	
        </div>
    );
}

export default Search;