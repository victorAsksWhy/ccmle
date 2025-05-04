//import Chance from 'chance'
//const chance = new Chance()
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
    if (baseOrBoost == 'base'){ //type: additive or multiplicative.
        if (type == 'add'){     //amount + or times by how much
            baseppc += amount;  //baseOrBoost: modify the base or add a boost
        }
        else if (type == 'multi'){
            baseppc = baseppc * amount;
        }
    }
    else if (baseOrBoost == 'boost'){
        if (type == 'add'){
            bonusTotal += amount;
        }
        else if (type == 'multi'){
            bonusTotal = bonusTotal * amount; //pls don't use this it will screw up progression
        }
    };
    //update();
};
function addPoint(){
    var pointsPerClick = baseppc+bonusTotal;    
    points += pointsPerClick;
    document.getElementById("pointstext").innerHTML=points;
    update();
}
var upgrade1cost = 10; //formula: 10*level^1.2 must be declared outside!
var upgrade1level = 1; //must be ou
function upgrade1(){  
    var upgrade1maxlevel = 20;
    var type = 'add';
    var amount = 1;
    var boostType = 'boost';
    if (points >= upgrade1cost && upgrade1level < upgrade1maxlevel){
        points -= upgrade1cost;    
        upgrade1level += 1;
        upgrade1cost = Math.round(10 * upgrade1level ** 1.2);  
        console.log('cost: %d. level: %d', upgrade1cost,upgrade1level)
        document.getElementById("upgrade1costindicator").innerHTML=upgrade1cost;
        document.getElementById("upg1level").innerHTML=upgrade1level;     
        calculateBonus(type, amount, boostType);
        update();
        
    };  
};
//upgrade 2 things

var upgrade2cost = 75; //formula: 75*2^level
var upgrade2level = 0;
function upgrade2(){  
    var upgrade2maxlevel = 10;
    var type = 'multi';
    var amount = 1.3;
    var boostType = 'base';
    if (points >= upgrade2cost && upgrade2level < upgrade2maxlevel){
        points -= upgrade2cost;    
        upgrade2level += 1;
        upgrade2cost = 75*2**upgrade2level;
        console.log("the cost of upg 2 is now %d and the level is %d",upgrade2cost, upgrade2level);
        document.getElementById("upgrade2costindicator").innerHTML=upgrade2cost;
        document.getElementById("upg2level").innerHTML=upgrade2level;     
        calculateBonus(type,amount,boostType);
        update();
    };
};

//upgrade 3 things

var upgrade3cost = 750;
var upgrade3level = 0;
function upgrade3(){
    var upgrade3maxlevel = 1;
    var type='add';
    var amount=25;
    var boostType='base';
    if (points >= upgrade3cost && upgrade3level < upgrade3maxlevel){
        boughtUpgrade3 = 1;
        points -= upgrade3cost;
        upgrade3level += 1;
        upgrade3cost = Math.round(750*1.15**upgrade3level);
        console.log("the cost of upg 3 is now %d with level %d", upgrade3level, upgrade3cost);
        document.getElementById("upg3level").innerHTML=upgrade3level;
        document.getElementById("upgrade3costIndicator").innerHTML=upgrade3cost;
        calculateBonus(type,amount,boostType);
        update();
    };
};
var upgrade4cost = 2500;
var upgrade4level = 0;
function upgrade4(){ // unlocks mining, will not use da system
        var maxlevel = 1;
        if (points >= upgrade4cost && upgrade3level < maxlevel){
            points -= upgrade4cost;
            update();
            console.log('breaking news: local player unlocks mining');
    }
}

//all the mining stuuf goes here
//here we go again
class oreGenerator{
    constructor(){
        this.ores = [];
    }
    newOre(oreName, rarity){
        //note: don't screw up and have a negative chance
        this.ores.push({oreName, chance: 1 / rarity})
    }
}