var inc = document.getElementById("inc");
var reset = document.getElementById("reset");
var dec = document.getElementById("dec");

inc.addEventListener("click", function(){
    let val = parseInt(document.getElementById("value").innerHTML);
    val++;
    document.getElementById("value").innerHTML = val;
    console.log(val);
    setColor()
});

reset.addEventListener("click", function(){
    val = 0;
    document.getElementById("value").innerHTML = val;
    console.log(val);
    setColor()
});

dec.addEventListener("click", function(){
    let val = parseInt(document.getElementById("value").innerHTML);
    val--;
    document.getElementById("value").innerHTML = val;
    console.log(val);
    setColor()
});

function setColor(){
    let val = parseInt(document.getElementById("value").innerHTML);
    let element = document.getElementById("value");
    if(val==0){
        element.style.color = "black";
    }
    else if(val>0){
        element.style.color = "green";
    }
    else{
        element.style.color = "red";
    }
}