function myfun(){
    var a=document.getElementById("use").value;
    if(a.length<5){
        document.getElementById("user_message").innerHTML="** User Id must be greater than 5 characer";
        return false;
    }
    if(a.length>12){
        document.getElementById("user_message").innerHTML="** User Id must be less than 12 characer";
        return false;
    }
    var b=document.getElementById("word").value;
    if(b.length<7){
        document.getElementById("password_message").innerHTML="** Password must be greater than 7 characer";
        return false;
    }
    if(b.length>12){
        document.getElementById("password_message").innerHTML="** Password must be less than 12 characer";
        return false;
    }
    var c = /^[A-Za-z]+$/;
    var d =document.getElementById("me").value;
    if(!(c.test(d))){
        document.getElementById("name_message").innerHTML="** Only Alphabets are allowed";
        return false;

    }
    var e=document.getElementById("code").value;
    if(isNaN(e)){
        document.getElementById("zip_message").innerHTML="** Only Numbers are allowed";
        return false;
    }
    var f=document.myform.emailname.value;
    if(f.indexOf('@')<=0){
        document.getElementById("Email_message").innerHTML="** Invalid @ position";
        return false;
    }
    if((f.charAt(f.length-4)!='.') && (f.charAt(f.length-3)!='.'))
    {
        document.getElementById("Email_message").innerHTML="** Invalid . position 4";
        return false;
    }
    var h=document.myform.gen_der;
    for(i=0;i<h.length;i++){
        if(h[i].checked==true){
            return true;
        }}
    document.getElementById("message").innerHTML="** Please fill anyone";
    return false;
    }

