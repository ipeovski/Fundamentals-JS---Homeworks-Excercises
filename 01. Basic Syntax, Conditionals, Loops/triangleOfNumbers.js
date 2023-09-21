function triangleOfNumbers(n){
    let numbers = '';

    for(i = 1; i <= n; i++){
        for(j = 1; j <= i; j++){
            numbers += `${i} `;
        }
        console.log(numbers);
        numbers ='';
    }
}

triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);