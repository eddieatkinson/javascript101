// for(let i = 5661.00; i > 0; i--){
// 	if (i % 29.53 == 0){
// 		console.log(i);
// 	}
// }
var year = 2000;
var newNum = 1;
var i =0;
var cycle = 29.5;
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var blueMoon = 0;
// newNum += cycle;
while(year < 3000){
	if(year % 4 != 0 || year % 100 == 0 && year % 400 != 0){ // Leap year
		daysInMonth[1] = 28;
	}else{
		daysInMonth[1] = 29;
	}
	newNum += cycle;
	// for(let i = 0; i < daysInMonth.length; i++){
	if (newNum > (daysInMonth[i] + 1)){ // not a blue moon
		newNum = newNum - daysInMonth[i];
		i++;
	}else{
		blueMoon++;
	};
	if(i == 12){
		i = 0;
		year++;
	}
}
// }
console.log(blueMoon);

// for(let i = 0; i < daysInMonth.length; i++){
// 		if(year % 4 != 0 || year % 100 == 0 && year % 400 != 0){
// 			daysInMonth[1] = 28;
// 		}else{
// 			// console.log(year);
// 			daysInMonth[1] = 29;
// 		}
// 	}