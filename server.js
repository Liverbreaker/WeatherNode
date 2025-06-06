const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const schedule = require('node-schedule');
// const dotenv = require('dotenv');
const data = require('./methods/getdata');

// require('dotenv').config()
async function getWeather(){
	const res = await fetch(`${fetch_URL}`, { mode: 'cors', credentials: 'include'})
	.catch(err => console.error(err));
	weather = await res.json();
};

let weather;
process.env.TZ = 'Asia/Taipei';
const fetch_URL = process.env.FetchURL ;
const port = process.env.PORT || 4000;

getWeather();
data.updateRegularly(schedule, fetch_URL, weather);

const app = express();
// app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, resp) =>{
	resp.send(`This is working!!`);
})
app.get('/getinfo', (req, resp) =>{
	resp.json(weather);
})

app.listen(port,()=> {
	console.log(`Server is running on port ${port}`);
	console.log(new Date().toString());
});
