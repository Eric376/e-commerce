var URL_base = "http://localhost:8080/";
var XHR = new XMLHttpRequest();
XHR.open("POST", URL_base + "order/createOrder");
XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var drinkQuantity=0;
function addD() {
    drinkQuantity=drinkQuantity+1;
    document.getElementById("drinkQ").innerHTML = "Quantity: "+drinkQuantity;
}
var iceQuantity=0;
function addI() {
    iceQuantity=iceQuantity+1;
    document.getElementById("iceQ").innerHTML = "Quantity: "+iceQuantity;
}
var friesQuantity=0;
function addF() {
    friesQuantity=friesQuantity+1;
    document.getElementById("friesQ").innerHTML = "Quantity: "+friesQuantity;
}
var pizzaQuantity=0;
function addP() {
    pizzaQuantity=pizzaQuantity+1;
    document.getElementById("pizzaQ").innerHTML = "Quantity: "+pizzaQuantity;
}
var noodleQuantity=0;
function addN() {
    noodleQuantity=noodleQuantity+1;
    document.getElementById("noodleQ").innerHTML = "Quantity: "+noodleQuantity;
}var roastPorkQuantity=0;
function addR() {
    roastPorkQuantity=roastPorkQuantity+1;
    document.getElementById("roastQ").innerHTML = "Quantity: "+roastPorkQuantity;
}var vegeSQuantity=0;
function addV() {
    vegeSQuantity=vegeSQuantity+1;
    document.getElementById("vegeSQ").innerHTML = "Quantity: "+vegeSQuantity;
}var beefSQuantity=0;
function addB() {
    beefSQuantity=beefSQuantity+1;
    document.getElementById("beefSQ").innerHTML = "Quantity: "+beefSQuantity;
}
var chickenSQuantity=0;
function addC() {
    chickenSQuantity=chickenSQuantity+1;
    document.getElementById("chickenSQ").innerHTML = "Quantity: "+chickenSQuantity;
}
var turkeySQuantity=0;
function addT() {
    turkeySQuantity=turkeySQuantity+1;
    document.getElementById("turkeySQ").innerHTML = "Quantity: "+turkeySQuantity;
}