// This page is to test the Firebase's crud (create, read, update, delete)

import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import { db, auth, provider } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

 

function UserForm() {
  let navigate = useNavigate();

  //variables for the form
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newAddress, setNewAddress] = useState("");
 
//Post a new user to the database called test
  const usersCollectionRef = collection(db, "test");
  const createUser = async () => {
    await addDoc(usersCollectionRef, { id: "hi",name: newName, age: Number(newAge), address: newAddress }); 
    navigate("/");
  };

  


  return (
    <div className="App">
            
        <div>
        <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
        </div>
        <div>
           <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      /> 
        </div>
        <div>
        <input
        placeholder="Address..."
        onChange={(event) => {
          setNewAddress(event.target.value);
        }}
      />   
        </div>
        <p>Information must be completed to access user home.</p>
      <button onClick={createUser}> Create User</button>
    
           
    </div>
  );
}

export default UserForm;