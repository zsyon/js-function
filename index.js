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

function myFunction(){
  var input = document.getElementById("veri").value;
  var ul = document.getElementById("ul#liste");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
}



function arkaplan() {
  document.getElementById("paragraf1").style.backgroundColor="yellow";
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


