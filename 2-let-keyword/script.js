window.onLoad = function () {
    // Global variable:
    // var x = 10;

    // if(x > 5) {
    // Does not override global variable; creates a local scope within the code block.
    //    let x = 5;
    //    console.log("Inside: " + x);
    //}

   // console.log("Outside: " + x);

   var items = document.getElementsByTagName("Li");

   // Creates a global variable, not a local one: 
   // for(var x = 0; x < items.length; x++) {
   //    items[x].onclick = function() {
   //        console.log(x);
   //    }
   //}

   // Logs "4":
   // console.log(x);

   // "Let" instead creates a local variable within the code block:
   for(let x = 0; x < items.length; x++){
       items[x].onclick = function(){
           console.log(x);
       }
   }
}