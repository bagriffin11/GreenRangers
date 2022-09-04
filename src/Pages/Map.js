import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./styles.scss";
import HeaderDesk from "./Components/HeaderDesk";

mapboxgl.accessToken = process.env.REACT_APP_API_KEY;


const points = [];


function Map() {

	//const mapboxElRef = useRef(null);

	const map = useRef(null);

	useEffect(() => {


		const zipUrl = "https://raw.githubusercontent.com/jenzhng/weather-app/master/zips.json";
		const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=";
		const apiKey = 'fdad2a80d990f76616860d1f3ddf303b';

		const testurl = baseUrl + 40.750633 + "&lon=" + -73.997177 + "&appid=" + apiKey;

		const fetchData = async () => {

			const zips = await fetch(zipUrl);
			const zipresp = await zips.json();
			console.log(zipresp);


			for (var i in zipresp) {
				var key = i;
				//console.log(key);
				var val = zipresp[i];

				points.push({
					lat: parseFloat(val.lat),
					lon: parseFloat(val.lon),
					val: 0
				})
				for (var j in val) {
					//console.log(val[j]);
					var sub_key = j;
					var sub_val = val[j];
					//console.log(sub_key.lat);
				}
			}

			const urls = points.map(point => baseUrl + point.lat + "&lon=" + point.lon + "&appid=" + apiKey);

			const weathers = await Promise.all(urls.map(async url => {
				const response = await fetch(url);
				const json = await response.json();

				return json;
				//return response.text();
			}));
			console.log(weathers);

			points.forEach((point, index) => {
				if (weathers[index].cod == '200') {
					point.val = weathers[index].main.temp_max;
				}
				else {
					point.val = 0;
				}
			})

			console.log(points);
		}

		const result = fetchData()
			// make sure to catch any error
			.catch(console.error);;

		// Mapbox functionality goes here
		new mapboxgl.Map({
			container: map.current,
			style: "mapbox://styles/jenzhng/cl7mmtdsb006m14odmqlgj4fw",
			center: [-90, 20], // initial geo location
			zoom: 2 // initial zoom
		});





	}, []);




	return (
		<div className="App">
		<HeaderDesk></HeaderDesk>
			<div className="mapContainer">
				<div className="mapBox" ref={map} />
			</div>
		</div>
	);
}

export default Map;
