function entrar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if(email == "senac@gmail.com" && senha =="123456"){
        window.location.href = "painel.html"
    }else{
        alert("Login ou senha inválidas")
    }





}