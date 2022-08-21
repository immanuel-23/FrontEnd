var emailList= new Array("immanuelgk@gmail.com","abc@gmail.com","javascript@gmail.com");
function validateForm(){
    var email=document.myForm.uname.value;
    var pass=document.myForm.psw.value;
    if(pass.length<6){
        alert("Password is to small ");
        return false;
    }
    else if(ifpresent(email)){
        return true;
    }else{
        alert("Sorry this email id doest not exit please register");
        return false;
    }
  
}

    function ifpresent(emailid){
    for(var i=0;i<emailList.length;i++){
        if(emailid==emailList[i]){
            return true;
        }else{
            return false;
        }
    }
}