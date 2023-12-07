function getHistory(){
	return document.getElementById('history-value').innerText;
}

function printHistory(num){
	document.getElementById('history-value').innerText = num;
}

function getOutput(){
	return document.getElementById('output-value').innerText;
}

function printOutput(num){
	if(num === ''){
		document.getElementById('output-value').innerText = num;
	}else{
		document.getElementById('output-value').innerText = getFormattedNumber(num);
	}	
}

printOutput('0');


function reverseNumberFormat(num){
	return Number(num.replace(/,/g, ''));
}

function getFormattedNumber(num){
	if(num === '-'){
		return '';
	}else{
		return Number(num).toLocaleString('en');
	}
}


let operator = document.getElementsByClassName('operator');


for(let i = 0; i < operator.length; i++){
	operator[i].addEventListener('click', function(){
		if(this.id === 'clear'){
			printHistory('');
			printOutput('0');
		}else if(this.id === 'backspace'){
			let output = reverseNumberFormat(getOutput()).toString();
			output = output.substr(0, output.length - 1);
			if(output == '' || output == '-'){
				printOutput('0');
			}else{
				printOutput(output)
			}
			
		}else{
			let output = getOutput();
			let history = getHistory();

			if(output == '' && history != ''){
				if(isNaN(history[history.length-1])){
					history = history.substr(0, history.length - 1);
				}
			}

			if(output != '' || history != ''){
				output = output === ''? '':reverseNumberFormat(output);
				history = history + output;
				if(this.id == '='){
					let result = eval(history);
					printOutput(result);
					printHistory('');
				}else{
					history = history + this.id;
					printHistory(history);
					printOutput('');
				}
			}
		}
	})
}

let number = document.getElementsByClassName('number');
for(let i = 0; i < number.length; i++){

	number[i].addEventListener('click', function(){
		let value = reverseNumberFormat(getOutput());
		value = value + this.id;
		printOutput(value);
	})

}