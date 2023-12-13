const lyrics = 'Zara Sa Dil Main';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(0, 4);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

//M mdn web docs String.prototype.at()


const line = ['La La Lala', 'Lala la la'];
const newSong = line.join(' : ');
console.log(newSong);