// string methods = allow you to manipulate and work with text (strings)

let username = "BroCode ";

console.log(username.charAt(0));
console.log(username.indexOf("o"));
console.log(username.lastIndexOf("o"));
console.log(username.length);
console.log(username.trim()); // removes white spaces
console.log(username.toLocaleUpperCase());
console.log(username.toLocaleLowerCase());
console.log(username.repeat(3));
console.log(username.startsWith("B"));
console.log(username.endsWith("e"));
console.log(username.includes("C")); // check if the string contains whatever you eant to check

let phoneNumber = "123-234-3456";
phoneNumber = phoneNumber.replaceAll("-", ""); // replaces all "-" with ""
console.log(phoneNumber);

console.log(phoneNumber.padStart(15, "0")); // adds 15 additional 0's at the begining of the number
console.log(phoneNumber.padEnd(15, "0")); // adds 15 additional 0's at the end of the number






