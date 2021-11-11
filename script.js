const registrationUser = () =>{
    let userName;
    let userSurname;
    let userPassword;

const isValidPassword = (userPassword) =>{
        if(userPassword.toLowerCase() !== userPassword &&
        userPassword.toUpperCase() !== userPassword &&
        userPassword.length >= 6 ){
            return true;
        }
        else{
            alert("Введите пароль правильно");
            
        }
    }    
        do{
            userName = prompt("Ваше имя:");
        }
        while(!userName);
        
        
        do{
            userSurname = prompt("Ваша фамилия:");
        }
        while(!userSurname);
        
        do{
            userPassword = prompt("Введите пароль, который больше 6 символов и разного регистра:");
        }
        while(!isValidPassword(userPassword));   
        

        
         
           
        
        
        userName=userName[0].toUpperCase()+userName.slice(1,userName.length).toLowerCase();
        
        userSurname=userSurname[0].toUpperCase()+userSurname.slice(1,userSurname.length).toLowerCase();
        
        alert(`Welcome, ${userName} ${userSurname}`);
  
  
}
registrationUser();