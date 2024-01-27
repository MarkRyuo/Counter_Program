// increaseLabel
// resetLabel 
// decreaseLabel
// numberLabel

let numberLabel = 0 ;

document.getElementById("increaseLabel").onclick = function () {

  numberLabel += 1 ;
  numberLabel = Number(numberLabel) ;
  document.getElementById("numberLabel").innerHTML = numberLabel ;

}