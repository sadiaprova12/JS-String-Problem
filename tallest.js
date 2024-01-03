function maxInArray(numbers){
//  console.log('Array inside the array' , numbers);
for(let i = 0; i < numbers.length; i++){
    // let largest = numbers[0];
    const index = i;
    const element = numbers[index];
    // console.log(element);
    if(element > largest){
        largest = element;
    }
    return largest;
}
}

const heights =[167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('Tallest Person is: ',tallest);

// Task: Write a function to get the lowest number in an array