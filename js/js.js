
// I would never write my css through a js write call, 
// BUT FOR THIS WEEK ONLY 
// I have done so to understand js' quirks better.

document.write('<style> h1 {text-align: center;} body{background: steelblue;  font-family: "Lucida Console", Monaco, monospace; text-align: center;}table{ width: 100%;  max-width: 600px;  height: 320px;  border-collapse: collapse;  border: 1px solid #38678f;  margin: 50px auto;  background: white;}	th {  background: steelblue;  height: 54px;  width: 25%;  font-weight: lighter;  text-shadow: 0 1px 0 #38678f;  color: white;  border: 1px solid #38678f;  box-shadow: inset 0px 1px 2px #568ebd;  transition: all 0.2s;}	tr {  border-bottom: 1px solid #cccccc;}	td {  border-right: 1px solid #cccccc;  padding: 10px;  transition: all 0.2s;}	.jsGeneratedTable {	text-align: center;  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);</style>');


//header and opening the multiplication table.
document.write('<h1>10x10 Multiplication Table</h1>');
document.write('<table class="jsGeneratedTable">');


//multiplication <table> for up to 10. very simp nested loop.
for (let i = 1; i <= 10; i++){
	document.write('<tr>');
	for (let j = 1; j <= 10; j++){
			document.write('<td>');
			document.write(i * j);
			document.write('</td>');
	}
	document.write('</tr>');
}


//close that table up. ugh yuck tables.
document.write('</table>');


//prime finding function: nested loop that uses % to find factors of number[i]. 
//breaks if it finds a factor, writes if it doesn't.

function seek_prime(user_limit) {
	
	// one HUGE reason not to inject css via js...
	document.write('<style> h1 {text-align: center;} body{background: steelblue;  font-family: "Lucida Console", Monaco, monospace; text-align: center;}table{ width: 100%;  max-width: 600px;  height: 320px;  border-collapse: collapse;  border: 1px solid #38678f;  margin: 50px auto;  background: white;}	th {  background: steelblue;  height: 54px;  width: 25%;  font-weight: lighter;  text-shadow: 0 1px 0 #38678f;  color: white;  border: 1px solid #38678f;  box-shadow: inset 0px 1px 2px #568ebd;  transition: all 0.2s;}	tr {  border-bottom: 1px solid #cccccc;}	td {  border-right: 1px solid #cccccc;  padding: 10px;  transition: all 0.2s;}	.jsGeneratedTable {	text-align: center;  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);</style>');

	
	//header
	document.write('<h1> All Prime Numbers from 1 to ', user_limit, '</h1>');
	
	//some css and a reload button
	document.write('<html><style> body{backgroundColor: steelblue;} .content{backgroundColor: steelblue;}</style>		<br>	<button value="Refresh Page" onClick="window.location.reload();">Reload Page</button>');
	
	
	//more css that doesn't work... yet.
	document.write('<div class="content">');
	

	//fricken... pesky properties of 1 make it a factor for everything! you lil jerk.
	if (user_limit >= 1){
		document.write('1 <br>');
	}
	
	//loop to find primes here
	for (let i = 2; i <= user_limit; i++){
		console.log('still working... \n');
		let is_prime = true;

		for (let seek = 2; seek < i ; seek++){

			if (i % seek === 0) {
				is_prime = false;
				break;
			}

		}

		if (is_prime) {
			console.log('found a prime \n');
			document.write(i + '<br>');
		}
		
	}
	
	//closing my div, my guy
	
	if (user_limit >= 300){
		
		document.write('<br><button value="Refresh Page" onClick="window.location.reload();">Reload Page</button>');
		
	}
	
	document.write('</div>');
}	


//description
document.write('<h1>Find Prime Numbers</h1>');

//user input field
document.write('<input type="text" name="in_limit" id="limit_id" value="40" />');


//function to pass user input to find prime numbers in
function pass_input(){
	get_input = document.getElementById("limit_id").value
	seek_prime(get_input);
}
	
//button to pass input to seek_prime() function
document.write('<button value="passer" onclick="pass_input()">Find Prime</button>');