function reverseWords(str){
    const words = str.split(' ');
    // console.log(words);
    const result = [];
    // rotated or reverse words
    for(let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
}






const myString = 'I am a goos girl';
reverseWords(myString);