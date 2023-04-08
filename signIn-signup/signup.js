
let infoArr=[];
let checkArr=[];
let UserValidate=function(string){
    let pattern=/\s/g;
    return !pattern.test(string)
}
let PassWordValidate=function(string){
    let pattern=/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    return pattern.test(string)
}
let emailValidate=function(string){
    let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  return pattern.test(string);
}


  if(localStorage.userInfo != null){
    infoArr=JSON.parse(localStorage.userInfo);
  }

function User(user,passWord,email,position){
this.user=user;
this.passWord=passWord;
this.email=email;
this.position=position;
}


const form=document.getElementById("form")
form.addEventListener("submit",handelSubmit) 
 function handelSubmit(e){
    e.preventDefault();

const user=
     {user:e.target.user.value,
     passWord:e.target.password.value,
     confirm:e.target.confirm.value,
     email:e.target.email.value,
     position:e.target.position.value
    }
 
    let infoUser=new User(user.user,user.passWord,user.email,user.position);
    
       if(
      
      UserValidate(user.user)&&
       emailValidate(user.email)&&
      PassWordValidate(user.passWord)&&
      user.confirm==user.passWord
      ){
        console.log(user.confirm);
          infoArr.push(infoUser)
             let infoToString=JSON.stringify(infoArr)
           localStorage.setItem("userInfo",infoToString)
           console.log(infoArr)
              checkArr=[];
           for (let i = 0; i < infoArr.length; i++) {

            const element = infoArr[i].email;
            checkArr.push(element)
        }
        
        }
        console.log(checkArr)
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
console.log(findDuplicates(checkArr));
if(findDuplicates(checkArr).length!==0){
  alert("user Already exist")
  
  infoArr.pop();
   
}
   
}






