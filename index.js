function hello(){
  let w = window.open();
  w.document.open();
  w.document.write("<h1>HELLO WORLD !</h1>");
  w.document.close();
}

function paragraf(){
  document.getElementById("paragraf").innerHTML = "HELLO WORLD!"
}

let ulDOM = document.querySelector("ul#liste")
let liDOM = document.createElement("li");

liDOM.innerHTML = "kendi"

ulDOM.append(liDOM)


