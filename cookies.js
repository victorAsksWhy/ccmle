//const { sleep } = require("openai/core.mjs");
var baseppc = 1;
var cperclick = 1;
var points = 0;
var button = document.getElementById("cookieUpgrade0");
var upgrade1level = 1;
var upgrade1cost = (10 * upgrade1level ** 1.15);
var upgrade1bonus = 0;
var cpcBonusUpgrade2 = 0;
//document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
console.log("%d",points)
function update(){
    document.getElementById("cookiestext").innerHTML=points;
    console.log("updated to %d", points)
}
function addCookie(){
    cperclick = baseppc + upgrade1bonus*(2**upgrade2Level);
    points += cperclick;
    console.log("u got %d",points)
    document.getElementById("cookiestext").innerHTML=points;
    update();
}
var upgrade1bonus = 0;
var upgrade1maxlevel = 20;
function upgrade1(){  
    if (points >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        points -= upgrade1cost;    
        upgrade1bonus += 1;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.15);  
        console.log("the cost of upg 1 is now %d",upgrade1cost);
        console.log("the bonus is %d", upgrade1bonus
        )
        update();
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;     
    }   
}

var upgrade2Level = 0;
var upgrade2Bonus = 2**upgrade2Level;
var upgrade2MaxLevel = 5;
var upgrade2Cost = 50*3**upgrade2Level;
function upgrade2(){
    if (points >= upgrade2cost && upgrade2Level < upgrade2MaxLevel){
        points -= upgrade2cost;

        upgrade2Level += 1;
        upgrade2Cost = 50*3**upgrade2Level;
        
        console.log("UPG 2 bought successfully! It is now level %d", upgrade2Level);
        console.log("UPG 2 now costs %d", upgrade2cost);
        console.log("Now multiplies points by 2^%d", upgrade2Level);
        update();
    }
}