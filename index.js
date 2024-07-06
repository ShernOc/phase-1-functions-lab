// Code your solution in this file!
//Distance in block 
//Math.abs returns a positive number 
function distanceFromHqInBlocks(bl2){
  let bl1 = 42; 
  return Math.abs((bl2-bl1)); 
}
 distanceFromHqInBlocks(50); 
 console.log(distanceFromHqInBlocks(34)); 

 // Distance in Feet 

function distanceFromHqInFeet (bl2) {
  const distFeet = 264;
  const distBlock = distanceFromHqInBlocks(bl2)
 return distBlock * distFeet;
}
  distanceFromHqInFeet(50);

// Distance in Travelled in Feet 

function distanceTravelledInFeet(start, destination){
    //returns the number of feet traveled
    const distTravelledFT= destination-start;
    const distFeet = 264;
    return Math.abs(distFeet*distTravelledFT);
  }
  distanceTravelledInFeet(50,60); 

// Calculate the Price Fair 

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
      let Totaldistance = distanceTravelledInFeet(start,destination);
      
     if (Totaldistance>2500){
      return `cannot travel that far`
     }else if (Totaldistance>=2000){
      return 25; 
     }else if (Totaldistance>400 &&Totaldistance<=2000){
      return 0.02 * (Totaldistance-400); 
     }else {
      return 0;
     }
  }
  calculatesFarePrice(34,24)