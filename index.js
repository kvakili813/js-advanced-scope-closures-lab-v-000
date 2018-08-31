function produceDrivingRange(range) {

  return function(block1, block2) {

    let distance = parseInt(block2) - parseInt(block1)

    return (distance > range ? `${distance - range} blocks out of range` :`within range by ${range - distance}`)
  }

}


function produceTipCalculator(tipPercent) {
  return function(total) {
    return total * tipPercent
  }
}