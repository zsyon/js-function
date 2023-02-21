function hello(){
  let w = window.open();
  w.document.open();
  w.document.write("<h1>HELLO WORLD !</h1>");
  w.document.close();
}

function paragraf(){
  document.getElementById("paragraf").innerHTML = "HELLO WORLD!"
}


document.getElementById("ekle").addEventListener("click", myFunction);

function myFunction() {
  var input = document.getElementById("veri").value;
  var ul = document.getElementById("liste");
  var li = document.createElement("li");
  li.innerText = input;
  ul.appendChild(li);
}

function arkaplan() {
  document.getElementById("paragraf1").style.backgroundColor="yellow";
}

sayi = document.getElementById("sayı").innerHTML = "100"

arttır = document.getElementById("arttır")
azalt = document.getElementById("azalt")

function sayıArttır(){
  console.log("aaaa")
  sayi = document.getElementById("sayı").innerHTML
  console.log(sayi)
  sayi = Number(sayi) + 1
  document.getElementById("sayı").innerHTML = sayi
  console.log(sayi)
}



function arrow (nums) {
  let arr = [];
  nums.forEach(nums => {
    if(nums%2 == 0){

      return arr.push(`${nums*2}`)
    }
    else {
      return arr.push(`${nums*3}`)
    }
    
  });

  return `[${arr}]`
}


document.write(arrow([1,2,3,4,5]));


