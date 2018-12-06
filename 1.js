//test

swapA('junyiacademy');

swapB('flipped class room is important');


//fun
function swapA(s) {

	let newString=[]; 

	for(let i=1; i<=s.length ;i++){
		newString += s[s.length-i];
	}

	console.log(newString);

	return newString;
}

function swapB(s) {

	let newString=[]; 

	s = s.split(" ");

	for(let j=0; j<s.length; j++){
		for(let i=1; i<=s[j].length ;i++){
			newString += s[j][s[j].length-i];
		}
		newString += ' ';
	}

	console.log(newString);

	return newString;
}