function validateForm(){
    var fname=document.myForm.firstname.value;
    var lastname=document.myForm.lastname.value;
    var email=document.myForm.uname.value;
    var pass=document.myForm.psw.value;
    var cpass=document.myForm.cpsw.value;
   // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(fname==null){
        alert("First name cant be Empty");
        return false
    }else if(lastname==null){
        alert("Last name cant be Empty");
        return false;
    }
    else if(pass.length<6){
        alert("Pass word cant be less then 6");
        return false;

    }
    else if(pass!==cpass){
        alert("Confirm password doesnt matches password")
        return false;
    }else{
        return true;
    }
   
  
}
