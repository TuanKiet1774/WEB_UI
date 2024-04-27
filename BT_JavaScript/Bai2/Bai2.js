function DangKy(){
  var ten = document.getElementById("TenDN").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  if(ten == ""){
    alert("Please enter your name");
    return false;
  }
  if(pass1 == ""){
    alert("Please enter your password");
    return false;
  }
  if(pass2 == ""){
    alert("Please enter your password again");
    return false; 
  }
  if(pass1 != pass2){
    alert("Your password is incorrect");
    return false;
  }
  else{
    alert("You have successfully registered");
    return true;
  }
}