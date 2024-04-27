function reset(){
  document.getElementById("a").value = null;
  document.getElementById("b").value = null;
  document.getElementById("kq").value = null;
  document.getElementById("log").innerText =" ";
}
function check(a,b,c){
  if(isNaN(c) == false){
    document.getElementById("kq").value = c;
    document.getElementById("log").innerText ="";
  }
  else 
  {
    if(isNaN(a) == true && isNaN(b) == true){
      document.getElementById("log").innerText ="Nhập lại a và b (dạng số)";
      document.getElementById("a").value = null;
      document.getElementById("b").value = null;
      document.getElementById("kq").value = null;
    }
    else 
    {
      if(isNaN(a) == true)
      {
        document.getElementById("log").innerText ="Nhập lại a (dạng số)";
        document.getElementById("kq").value = null;
        document.getElementById("a").value = null;
      }
      else
      {
        document.getElementById("log").innerText ="Nhập lại b (dạng số)";
        document.getElementById("kq").value = null;
        document.getElementById("b").value = null;
      }
    }
  }
}

function Sum(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sum = parseFloat(a) + parseFloat(b);
  check(a,b,sum);
}

function Sub(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var sub = parseFloat(a) - parseFloat(b);
  check(a,b,sub);
}

function Mul(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var mul = parseFloat(a) * parseFloat(b);
  check(a,b,mul);
}

function Div(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  if( b == 0) {
    document.getElementById("log").innerText ="Nhập lại b khác 0";
    document.getElementById("kq").value = null;
    document.getElementById("b").value = null;
  }
  else
  {
    var div = parseFloat(a) / parseFloat(b);
    check(a,b,div);
  }
}