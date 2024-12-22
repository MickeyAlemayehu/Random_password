const length = 8;
const include_uppercase = true;
const include_lowercase = false;
const include_nums = true;
const include_symbols = true;

function generatePassword(length, include_uppercase, include_lowercase, include_nums, include_symbols){
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const nums = "0123456789";
    const symbols = "~!@#$%^&*-;:";

    let allowedChar = "";
    let password = "";

    allowedChar += include_uppercase ? uppercase : "";
    allowedChar += include_lowercase ? lowercase: "";
    allowedChar += include_nums ? nums : "";
    allowedChar += include_symbols ? symbols : "";
    let index = 0;

    for(let i = 0; i < length; i++){
        index = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[index];
    }
    return password;
}

console.log( "Password: " + generatePassword(length,include_uppercase,include_lowercase,include_nums,include_symbols));