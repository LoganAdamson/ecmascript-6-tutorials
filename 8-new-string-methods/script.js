window.onload = function() {

    /* ES6 String Methods:
    - repeat
    var str = "why "
    console.log(str.repeat(150))

    - startsWith
    var str = "goodbye";
    console.log(str.startsWith("bye", 4));

    OR

    var str = "goodbye";
    console.log(str.startsWith(good));

    - endsWith
    var str = "goodbye";
    console.log(str.endsWith("bye"));

    OR

    var str = "goodbye"
    console.log(str.endsWith("good", str.length - 3));

    */

    var youSay = "goodbye";

    if (youSay.startsWith("goodbye")) {
        var iSay = "hello";
    }

    console.log(`You say ${youSay}, and I say ${iSay} !`);

    /*  - includes

    var test = ""My name is Genji";
    console.log(test.includes("name"));

    */
}