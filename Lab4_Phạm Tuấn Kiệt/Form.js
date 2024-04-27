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

function show_pass1(){
  var pass1 = document.getElementById("pass1");
  var eye1 = document.getElementById("eye-on1");

  if (pass1.type === "password") {
    pass1.type = "text";
    eye1.classList.remove("fa-eye-slash");
    eye1.classList.add("fa-eye");
  } else {
    pass1.type = "password";
    eye1.classList.remove("fa-eye");
    eye1.classList.add("fa-eye-slash");
  }
}

function checkuser(){
  var user = document.getElementById("user").value;
  var a_cong = user.indexOf("@");
  var doc = user.lastIndexOf(".");
  var mess = document.getElementById("message");
  var Userlength = 5;

  if(user == "") 
  {
    mess.innerText = "please enter your username";
    return false;
  }
  else 
  {
    if(user.length < Userlength) 
    {
      mess.innerText = "your username must be at least 4 characters";
      return false;
    }
    else 
    {
      if(a_cong < 1 || doc < (a_cong + 2) || (doc + 2) >= user.length)
      {
        mess.innerText = "Please enter a valid e-mail address.";
        return false;
      }
      else
      {
        mess.innerText = "";
        return true;
      }
    }
  }  
}

function checkpass(){
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

function checkdn(){
  if(checkuser() && checkpass()){
    alert("Login successfully");
    return true;
  }
  else 
  {
    alert("Login failed");
    return false;
  }
}

function check_email(){
  var email = document.getElementById("email").value;
  var a_cong = email.indexOf("@");
  var doc = email.lastIndexOf(".");
  var log = document.getElementById("log");
  var Userlength = 5;
 

  if(email == "") 
  {
    log.innerText = "Please enter your email address";
    return false;
  }
  else 
  {
    if(email.length < Userlength) 
    {
      log.innerText = "Your username length must be at least 8 characters";
      return false;
    }
    else 
    {
      if(a_cong < 1 || doc < (a_cong + 2) || (doc + 2) >= email.length)
      {
        log.innerText = "Please enter a valid e-mail address.";
        return false;
      }
      else
      {
        log.innerText = "";
        return true;
      }
    }
  }
}

function checkpass1() {
  var pass1 = document.getElementById("pass1").value;
  var pass = document.getElementById("pass").value;
  var Passlength = 9;
  var log = document.getElementById("log");

  if (pass == "") 
  {
    log.innerText = "Please enter your password";
    return false;
  } else if (pass.length < Passlength) 
        {
          log.innerText = "Your password must be at least 9 characters";
          return false;
        } else if (pass1 == "") 
                {
                  log.innerText = "Please re-enter your password";
                  return false;
                } else if (pass1 != pass) 
                        {
                          log.innerText = "Your passwords do not match";
                          return false;
                        } 
                        else 
                            {
                              log.innerText = "";
                              return true;
                            }
}

function Xoa(){
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("pass1").value = "";
  document.getElementById("log").innerText = "";
}

function checkdk(){
  if(check_email() && checkpass1()){
    alert("Sign up successfully");
    return true;
  }
  else 
  {
   alert("Sign up failed");
    return false;
  }
}