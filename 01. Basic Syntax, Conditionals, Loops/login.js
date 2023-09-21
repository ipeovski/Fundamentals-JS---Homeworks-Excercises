function login(array){
    let username = array.shift();
    let password = username.split("").reverse().join("");
    let failsCounter = 0;
    let currentPassword = array.shift();

    while (currentPassword !== password && failsCounter < 3){
        failsCounter++;
        console.log(`Incorrect password. Try again.`);
        currentPassword = array.shift();
    }

    if (currentPassword == password) {
        console.log(`User ${username} logged in.`);
      } else {
        console.log(`User ${username} blocked!`);
      }
}   
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])