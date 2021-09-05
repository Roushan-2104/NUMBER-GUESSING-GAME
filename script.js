var step = 0;
var result = document.getElementById("result");
let submit = document.getElementById("submit").addEventListener("click", function () {
    step++;
    let num = document.getElementById("num").value;
    const random = Math.round(Math.random()*10);
    if (num == random) {
        result.classList.add("animation2");
        result.style.color="aquamarine";
        result.style.fontSize = "60px";
        result.innerText =  "The NUMBER IS "+ random + ", YOU GUESSED IT RIGHT ," + " It Took " + step + " Steps !!";
        step = 0;
        setTimeout(function() {
            result.classList.remove("animation2");
        }, 400);

    }
    else if (num=="") {
        result.innerText="";
    }
    else{
        result.classList.add("animation1");  
        result.style.color= "red";
        result.innerText = "The NUMBER IS "+random+" ,TRY AGAIN !!";
        setTimeout(function() {
            result.classList.remove("animation1");
        }, 100);
    }
});
let reset = document.getElementById("reset").addEventListener("click" , function () {
    result.innerText = " ";
})
