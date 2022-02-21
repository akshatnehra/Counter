let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let btnClasses = e.currentTarget.classList;
        if(btnClasses.contains("inc")){
            count++;
        }
        else if(btnClasses.contains("dec")){
            count--;
        }
        else{
            count = 0;
        }

        if(count<0){
            value.style.color = "red";
        }
        else if(count>0){
            value.style.color = "green";
        }
        else{
            value.style.color = "black";
        }

        value.textContent = count;
    });
});