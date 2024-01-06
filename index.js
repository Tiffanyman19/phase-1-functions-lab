// Code your solution in this file!

const Hq = 42;
const feet = 264;

function distanceFromHqInBlocks(pickuoLocation) {
    console.log(Math.abs(Hq - pickuoLocation))
    return Math.abs (Hq - pickuoLocation)
}


function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * feet;
}


function distanceTravelledInFeet(Hq, number) {
    return Math.abs((number - Hq) * feet)
}

function calculatesFarePrice (Hq, destination) {
    if (distanceTravelledInFeet(Hq,destination) >2500){
        return 'cannot travel that far'}   
        
        else if(distanceTravelledInFeet(Hq,destination)>2000)
        {
        return 25;
        }
        
        let i = distanceTravelledInFeet(Hq,destination)-400;
            if ( i > 0){
             return i * 0.02 ;
            }
         
            return 0;
}
    