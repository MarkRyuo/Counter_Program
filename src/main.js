// increaseLabel
// resetLabel 
// decreaseLabel
// numberLabel

let numberLabel = 0 ;

window.alert("Lets Play a Boring Game!")

// Todo Increase
document.getElementById("increaseLabel").onclick = function () {

  numberLabel += 1 ;
  numberLabel = Number(numberLabel) ;
  document.getElementById("numberLabel").innerHTML = numberLabel ;

}
// Todo Reset
document.getElementById("resetLabel").onclick = function () {

  numberLabel = 0 ;
  numberLabel = Number(numberLabel) ;
  document.getElementById("numberLabel").innerHTML = numberLabel ;

}
// Todo Decrease
document.getElementById("decreaseLabel").onclick = function () {

  numberLabel -= 1 ;
  numberLabel = Number(numberLabel) ;
  document.getElementById("numberLabel").innerHTML = numberLabel ;

}