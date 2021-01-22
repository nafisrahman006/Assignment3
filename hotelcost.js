
function hotelCost(day){
    var taka = 100;
    if(day <= 10){
        taka = day*100;
    }
    else if(day <= 20){
        var firstPart = 10*100;
        var remaning = day - 10;
        var secondpart = 10*80;
        day = firstPart + secondpart ;

    }
    else{
        var firstPart = 10*100;
        var secondpart= 10*80;
        var remaning = day- 20;
        var thirdpart = remaning*50;
        day = firstPart + secondpart + thirdpart;

    }
    return day;
}
var count = hotelCost(1000);
console.log(count);