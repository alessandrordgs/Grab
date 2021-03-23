function valid(){
    var email =loginForm.email.value;
    var regex=/[!-@]/

var regex=/[@]/
if(regex.test(email)==true){
  alert("valido")
}else{
  var element= document.getElementById('email');
    element.classList.add("red");
    document.getElementById('error').innerHTML="Por favor, insira um email válido";
    document.getElementsByName('email')[0].placeholder='email@exemplo.com'
}
}
