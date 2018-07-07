window.onLoad = function() {

    var name = "Hanzo";
    var weapon = "Bow";
    
    var ninja = {
        name, weapon,
        car(x){
            console.log(`You unsuccessfully tried to buy a car ${x} times`);
        }
    };

    console.log(ninja.car(5));
}