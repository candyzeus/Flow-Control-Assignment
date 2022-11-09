const array = [];
let i = 10;
while (i > 1){
    if (i == 2 || i == 3){
        array.push(i);
    }
    else if (i%2 == 0 || i%3 == 0){
        
    }
    else{
        array.push(i);
    }
    i-- ;
}

array.reverse();
console.log(array);