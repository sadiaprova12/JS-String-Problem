const lyrics = 'Zara Sa Dil Main';
// console.log(lyrics);

// true or false. j variable dibo seta ase kina bujhar khuje bher korar process:
// const doesExist = lyrics.includes('Zara');
// or,
const searchString = 'Zara';
// const doesExist = lyrics.includes(searchString);

// toLowerCase()
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

// toUpperCase()
const write = 'MAIN';
const lyricsUpperCase = write.toUpperCase();
const exist = lyricsUpperCase.includes(write);
 console.log(exist);