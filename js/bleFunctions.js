function searchDevices()
{
	if(document.getElementById('hw').style.color == "pink")
		document.getElementById('hw').style.color = "black";
	else
		document.getElementById('hw').style.color = "pink";
	
	console.log("juu");
	
	navigator.bluetooth.requestDevice({
  acceptAllDevices: true,
  optionalServices: ['battery_service']
})
.then(device => { /* ... */ })
.catch(error => { console.log(error); });
	
let searchDevices = document.getElementById('searchDevices');
}