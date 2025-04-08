// dont elete or else
var baseppc = 1;
var points = 0;
var cpcBonusUpgrade2 = 0;
var upgrade3level = 0;
var boughtUpgrade3 = 0;
var bonusTotal = 0;

function update(){
    var pointsPerClick = baseppc +bonusTotal;
    document.getElementById("pointIndicator").innerHTML=pointsPerClick;
    document.getElementById("pointstext").innerHTML=points;
    console.log("updated to %d points. you are getting %d points per click.", points,pointsPerClick)
}
function setpoints(n){ //🤫
    points=n;
    update();
}
function calculateBonus(type, amount, baseOrBoost){ //hopefully rework the bonus
    if (baseOrBoost == 'base'){ //hopefully self documenting
        if (type == 'add'){
            baseppc += amount;
        }
        else if (type == 'multi'){
            baseppc * amount;
        }
    }
    else if (baseOrBoost == 'boost'){
        if (type == 'add'){
            bonusTotal += amount;
        }
        else if (type == 'multi'){
            bonusTotal = bonusTotal * amount; //pls don't use this it will screw up progression
        }
    }
    //update();
}
function addPoint(){
    var pointsPerClick = baseppc+bonusTotal;    
    points += pointsPerClick;
    document.getElementById("pointstext").innerHTML=points;
    update();
}
var upgrade1cost = 10; //formula: 10*level^1.2 must be declared outside!
function upgrade1(){  
    var upgrade1level = 1;
    var upgrade1maxlevel = 20;
    var type = 'add'
    var amount = 1
    var boostType = 'boost'  
    if (points >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        points -= upgrade1cost;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.2);  
        console.log('cost: %d. level: %d', upgrade1cost,upgrade1level)
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;     
        console.log("the cost of upg 1 is now %d",upgrade1cost);
        console.log("the bonus is %d", upgrade1level);
        calculateBonus(type, amount, boostType);
        update();
        
    }   
}
//upgrade 2 things


function upgrade2(){  
    var upgrade2cost = 75; //formula: 75*2^level
    var upgrade2maxlevel = 7;
    var upgrade2level = 0;
    var type = 'multi';
    var amount = 2;
    var boostType = 'base';
    if (points >= upgrade2cost && upgrade2level < upgrade2maxlevel){
        points -= upgrade2cost;    
        upgrade2level += 1;
        upgrade2cost = 75*2**upgrade2level;
        console.log("the cost of upg 2 is now %d and the level is %d",upgrade2cost, upgrade2level);
        calculateBonus(type,amount,boostType);
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