function show_pass(){
  var pass = document.getElementById("pass");
  var eye = document.getElementById("eye-on");

  if (pass.type === "password") {
    pass.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    pass.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
}

function check(){
  var user = document.getElementById("user").value;
  var btn_show = document.getElementById("signin");
  var pass = document.getElementById("pass").value;
  var mess = document.getElementById("message");

  if(user != null && pass != null)
  {
    if(user == "phamtuankiet" && pass == "64131060")
    {
      btn_show.innerText="Chào Tuấn Kiệt";
      btn_show.style.color = "white";
      return true;
    }
  } 
  else
  {
    mess.innerText = "please enter your password";
    btn_show.innerText="Đăng Nhập";
    btn_show.style.color = "white";
    return false;
  }
}

function DangNhap(){
  var pass = document.getElementById("pass").value;
  var mess = document.getElementById("message");
  var Passlength = 8;

  if(pass == "")
  {
    mess.innerText = "please enter your password";
    return false;
  }
  else 
  {
    if(pass.length < Passlength) 
    {
      mess.innerText = "your password must be at least 9 characters";
      return false;
    }
    else 
    {
      mess.innerText = "";
      return true;
    }
  }
}

function show_model(){
  var btn = document.getElementById("btn-login");
  var model = document.getElementById("form-dang-nhap");

  if(model.style.display == "block"){
    model.style.display = "none";
  }
  else 
  {
    model.style.display = "block";
  }
}