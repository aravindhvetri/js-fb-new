let form = document.querySelector("form");

form.addEventListener("submit", getData);

function getData(e){
    e.preventDefault();
    let Lmobile = document.getElementById("inp").value;
    let Lpsw = document.getElementById("inp-1").value;

    let getNum = localStorage.getItem('Mob');
    let getPsw = localStorage.getItem('psw');

if(Lmobile == getNum && Lpsw == getPsw){
    alert("MISSION SUCCESS");
    location.href=" https://aravindhvetri.github.io/js-todoList/";
}
else{
    alert("please create your new account");
}
}
