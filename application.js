function printHello(){
    var kyle = document.getElementById("output");
    kyle.innerHTML = "";
    for(var i = 0; i<100; i++){
    kyle.innerHTML += "<div>Hello world</div>";
    } 
}

function printGoodbye(){
    var kyle  = document.getElementById("output");
    kyle.innerHTML = "";
    for(var i = 0; i<100; i++){
    kyle.innerHTML += "<div>Good Bye world</div>";
    } 
}