// Date objects = Objects that contain values that represent dates and times 
//                These date object can be changes and formatted 


// Date(year, month, day, hour, minute, second, ms)
const date = new Date();

// you can extract individual elements from the date 
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);



// You can set date 
const date2 = new Date();

date2.setFullYear(1999);

console.log(date2);


// compare dates
if(date > date2){
    console.log("Happy New Year ");
}