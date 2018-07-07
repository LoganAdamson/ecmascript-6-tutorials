window.onload = function(){

    /* function* gen(){
    "Yield" pauses the generator:
        var x =yield console.log("pear");
        var y = yield console.log("banana");
        var z = yield console.log("apple");
        return x + y + z;
    }

    var myGen = gen();

    Starts the generator:
    myGen.next();

    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));
    console.log(myGen.next(3)); */

    Q.async(function* generator(){

        var tweets = yield $.getJSON("data/tweets.json");
        console.log(tweets);

        var friends = yield $.getJSON("data/fb-friends.json");
        console.log(friends);

        var ytVids = yield $.getJSON("data/yt-vids.json");
        console.log(ytVids);
    });


    function genWrapper(generator){
        // Set up generator / iterator
        var myGen = generator();

        // Create function to handle the yielded value
        function handle(yielded){

            if (!yielded.done){
                yielded.value.then(function(data) {
                    return handle(myGen.next(data));
                });
            }
        } // End handle

        // Return handle function, passing in myGen.next
        return handle(myGen.next());
    
    } // End genWrapper
};

