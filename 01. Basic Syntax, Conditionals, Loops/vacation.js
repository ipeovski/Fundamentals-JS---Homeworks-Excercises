function vacation(people, groupType, day){
   let price = 0;
   switch(groupType){
    case "Students":
      if (people < 30){
         if (day == "Friday"){
         price = 8.45 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         } else if (day == "Saturday"){
            price = 9.8 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         } else if (day == "Sunday"){
            price = 10.46 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         }
      } else {
         if (day == "Friday"){
            price = 8.45 * people * 0.85 ;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Saturday"){
               price = 9.8 * people * 0.85;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Sunday"){
               price = 10.46 * people * 0.85;
            console.log(`Total price: ${price.toFixed(2)}`);
            }
      }
      break;
      case "Business":
      if (people < 100){
         if (day == "Friday"){
         price = 10.9 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         } else if (day == "Saturday"){
            price = 15.6 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         } else if (day == "Sunday"){
            price = 16 * people;
         console.log(`Total price: ${price.toFixed(2)}`);
         }
      } else {
         if (day == "Friday"){
            price = 10.9 * people - 10 * 10.9;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Saturday"){
               price = 15.6 * people - 10 * 15.6;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Sunday"){
               price = 16 * people - 10 * 16;
            console.log(`Total price: ${price.toFixed(2)}`);
            }
      }
      break;
      case "Regular":
         if (people < 10 || people > 20){
            if (day == "Friday"){
            price = 15 * people;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Saturday"){
               price = 20 * people;
            console.log(`Total price: ${price.toFixed(2)}`);
            } else if (day == "Sunday"){
               price = 22.5 * people;
            console.log(`Total price: ${price.toFixed(2)}`);
            }
         } else {
            if (day == "Friday"){
               price = 15 * people * 0.95;
               console.log(`Total price: ${price.toFixed(2)}`);
               } else if (day == "Saturday"){
                  price = 20 * people * 0.95;
               console.log(`Total price: ${price.toFixed(2)}`);
               } else if (day == "Sunday"){
                  price = 22.5 * people * 0.95;
               console.log(`Total price: ${price.toFixed(2)}`);
               }
         }
         break;
   }
}
vacation(9, "Regular", "Saturday");
vacation(15, "Regular", "Friday");
vacation(23, "Regular", "Sunday");