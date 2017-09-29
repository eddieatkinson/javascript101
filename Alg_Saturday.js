var year = 1701;
var day = 0;
var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var count = 1;
while(year <= 1800){
	for(let i = 0; i < daysInMonth.length; i++){
		if(year % 4 != 0 || year % 100 == 0 && year % 400 != 0){
			daysInMonth[1] = 28;
		}else{
			// console.log(year);
			daysInMonth[1] = 29;
		}
		day += daysInMonth[i];
		if (day % 7 == 0){
			count++
		}
	}
	year++;
	}
console.log(count);