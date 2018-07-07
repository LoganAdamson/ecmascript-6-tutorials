window.onLoad = function () {

    // Global version of the constant: 
    const pi = 3.142;
    
    function calcArea(r) {
    // Creates a local version of the constant (is not globally re-declared, only within this function):
        const pi = 10;
        console.log("The area is: " + pi * r * r);
    }
    // Logs the Global version of the constant, as it is outside of the function.
    
    console.log(pi);
    calcArea(5);
}