/* window.onload = function(){
    var ninjaGreeting = function(){
        console.log("hiiiya");
    }

    ninjaGreeting();
}

// Represented as an arrow function:

window.onload = function(){

    var ninjaGreeting = name => console.log(`${name} says hiiiiyah`);
    
    ninjaGreeting("Mark");

} 

// Without the use of an arrow function: 

window.onload = function() {

    var ninja = {
        name: "Genji",
        slash(x){
            var _this = this;
            window.setInterval(function(){
                if(x > 0){
                    console.log(_this.name + " slashed the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.slash(5);

// With the use of an arrow function:

window.onload = function() {

    var ninja = {
        name: "Genji",
        slash(x){
            
            window.setInterval(() => {
                if(x > 0){
                    console.log(this.name + " slashed the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.slash(5);

}*/

