
import {Link, useNavigate} from "react-router-dom"
import { useState, useLayoutEffect } from "react";
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
import {Tab, Tabs, AppBar} from '@mui/material';
import "./HeaderDesk.scss";

const HeaderDesk = () => {
  

  return (
        <div className="appnav">
			<AppBar position="static" color="transparent">
			<Tabs >
			<Tab label="Home" href="/"/>
			<Tab label="Landing" href="/landing"/>
			<Tab label="About" href="/about"/>
			<Tab label="Contact" href="/contact"/>
			</Tabs>
			</AppBar>
		</div>
   

  );
};

export default HeaderDesk;