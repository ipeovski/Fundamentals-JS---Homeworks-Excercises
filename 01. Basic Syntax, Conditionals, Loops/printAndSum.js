function printAndSum(start, end){
    sum = 0;
    let numbers = "";
    for (i = start; i <= end; i++){
        sum += i;
        numbers += i + ' ';
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);
printAndSum(0,26);
printAndSum(50,60);