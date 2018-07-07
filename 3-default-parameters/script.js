window.onload = function(){

    // The default parameter:
    // function log(num=10){
    //    console.log(num);
    //}

    // Passing through a specific parameter overrides the default parameter:
    // log(20);

   function logMe(name="Genji", belt="Green", age=30){
       console.log("My name is " + name + " and my belt color is " + belt + " and my age is " + age);
   }

   logMe("Logan", "black", 26);

}