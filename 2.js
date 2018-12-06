//test
fun(15)

//fun
function fun(n) {

	let output=[]; 

	for(let i=1; i<=n; i++){
		
		if(i%3===0 || i%5===0){
			if (i%15===0){
				output.push(i);
			}
		}else{
			output.push(i);
		}
	}

	console.log('output: ', output.length);

	return output;
}

