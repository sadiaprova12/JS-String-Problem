const userName = 'blackPink';
const userInput = 'blackpink';
// toLowerCase() deyar reason hocche joto letter ase sob choto word hoye jabe. For Example : 'blackPink' Output hbe: blackpink. Majher P ta choto word hoye jabe .
console.log(userName.toLowerCase());
// toUpperCase() deyar reason hocche joto letter ase sob boro word hoye jabe. For Example : 'blackPink' Output hbe: BLACKPINK.
console.log(userInput.toUpperCase());
if( userName === userInput){
    console.log('valid user')
}
else{
    console.log('invalid user');
}