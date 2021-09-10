function temprature(celcious){
    return (celcious * 9/5) + 32;
}
function tempprinter(){
    var temp = prompt("Please Enter your value");
    document.getElementById("data").innerHTML = (temprature(temp) + " Faranhite");
}