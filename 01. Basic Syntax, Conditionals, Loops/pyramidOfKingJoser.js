function pyramid(base, increment){
    let floor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

while(base > 1){
    let totalBlocks = base * base * increment;
    let innerBlocks = ((base - 2) * (base - 2)) * increment;
    let outerBlocks = totalBlocks - innerBlocks;

    if(base - 2 == 0){
        break;
    }

    floor ++;
base -= 2;

if (floor % 5 == 0){
    lapis += outerBlocks;
    stone += innerBlocks;
} else {
    marble += outerBlocks;
    stone += innerBlocks;
}
}

floor++;
    height = Math.floor(floor * increment);
    gold += Math.ceil(base * base * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);


}

pyramid(11,1);