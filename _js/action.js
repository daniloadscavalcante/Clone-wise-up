var divpass = document.getElementById('card-login__showpass');  
var campo = document.getElementById('password');
var campoemail = document.getElementById('email');
var divemail = document.getElementById('card-login__email'); 

function actionemail(){    
    campoemail.style.borderBottom ="none";
    campo.style.borderBottom ="1px solid #7F7C8E";
    divemail.classList.add('card-login__showpass--action');
    divpass.classList.remove('card-login__showpass--action');
}
function action(){        
    campo.style.borderBottom ="none";
    campoemail.style.borderBottom ="1px solid #7F7C8E";
    divpass.classList.add('card-login__showpass--action');
    divemail.classList.remove('card-login__showpass--action');
}
