const updateData=(fetch_URL, weather)=>{
	fetch(`${fetch_URL}`, { mode: 'cors', credentials: 'include'})
	.then(resp=>weather =resp.json())
	.catch(err => console.error(err));
	console.log("Success!!")
};

const updateRegularly = (schedule, fetch_URL, weather)=>{
	// Schedule a job at 5:30 AM
	schedule.scheduleJob('30 5 * * *', function() {
	    console.log('Executing task at 5:30 AM');
	    updateData(fetch_URL, weather);
	});

	// Schedule a job at 11:30 AM
	schedule.scheduleJob('30 11 * * *', function() {
	    console.log('Executing task at 11:30 AM');
	    updateData(fetch_URL, weather);
	});

	// Schedule a job at 5:30 PM
	schedule.scheduleJob('30 17 * * *', function() {
	    console.log('Executing task at 5:30 PM');
	    updateData(fetch_URL, weather);
	});
	// Schedule a job at 11:30 PM
	schedule.scheduleJob('30 23 * * *', function() {
	    console.log('Executing task at 11:30 PM');
	    updateData(fetch_URL, weather);
	});
};



module.exports={
	updateRegularly,
	updateData
};