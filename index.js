
function distanceFromHqInBlocks(pickUpLocation){
    return  Math.abs(42 - pickUpLocation);
}

function distanceFromHqInFeet(pickUpLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation);
    return distanceInBlocks * 264; 
  }

  function distanceTravelledInFeet(startBlock, destinationBlock) {
    return Math.abs(destinationBlock - startBlock) * 264;
  }

  function  calculatesFarePrice(start, destination) {

    distanceTravelledInFeet = Math.abs(destination - start) * 264

    if (distanceTravelledInFeet > 2500) {
        return "cannot travel that far";
    } else if (distanceTravelledInFeet > 2000) {
        return 25;
    } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
        return (distanceTravelledInFeet - 400) * 0.02;
    } else {
        return 0
    }
}
