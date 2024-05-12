var ft = document.getElementById("ft");
var inp = document.getElementById("search");
var btn = document.getElementById("btn");
var nft = document.getElementById("content");

function btn_button(){
  if(inp.value !== ""){
    ft.style.display = "none";
    nft.innerText = "inp.value";
  }
  else{
    ft.style.display = "block";
    nft.inertText = "";
  }
}
