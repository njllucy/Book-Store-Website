// 
// alert(1);
// local storage of registration 
function signup(e){
    event.preventDefault();
    const button=document.getElementById('clickButton');
    const username=document.getElementById('username');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const confirmpassword=document.getElementById('confirmpassword');
    const user={
        username:username.value,
        email:email.value,
        password:password.value,
        // confirmpassword:confirmpassword.value
    };
    const json=JSON.stringify(user);
    button.addEventListener("click",()=>{
        localStorage.setItem(user,json);
        alert("User details are stored in Local storage");
         window.location.href="login.html";

    })
}
// local storage of login 
function login(e){
    event.preventDefault();
    const button =document.getElementById('clickbutton');
    const username=document.getElementById('name');
    const password=document.getElementById('password');
    const users=document.getElementById('user');
    const admin=document.getElementById('admin');
    const user={
        username:username.value,
        password:password.value

    };
    const json=JSON.stringify(user);
   
      
        button.addEventListener("click",()=>{
            localStorage.setItem(user,json);
            alert("Successfully loged in !");
            window.location.href="index.html";
        }) 
       

}