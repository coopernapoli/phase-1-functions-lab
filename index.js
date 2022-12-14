const hq=42

function distanceFromHqInBlocks(pickup)//initialize finction
{

return Math.abs(pickup - hq); //return the absolute value of the distance in blocks
}



const feet = 264

function distanceFromHqInFeet(pickup){

return Math.abs((pickup - hq)*feet);
}

function distanceTravelledInFeet(destination, pickup){
    return Math.abs((pickup - destination)*feet)
}

function calculatesFarePrice (pickup, destination){

    const distance = Math.abs((pickup - destination)*feet)
    if (distance < 400) {
        return 0;
    };
    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    };
    if (distance > 2000 && distance < 2500) {
        return 25;
    };
    if (distance > 2500) {
        return "cannot travel that far";
    };
}