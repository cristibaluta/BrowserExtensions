var dayOfWeek = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var monthName = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var currentDate = new Date();
document.getElementsByName('timestamp')[0].value = currentDate.getTime()/1000;
updateDateFromTimestamp();

function updateDateFromTimestamp() {
	var timestamp = document.getElementsByName('timestamp')[0];
	var date = new Date(parseInt(timestamp.value) * 1000);
	
	var result = document.getElementsByName('result')[0];
	result.value =
		dayOfWeek[date.getDay()] + ' ' +
		monthName[date.getMonth()] + ' ' +
		date.getDate() + ', ' +
		(date.getYear() < 1900 ? date.getYear() + 1900 : date.getYear());
		
	document.getElementsByName('inYear')[0].value = date.getFullYear();
	document.getElementsByName('inMon')[0].value = date.getMonth() + 1;
	document.getElementsByName('inDay')[0].value = date.getDay();
	document.getElementsByName('inHr')[0].value = date.getHours();
	document.getElementsByName('inMin')[0].value = date.getMinutes();
	document.getElementsByName('inSec')[0].value = date.getSeconds();
}

function updateTimestampFromDate() {
	document.getElementsByName('timestamp')[0].value = new Date(
		parseInt(document.getElementsByName('inYear')[0].value), 
		parseInt(document.getElementsByName('inMon')[0].value), 
		parseInt(document.getElementsByName('inDay')[0].value),
		parseInt(document.getElementsByName('inHr')[0].value), 
		parseInt(document.getElementsByName('inMin')[0].value), 
		parseInt(document.getElementsByName('inSec')[0].value)).getTime();
}
