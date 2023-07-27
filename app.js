let counter = document.getElementById("count").innerHTML;
counter = Number(counter);

function lower(){
    counter -= 1;
    document.getElementById("count").innerHTML = counter;
    console.log(counter);
}
function add(){
    counter += 1;
    document.getElementById("count").innerHTML = counter;
    console.log(counter);
}

let btnLower = document.getElementById("lower");
let btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", add);
btnLower.addEventListener("click", lower);

