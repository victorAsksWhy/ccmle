//const { sleep } = require("openai/core.mjs");

var cperclick = 1;
var cookies = 0;
var button = document.getElementById("cookieUpgrade0");

var upgrade1level = 1;
var upgrade1cost = (10 * upgrade1level ** 1.15);
//document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
console.log("%d",cookies)
function update(){
    document.getElementById("cookiestext").innerHTML=cookies;
    console.log("updated to %d", cookies)
}
function addCookie(){
    cookies += cperclick;
    console.log("u got %d",cookies)
    document.getElementById("cookiestext").innerHTML=cookies;
}
function upgrade1(){  
    var upgrade1maxlevel = 20;
    if (cookies >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        cookies -= upgrade1cost;    
        cperclick += 1;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.15);  
        console.log("the cost of upg 1 is now %d",upgrade1cost);
        update();
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;
        
        
       
        
    }
   
    
}