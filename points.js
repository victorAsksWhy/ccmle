// dont elete or else
var baseppc = 1;
var pointsPerClick = 1;
var points = 0;
var button = document.getElementById("cookieUpgrade0");
var upgrade1level = 1;
var upgrade1cost = (10 * upgrade1level ** 1.15);
var upgrade1bonus = 0;
var cpcBonusUpgrade2 = 0;
var upgrade2level = 0;
var upgrade3level = 0;
var boughtUpgrade3 = 0;
function setpoints(n){ //🤫
    points=n;
    update();
}
//document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
console.log("%d",points)
function update(){
    var boostedBase = baseppc*(2**upgrade2level);
    var pointsPerClick = boostedBase+upgrade1bonus;
    document.getElementById("pointIndicator").innerHTML=pointsPerClick;
    console.log("getting %d points per click", pointsPerClick)
    document.getElementById("pointstext").innerHTML=points;
    console.log("updated to %d", points)
}
function addPoint(){
    var boostedBase = baseppc+25*boughtUpgrade3*(2**upgrade2level);
    var pointsPerClick = boostedBase+upgrade1bonus;
    console.log("ppc should be %d",pointsPerClick);
    console.log("from %d base ppc", baseppc);
    console.log("plus %d from first upg:",upgrade1bonus);
    console.log("and base ppc times 2^%d",upgrade2level)
    points += pointsPerClick;
    console.log("u got %d",points);
    document.getElementById("pointstext").innerHTML=points;
    update();
}
var upgrade1bonus = 0;
var upgrade1maxlevel = 20;
function upgrade1(){  
    if (points >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        points -= upgrade1cost;    
        upgrade1bonus += 1;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.2);  
        console.log("the cost of upg 1 is now %d",upgrade1cost);
        console.log("the bonus is %d", upgrade1bonus
        )
        update();
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;     
    }   
}
//upgrade 2 things
var upgrade2cost = 75;
var upgrade2maxlevel = 7;

function upgrade2(){  
    if (points >= upgrade2cost && upgrade2level < upgrade2maxlevel){
        points -= upgrade2cost;    
        upgrade2level += 1;
        upgrade2cost = 75*2**upgrade2level;
        console.log("the cost of upg 2 is now %d",upgrade2cost);
        console.log("the level is %d", upgrade2level)
        update();
        document.getElementById("upgrade2costindicator").innerHTML=upgrade2cost;
        document.getElementById("upg2level").innerHTML=upgrade2level;     
    }   
}

//upgrade 3 things

var upgrade3cost = 750;
var upgrade3maxlevel = 1;
function upgrade3(){
    if (points >= upgrade3cost && upgrade3level < upgrade3maxlevel){
        boughtUpgrade3 = 1;
        points -= upgrade3cost;
        upgrade3level += 1;
        console.log("bought upgrade 3");
        update();
        document.getElementById("upg3level").innerHTML=upgrade3level;
    }
}