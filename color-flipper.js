const newColourBtnElement = document.getElementById('new-color-btn');
const currentColorElement = document.getElementById('current-color');

const hexValues = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'A',
	'A',
	'C',
	'D',
	'E',
	'F',
	];

function getRandomHexValue(){
	const randomIndexPosition = Math.floor(Math.random()*hexValues.length);
	const randomHexValue = hexValues[randomIndexPosition];
	return randomHexValue;
}

function getRandomHexString(stringLength){
	let hexString = '';
	for (let i=0;i<stringLength;i++){
		hexString += getRandomHexValue();
	}
	return hexString;
}


newColourBtnElement.addEventListener('click',function(){
	const randomHexString = '#' + getRandomHexString(6);
	// alert(randomHexString);
	document.body.style.backgroundColor = randomHexString;
	currentColorElement.innerHTML=randomHexString;
})