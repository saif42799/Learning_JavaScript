// random password generator

function generatePassword(length, includeLowercase, includeUpercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUpercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length == 0){
        return `(At least 1 set of characters nees to be selected )`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];


    }

    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUpercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUpercase, 
                                  includeNumbers, 
                                  includeSymbols);


console.log(`Generate password: ${password}`);