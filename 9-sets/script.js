window.onload = function(){

    // Sets eliminate duplicates: if the same value is entered twice in the set, it will only display it once.
    
    // var names = new Set();

    // names.add("Hanzo").add("Genji").add("Lena");

    // Returns a boolean:
    // console.log(names.delete("Lena"));

    // .delete cannot be chained like such:
    // names.delete("Hanzo").delete("Genji");

    // .clear
    // .clear(); will clear the entire set.

    // console.log(names.has("Genji"));

    // console.log(names.size);

    // console.log(names);

    var heroes = ["Reinhardt", "Zarya", "Hanzo", "Genji", "Ana", "Reinhardt", "Pharah", "Reaper", "Ana"];

    var refinedHeroes = new Set(heroes);

    console.log(refinedHeroes);

    heroes = [...refinedHeroes];

    console.log(heroes);

}