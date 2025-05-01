
// PART 1: "FIZZ BUZZ"
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.


let i = 1;

while (i <= 100 ){
if (i % 3 ===0  && i % 5 === 0 ){
    console.log("FizzBuzz")

}else if (i % 5 === 0) {
    console.log("Buzz");
        
}else if ( i % 3 === 0) {
    console.log("Fizz")
} else {
    console.log(i);

}

i++;
}

//PART 2: PRIME TIME 
//A prime number is any whole number greater than 1 that cannot 
// be exactly divided by any whole number other than itself and 1.

let n=20;

for (let i = n+1; ; i++ ){

    let divisibles=0;

    for(let p = 1; p <= i; p++){
        if(i % p === 0){
            divisibles++;
        }
    } 
    if(divisibles === 2){
        console.log(i)
        break;
    }
}






// Part 3: Feeling Loopy

let csv= "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26;"
/* 
ID NAME OCCUPATION AGE
42 BRUCE KNIGHT     41

*/




let row = ''
let cell = ''

for (let i = 0; i < csv.length; i++) {
	let symbol = csv[i]
	
	if  (symbol !== ',' && symbol !== '\n') {
		cell = cell + symbol 
	}

	if  (symbol === ",") {
		row = row + " " + cell  // ID Name
		cell = ''
	} else if  (symbol === "\n" || i === csv.length - 1) {
		row = row + " " + cell
		cell = ''
		console.log(row)
		row = ''
	}
}
